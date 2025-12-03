---
id: ChatOptions
title: ChatOptions
---

# Interface: ChatOptions\<TModel, TProviderOptionsSuperset, TOutput, TProviderOptionsForModel\>

Defined in: [types.ts:424](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L424)

Options passed into the SDK and further piped to the AI provider.

## Type Parameters

### TModel

`TModel` *extends* `string` = `string`

### TProviderOptionsSuperset

`TProviderOptionsSuperset` *extends* `Record`\<`string`, `any`\> = `Record`\<`string`, `any`\>

### TOutput

`TOutput` *extends* [`ResponseFormat`](./ResponseFormat.md)\<`any`\> \| `undefined` = `undefined`

### TProviderOptionsForModel

`TProviderOptionsForModel` = `TProviderOptionsSuperset`

## Properties

### abortController?

```ts
optional abortController: AbortController;
```

Defined in: [types.ts:452](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L452)

AbortController for request cancellation.

Allows you to cancel an in-progress request using an AbortController.
Useful for implementing timeouts or user-initiated cancellations.

#### Example

```ts
const abortController = new AbortController();
setTimeout(() => abortController.abort(), 5000); // Cancel after 5 seconds
await chat({ ..., abortController });
```

#### See

https://developer.mozilla.org/en-US/docs/Web/API/AbortController

***

### agentLoopStrategy?

```ts
optional agentLoopStrategy: AgentLoopStrategy;
```

Defined in: [types.ts:434](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L434)

***

### messages

```ts
messages: ModelMessage<
  | string
  | ContentPart<unknown, unknown, unknown, unknown>[]
  | null>[];
```

Defined in: [types.ts:431](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L431)

***

### model

```ts
model: TModel;
```

Defined in: [types.ts:430](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L430)

***

### options?

```ts
optional options: CommonOptions;
```

Defined in: [types.ts:435](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L435)

***

### output?

```ts
optional output: TOutput;
```

Defined in: [types.ts:438](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L438)

***

### providerOptions?

```ts
optional providerOptions: TProviderOptionsForModel;
```

Defined in: [types.ts:436](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L436)

***

### request?

```ts
optional request: Request | RequestInit;
```

Defined in: [types.ts:437](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L437)

***

### systemPrompts?

```ts
optional systemPrompts: string[];
```

Defined in: [types.ts:433](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L433)

***

### tools?

```ts
optional tools: Tool<ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>, string>[];
```

Defined in: [types.ts:432](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L432)
