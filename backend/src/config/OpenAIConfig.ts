import { OpenAI } from "langchain/llms/openai"
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

const llmModel = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 1,
  modelName: "gpt-3.5-turbo",
});

const embeddingsOpenAI = new OpenAIEmbeddings({
  openAIApiKey: process.env.OPENAI_API_KEY,
});

export { llmModel, embeddingsOpenAI }
