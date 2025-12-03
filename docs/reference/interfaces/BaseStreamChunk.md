---
id: BaseStreamChunk
title: BaseStreamChunk
---

# Interface: BaseStreamChunk

Defined in: [types.ts:465](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L465)

## Extended by

- [`ContentStreamChunk`](./ContentStreamChunk.md)
- [`ToolCallStreamChunk`](./ToolCallStreamChunk.md)
- [`ToolResultStreamChunk`](./ToolResultStreamChunk.md)
- [`DoneStreamChunk`](./DoneStreamChunk.md)
- [`ErrorStreamChunk`](./ErrorStreamChunk.md)
- [`ApprovalRequestedStreamChunk`](./ApprovalRequestedStreamChunk.md)
- [`ToolInputAvailableStreamChunk`](./ToolInputAvailableStreamChunk.md)
- [`ThinkingStreamChunk`](./ThinkingStreamChunk.md)

## Properties

### id

```ts
id: string;
```

Defined in: [types.ts:467](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L467)

***

### model

```ts
model: string;
```

Defined in: [types.ts:468](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L468)

***

### timestamp

```ts
timestamp: number;
```

Defined in: [types.ts:469](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L469)

***

### type

```ts
type: StreamChunkType;
```

Defined in: [types.ts:466](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L466)
