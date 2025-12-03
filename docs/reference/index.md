---
id: "@tanstack/ai"
title: "@tanstack/ai"
---

# @tanstack/ai

## Classes

- [BaseAdapter](./classes/BaseAdapter.md)
- [ToolCallManager](./classes/ToolCallManager.md)

## Interfaces

- [AgentLoopState](./interfaces/AgentLoopState.md)
- [AIAdapter](./interfaces/AIAdapter.md)
- [AIAdapterConfig](./interfaces/AIAdapterConfig.md)
- [ApprovalRequestedStreamChunk](./interfaces/ApprovalRequestedStreamChunk.md)
- [AudioPart](./interfaces/AudioPart.md)
- [BaseStreamChunk](./interfaces/BaseStreamChunk.md)
- [ChatCompletionChunk](./interfaces/ChatCompletionChunk.md)
- [ChatOptions](./interfaces/ChatOptions.md)
- [ClientTool](./interfaces/ClientTool.md)
- [ContentPartSource](./interfaces/ContentPartSource.md)
- [ContentStreamChunk](./interfaces/ContentStreamChunk.md)
- [DefaultMessageMetadataByModality](./interfaces/DefaultMessageMetadataByModality.md)
- [DocumentPart](./interfaces/DocumentPart.md)
- [DoneStreamChunk](./interfaces/DoneStreamChunk.md)
- [EmbeddingOptions](./interfaces/EmbeddingOptions.md)
- [EmbeddingResult](./interfaces/EmbeddingResult.md)
- [ErrorStreamChunk](./interfaces/ErrorStreamChunk.md)
- [ImagePart](./interfaces/ImagePart.md)
- [ModelMessage](./interfaces/ModelMessage.md)
- [ResponseFormat](./interfaces/ResponseFormat.md)
- [ServerTool](./interfaces/ServerTool.md)
- [SummarizationOptions](./interfaces/SummarizationOptions.md)
- [SummarizationResult](./interfaces/SummarizationResult.md)
- [TextPart](./interfaces/TextPart.md)
- [ThinkingStreamChunk](./interfaces/ThinkingStreamChunk.md)
- [Tool](./interfaces/Tool.md)
- [ToolCall](./interfaces/ToolCall.md)
- [ToolCallStreamChunk](./interfaces/ToolCallStreamChunk.md)
- [ToolConfig](./interfaces/ToolConfig.md)
- [ToolDefinition](./interfaces/ToolDefinition.md)
- [ToolDefinitionConfig](./interfaces/ToolDefinitionConfig.md)
- [ToolDefinitionInstance](./interfaces/ToolDefinitionInstance.md)
- [ToolInputAvailableStreamChunk](./interfaces/ToolInputAvailableStreamChunk.md)
- [ToolResultStreamChunk](./interfaces/ToolResultStreamChunk.md)
- [VideoPart](./interfaces/VideoPart.md)

## Type Aliases

- [AgentLoopStrategy](./type-aliases/AgentLoopStrategy.md)
- [AnyClientTool](./type-aliases/AnyClientTool.md)
- [ChatStreamOptionsForModel](./type-aliases/ChatStreamOptionsForModel.md)
- [ChatStreamOptionsUnion](./type-aliases/ChatStreamOptionsUnion.md)
- [ConstrainedContent](./type-aliases/ConstrainedContent.md)
- [ConstrainedModelMessage](./type-aliases/ConstrainedModelMessage.md)
- [ContentPart](./type-aliases/ContentPart.md)
- [ContentPartForModalities](./type-aliases/ContentPartForModalities.md)
- [ExtractModalitiesForModel](./type-aliases/ExtractModalitiesForModel.md)
- [ExtractModelsFromAdapter](./type-aliases/ExtractModelsFromAdapter.md)
- [InferToolInput](./type-aliases/InferToolInput.md)
- [InferToolName](./type-aliases/InferToolName.md)
- [InferToolOutput](./type-aliases/InferToolOutput.md)
- [ModalitiesArrayToUnion](./type-aliases/ModalitiesArrayToUnion.md)
- [Modality](./type-aliases/Modality.md)
- [StreamChunk](./type-aliases/StreamChunk.md)
- [StreamChunkType](./type-aliases/StreamChunkType.md)

## Variables

- [aiEventClient](./variables/aiEventClient.md)

## Functions

- [chat](./functions/chat.md)
- [chatOptions](./functions/chatOptions.md)
- [combineStrategies](./functions/combineStrategies.md)
- [convertZodToJsonSchema](./functions/convertZodToJsonSchema.md)
- [embedding](./functions/embedding.md)
- [maxIterations](./functions/maxIterations.md)
- [messages](./functions/messages.md)
- [summarize](./functions/summarize.md)
- [toolDefinition](./functions/toolDefinition.md)
- [toServerSentEventsStream](./functions/toServerSentEventsStream.md)
- [toStreamResponse](./functions/toStreamResponse.md)
- [untilFinishReason](./functions/untilFinishReason.md)
