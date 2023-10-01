import { embeddingsOpenAI } from "../config/OpenAIConfig";
import { FaissStore } from "langchain/vectorstores/faiss";

import { Document } from "langchain/dist/document";

interface Docs {
  docs : Document[];
}

class VectorStoreDocumentService {

  async save( docs:Document[], directory:string ) {

    const vectorStore = await FaissStore.fromDocuments(
      docs,
      embeddingsOpenAI,
    );

    await vectorStore.save(directory);

  }

  async load( directory:string ):Promise<FaissStore>{

    const loadedVectorStore = await FaissStore.load(
      directory,
      embeddingsOpenAI,
    );

    return loadedVectorStore

  }

}

export { VectorStoreDocumentService }
