---
id: ToolInputAvailableStreamChunk
title: ToolInputAvailableStreamChunk
---

# Interface: ToolInputAvailableStreamChunk

Defined in: [types.ts:527](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L527)

## Extends

- [`BaseStreamChunk`](./BaseStreamChunk.md)

## Properties

### id

```ts
id: string;
```

Defined in: [types.ts:467](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L467)

#### Inherited from

[`BaseStreamChunk`](./BaseStreamChunk.md).[`id`](./BaseStreamChunk.md#id)

***

### input

```ts
input: any;
```

Defined in: [types.ts:531](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L531)

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

Defined in: [types.ts:529](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L529)

***

### toolName

```ts
toolName: string;
```

Defined in: [types.ts:530](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L530)

***

### type

```ts
type: "tool-input-available";
```

Defined in: [types.ts:528](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L528)

#### Overrides

[`BaseStreamChunk`](./BaseStreamChunk.md).[`type`](./BaseStreamChunk.md#type)
