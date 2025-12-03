---
id: ChatCompletionChunk
title: ChatCompletionChunk
---

# Interface: ChatCompletionChunk

Defined in: [types.ts:555](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L555)

## Properties

### content

```ts
content: string;
```

Defined in: [types.ts:558](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L558)

***

### finishReason?

```ts
optional finishReason: "length" | "stop" | "content_filter" | null;
```

Defined in: [types.ts:560](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L560)

***

### id

```ts
id: string;
```

Defined in: [types.ts:556](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L556)

***

### model

```ts
model: string;
```

Defined in: [types.ts:557](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L557)

***

### role?

```ts
optional role: "assistant";
```

Defined in: [types.ts:559](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L559)

***

### usage?

```ts
optional usage: object;
```

Defined in: [types.ts:561](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L561)

#### completionTokens

```ts
completionTokens: number;
```

#### promptTokens

```ts
promptTokens: number;
```

#### totalTokens

```ts
totalTokens: number;
```
