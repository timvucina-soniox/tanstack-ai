---
id: ThinkingStreamChunk
title: ThinkingStreamChunk
---

# Interface: ThinkingStreamChunk

Defined in: [types.ts:534](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L534)

## Extends

- [`BaseStreamChunk`](./BaseStreamChunk.md)

## Properties

### content

```ts
content: string;
```

Defined in: [types.ts:537](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L537)

***

### delta?

```ts
optional delta: string;
```

Defined in: [types.ts:536](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L536)

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

### type

```ts
type: "thinking";
```

Defined in: [types.ts:535](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L535)

#### Overrides

[`BaseStreamChunk`](./BaseStreamChunk.md).[`type`](./BaseStreamChunk.md#type)
