---
id: ContentStreamChunk
title: ContentStreamChunk
---

# Interface: ContentStreamChunk

Defined in: [types.ts:472](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L472)

## Extends

- [`BaseStreamChunk`](./BaseStreamChunk.md)

## Properties

### content

```ts
content: string;
```

Defined in: [types.ts:475](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L475)

***

### delta

```ts
delta: string;
```

Defined in: [types.ts:474](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L474)

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

### role?

```ts
optional role: "assistant";
```

Defined in: [types.ts:476](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L476)

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
type: "content";
```

Defined in: [types.ts:473](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L473)

#### Overrides

[`BaseStreamChunk`](./BaseStreamChunk.md).[`type`](./BaseStreamChunk.md#type)
