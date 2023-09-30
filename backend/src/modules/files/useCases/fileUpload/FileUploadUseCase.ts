import { FileUploadDTO } from "../../dtos/FileUploadDTO";
import { FileUploadedResponseDTO } from "../../dtos/FileUploadedResponseDTO"

import fs from "fs"; // FileSystem, nativo do NodeJS

class FileUploadUseCase {


  // ---------------------------------------------------------------------





  async execute({ file }: FileUploadDTO): Promise<FileUploadedResponseDTO> {

    console.log(file)



    // COlocar a função aqui


    const response = {
    file_status: 'Success',
    }

    return response


  }
}

export { FileUploadUseCase }



    // // LER PDF PRO STREAM? APRIMORAR DEPOIS
    // const stream = fs.createReadStream(file.path);
    // const data = fs.readFileSync(file.path);
    // console.log(data)
    // // res.contentType("application/pdf");
    // // res.send(data);
    // // stream.pipe()
