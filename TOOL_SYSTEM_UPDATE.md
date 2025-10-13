# Tool System Update - Direct Structure Approach

## Overview

The `tool()` helper has been simplified to require users to provide the exact Tool structure expected by the AI system. **No conversions or transformations happen under the hood** - what you define is exactly what the AI receives.

**Bonus:** The `execute` function argument types are **automatically inferred** from the `parameters` schema - no need for manual type annotations!

## Changes Made

### 1. Simplified `tool()` Function

**Before:** Had magic conversions from shorthand properties to full Tool structure
**After:** Requires full Tool structure with `type: "function"` and `function: {...}`

### 2. Removed Magic Transformations

- No more automatic extraction of `required` properties from property definitions
- No more building JSON Schema behind the scenes
- User defines the exact structure

### 3. Auto-Inferred Type Arguments

The `execute` function arguments are **automatically typed** based on the `parameters.properties` and `parameters.required` fields:
- Properties in `required` array → required fields
- Properties not in `required` → optional fields
- `type: "string"` → `string`
- `type: "number"` → `number`
- `type: "boolean"` → `boolean`

## New Usage Pattern

```typescript
import { AI, tool } from "@tanstack/ai";

const tools = {
  myTool: tool({
    type: "function",
    function: {
      name: "myTool",
      description: "Description of what the tool does",
      parameters: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "The ID parameter",
          },
          optional: {
            type: "string",
            description: "An optional parameter",
          },
        },
        required: ["id"], // Only id is required
      },
    },
    execute: async (args) => {
      // ✅ args is automatically typed as { id: string; optional?: string }
      return JSON.stringify({ id: args.id });
    },
  }),
} as const;

const ai = new AI({
  adapters: { /* ... */ },
  tools, // Pass directly - no wrapper needed
});
```

## Benefits

✅ **Full Transparency** - You see exactly what structure the AI expects  
✅ **No Magic** - No hidden conversions or transformations  
✅ **Complete Control** - Define exactly what you need  
✅ **Auto Type Inference** - Execute function args automatically typed from schema  
✅ **Standard Format** - Uses the exact Tool interface format  

## Type Inference Examples

```typescript
// Required field only
tool({
  function: {
    parameters: {
      properties: { id: { type: "string" } },
      required: ["id"]
    }
  },
  execute: async (args) => {
    // args type: { id: string }
  }
})

// Mixed required and optional
tool({
  function: {
    parameters: {
      properties: {
        name: { type: "string" },
        age: { type: "number" },
        active: { type: "boolean" }
      },
      required: ["name", "age"]
    }
  },
  execute: async (args) => {
    // args type: { name: string; age: number; active?: boolean }
  }
})

// All optional (no required array)
tool({
  function: {
    parameters: {
      properties: {
        filter: { type: "string" },
        limit: { type: "number" }
      }
    }
  },
  execute: async (args) => {
    // args type: { filter?: string; limit?: number }
  }
})
```  

## Comparison

### Old Approach (with conversions)
```typescript
const tools = {
  myTool: tool({
    description: "My tool",
    properties: {
      id: { type: "string", required: true },
      name: { type: "string", required: false },
    },
    execute: async (args) => { /* magic typing */ }
  })
};
```

### New Approach (direct structure with auto-inference)
```typescript
const tools = {
  myTool: tool({
    type: "function",
    function: {
      name: "myTool",
      description: "My tool",
      parameters: {
        type: "object",
        properties: {
          id: { type: "string", description: "..." },
          name: { type: "string", description: "..." },
        },
        required: ["id"],
      },
    },
    execute: async (args) => {
      // ✅ args automatically typed as { id: string; name?: string }
    }
  })
} as const;
```

## Migration Guide

If you have existing code using the old pattern, update it to:

1. Add `type: "function"` at the top level
2. Wrap your config in `function: { ... }`
3. Add `name` field matching the object key
4. Convert `properties` format:
   - Remove `required` flags from individual properties
   - Move them to a `required` array in parameters
5. Remove type argument from `tool<TArgs>()` - types are now auto-inferred!
6. Change `parameters` to have `type: "object"` structure

## Example Files

- `examples/ts-chat/src/routes/demo/api.tanchat.ts` - Updated user file
- `examples/tool-direct-example.ts` - Comprehensive examples

## Technical Details

The `tool()` function now includes sophisticated type inference:

```typescript
export function tool<
  const TProps extends Record<string, any>,
  const TRequired extends readonly string[] | undefined
>(config: {
  type: "function";
  function: {
    name: string;
    description: string;
    parameters: {
      type: "object";
      properties: TProps;
      required?: TRequired;
    };
  };
  execute: (args: InferArgs<TProps, TRequired>) => Promise<string> | string;
}): Tool
```

The `InferArgs` type helper:
- Maps JSON Schema types to TypeScript types (`"string"` → `string`, etc.)
- Makes properties required if they're in the `required` array
- Makes properties optional if they're not in the `required` array
- Handles the case where `required` is undefined (all optional)

No processing or conversion happens at runtime - just type checking and passthrough!
