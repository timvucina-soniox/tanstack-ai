---
id: ContentPartSource
title: ContentPartSource
---

# Interface: ContentPartSource

Defined in: [types.ts:31](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L31)

Source specification for multimodal content.
Supports both inline data (base64) and URL-based content.

## Properties

### type

```ts
type: "data" | "url";
```

Defined in: [types.ts:37](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L37)

The type of source:
- 'data': Inline data (typically base64 encoded)
- 'url': URL reference to the content

***

### value

```ts
value: string;
```

Defined in: [types.ts:43](https://github.com/TanStack/ai/blob/main/packages/typescript/ai/src/types.ts#L43)

The actual content value:
- For 'data': base64-encoded string
- For 'url': HTTP(S) URL or data URI
