---
id: AgentLoopState
title: AgentLoopState
---

# Interface: AgentLoopState

Defined in: [types.ts:398](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L398)

State passed to agent loop strategy for determining whether to continue

## Properties

### finishReason

```ts
finishReason: string | null;
```

Defined in: [types.ts:404](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L404)

Finish reason from the last response

***

### iterationCount

```ts
iterationCount: number;
```

Defined in: [types.ts:400](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L400)

Current iteration count (0-indexed)

***

### messages

```ts
messages: ModelMessage<
  | string
  | ContentPart<unknown, unknown, unknown, unknown>[]
  | null>[];
```

Defined in: [types.ts:402](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L402)

Current messages array
