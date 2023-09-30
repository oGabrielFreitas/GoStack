import { Request, Response } from "express";
import { FileUploadUseCase } from "./FileUploadUseCase";

class FileUploadedController {

  async handle(request: Request, response: Response){

    const { file } = request;

    const fileUploader = new FileUploadUseCase();

    try{
      const upload = await fileUploader.execute({file});

      return response.status(200).json(upload)
    }catch(err){
      return response.status(400).json({message: err.message})
    }

  }
}

export { FileUploadedController }
