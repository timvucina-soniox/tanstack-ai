---
id: ToolResultStreamChunk
title: ToolResultStreamChunk
---

# Interface: ToolResultStreamChunk

Defined in: [types.ts:492](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L492)

## Extends

- [`BaseStreamChunk`](./BaseStreamChunk.md)

## Properties

### content

```ts
content: string;
```

Defined in: [types.ts:495](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L495)

***

### id

```ts
id: string;
```

Defined in: [types.ts:467](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L467)

#### Inherited from

[`BaseStreamChunk`](./BaseStreamChunk.md).[`id`](./BaseStreamChunk.md#id)

***

### model

```ts
model: string;
```

Defined in: [types.ts:468](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L468)

#### Inherited from

[`BaseStreamChunk`](./BaseStreamChunk.md).[`model`](./BaseStreamChunk.md#model)

***

### timestamp

```ts
timestamp: number;
```

Defined in: [types.ts:469](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L469)

#### Inherited from

[`BaseStreamChunk`](./BaseStreamChunk.md).[`timestamp`](./BaseStreamChunk.md#timestamp)

***

### toolCallId

```ts
toolCallId: string;
```

Defined in: [types.ts:494](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L494)

***

### type

```ts
type: "tool_result";
```

Defined in: [types.ts:493](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L493)

#### Overrides

[`BaseStreamChunk`](./BaseStreamChunk.md).[`type`](./BaseStreamChunk.md#type)
