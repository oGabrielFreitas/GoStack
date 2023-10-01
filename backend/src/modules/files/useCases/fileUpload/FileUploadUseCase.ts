import { FileUploadDTO } from "../../dtos/FileUploadDTO";
import { FileUploadedResponseDTO } from "../../dtos/FileUploadedResponseDTO"

import { PDFLoader } from "langchain/document_loaders/fs/pdf";

import { RetrievalQAChain } from "langchain/chains";
import { VectorStoreDocumentService } from "../../../../services/VectorStoreDocumentService";
import { llmModel } from "../../../../config/OpenAIConfig";
import { OpenAI } from "langchain/llms/openai";

import { Document } from "langchain/document";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

class FileUploadUseCase {


  // ---------------------------------------------------------------------

  async execute({ file }: FileUploadDTO): Promise<FileUploadedResponseDTO> {


    const loader = new PDFLoader(file.path);

    const docs = await loader.load();

    const vectorStoreService = new VectorStoreDocumentService();

    const vectorStore = await vectorStoreService.save(docs, "./teste")


    // Search for the most similar document
    // const retriever = await vectorStore.similaritySearch("Quem pode expedir certificados de cursos de Pós-Graduação?", 2);
    // console.log(retriever);

    // const llm = new OpenAI({0});


    // Initialize a retriever wrapper around the vector store
    // const vectorStoreRetriever = vectorStore.asRetriever(2);

    const chain = RetrievalQAChain.fromLLM(llmModel, vectorStore.asRetriever(2), {
      returnSourceDocuments: true, // Can also be passed into the constructor
    });

    // Create a chain that uses the OpenAI LLM and HNSWLib vector store.
    // const chain = RetrievalQAChain.fromLLM(llmModel, vectorStoreRetriever);
    const res = await chain.call({
      query: "Quem pode expedir certificados de cursos de Pós-Graduação?",
      // query: "Sobre qual instituição estamos falando?",


    });
    console.log({ res });
    /*
    {
      res: {
        text: 'The president said that Justice Breyer was an Army veteran, Constitutional scholar,
        and retiring Justice of the United States Supreme Court and thanked him for his service.'
      }
    }
    */


    const response = {
    file_status: 'Success',
    // doc: docs,
    // output: embedded_docs,
    // sources: retriever
    // res: res,
    // chain: chain
    }

    return response


  }
}

export { FileUploadUseCase }



    // // LER PDF POR STREAM? APRIMORAR DEPOIS
    // const stream = fs.createReadStream(file.path);
    // const data = fs.readFileSync(file.path);
    // console.log(data)
    // // res.contentType("application/pdf");
    // // res.send(data);
    // // stream.pipe()
