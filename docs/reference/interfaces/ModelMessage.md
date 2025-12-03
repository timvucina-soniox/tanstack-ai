---
id: ModelMessage
title: ModelMessage
---

# Interface: ModelMessage\<TContent\>

Defined in: [types.ts:167](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L167)

## Type Parameters

### TContent

`TContent` *extends* `string` \| `null` \| [`ContentPart`](../type-aliases/ContentPart.md)[] = `string` \| `null` \| [`ContentPart`](../type-aliases/ContentPart.md)[]

## Properties

### content

```ts
content: TContent;
```

Defined in: [types.ts:174](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L174)

***

### name?

```ts
optional name: string;
```

Defined in: [types.ts:175](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L175)

***

### role

```ts
role: "user" | "assistant" | "tool";
```

Defined in: [types.ts:173](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L173)

***

### toolCallId?

```ts
optional toolCallId: string;
```

Defined in: [types.ts:177](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L177)

***

### toolCalls?

```ts
optional toolCalls: ToolCall[];
```

Defined in: [types.ts:176](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L176)
