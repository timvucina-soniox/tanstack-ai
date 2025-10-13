import { AI, tool } from "@tanstack/ai";
import { OpenAIAdapter } from "@tanstack/ai-openai";

/**
 * NEW PATTERN: Define tools with the exact Tool structure.
 * No magic conversions - you provide exactly what the AI expects!
 * 
 * Benefits:
 * - Full transparency - you see the exact structure
 * - No hidden conversions or transformations
 * - Complete control over the tool definition
 * - Types automatically inferred from parameters schema!
 */

const tools = {
  // Simple tool with no arguments
  getCurrentTime: tool({
    type: "function",
    function: {
      name: "getCurrentTime",
      description: "Get the current time",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
    execute: async () => {
      return new Date().toISOString();
    },
  }),

  // Tool with required and optional arguments
  // Type is automatically inferred from the parameters!
  getWeather: tool({
    type: "function",
    function: {
      name: "getWeather",
      description: "Get the current weather for a location",
      parameters: {
        type: "object",
        properties: {
          location: {
            type: "string",
            description: "The city name",
          },
          units: {
            type: "string",
            description: "Temperature units (celsius or fahrenheit)",
            enum: ["celsius", "fahrenheit"],
          },
        },
        required: ["location"], // Only location is required
      },
    },
    execute: async (args) => {
      // ✅ args is automatically typed as { location: string; units?: string }
      console.log(`Getting weather for ${args.location} in ${args.units || "fahrenheit"}`);
      return JSON.stringify({
        location: args.location,
        temperature: 72,
        units: args.units || "fahrenheit",
        condition: "sunny",
      });
    },
  }),

  // Tool with all required arguments
  searchPlaces: tool({
    type: "function",
    function: {
      name: "searchPlaces",
      description: "Search for places near a location",
      parameters: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "What to search for (e.g., 'restaurants', 'hotels')",
          },
          latitude: {
            type: "number",
            description: "Latitude coordinate",
          },
          longitude: {
            type: "number",
            description: "Longitude coordinate",
          },
          radius: {
            type: "number",
            description: "Search radius in meters",
            minimum: 0,
            maximum: 50000,
          },
        },
        required: ["query", "latitude", "longitude"],
      },
    },
    execute: async (args) => {
      // ✅ args is automatically typed as { query: string; latitude: number; longitude: number; radius?: number }
      const radius = args.radius || 1000;
      console.log(
        `Searching for "${args.query}" near (${args.latitude}, ${args.longitude}) within ${radius}m`
      );
      return JSON.stringify({
        results: [
          { name: "Place 1", distance: 100 },
          { name: "Place 2", distance: 250 },
        ],
      });
    },
  }),
} as const;

// Initialize AI with tools
const ai = new AI({
  adapters: {
    openai: new OpenAIAdapter({
      apiKey: process.env.OPENAI_API_KEY || "",
    }),
  },
  tools, // Pass the tools object directly - no wrappers!
  systemPrompts: ["You are a helpful assistant with access to various tools."],
});

async function main() {
  // Use tools in chat
  const response = await ai.chat({
    adapter: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "user",
        content: "What's the weather like in San Francisco? Also what time is it?",
      },
    ],
    tools: ["getWeather", "getCurrentTime"], // ✅ Type-safe tool names
    toolChoice: "auto",
    maxIterations: 5,
  });

  console.log("Response:", response.message.content);
}

// Uncomment to run:
// main().catch(console.error);
