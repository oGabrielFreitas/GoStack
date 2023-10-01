import { FileUploadDTO } from "../../dtos/FileUploadDTO";
import { FileUploadedResponseDTO } from "../../dtos/FileUploadedResponseDTO"

import { PDFLoader } from "langchain/document_loaders/fs/pdf";

import { Chroma } from "langchain/vectorstores/chroma";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { TextLoader } from "langchain/document_loaders/fs/text";


import fs from "fs"; // FileSystem, nativo do NodeJS
import { llmOpenAI, embeddingsOpenAI } from "../../../../config/OpenAIConfig";
import { VectorStoreDocumentService } from "../../../../services/VectorStoreDocumentService";

class FileUploadUseCase {


  // ---------------------------------------------------------------------

  async execute({ file }: FileUploadDTO): Promise<FileUploadedResponseDTO> {


    const loader = new PDFLoader(file.path);

    const docs = await loader.load();

    const texts = docs.map(doc => doc.pageContent);

    // const embedded_docs = await embeddings.embedDocuments(texts);


    // Load the docs into the vector store

    const vectorStoreService = new VectorStoreDocumentService();

    await vectorStoreService.save(docs, "./teste")

    const vectorStore = await vectorStoreService.load("./teste")


    // Search for the most similar document
    const retriever = await vectorStore.similaritySearch("Quem pode expedir certificados de cursos de Pós-Graduação?", 2);
    console.log(retriever);



    const response = {
    file_status: 'Success',
    // doc: docs,
    // output: embedded_docs,
    sources: retriever
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
