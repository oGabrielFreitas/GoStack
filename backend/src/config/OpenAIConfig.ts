import { OpenAI } from "langchain/llms/openai"
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

const llmOpenAI = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.8,
});

const embeddingsOpenAI = new OpenAIEmbeddings({
  openAIApiKey: process.env.OPENAI_API_KEY,
});

export { llmOpenAI, embeddingsOpenAI }
