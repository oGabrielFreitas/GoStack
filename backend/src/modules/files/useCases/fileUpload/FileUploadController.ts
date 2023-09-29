import { Request, Response } from "express";
import { FileUploadUseCase } from "./FileUploadUseCase";

export class FileUploadedController {
  async handle(req: Request, res: Response){
    const {file_name } = req.body;

    console.log(req.file)

    const fileUploader = new FileUploadUseCase();

    try{
      const upload = await fileUploader.execute({file_name: 'Nome arquivo', file_type:'PDF', file_size: 30.5});

      return res.status(200).json(upload)
    }catch(err){
      return res.status(400).json({message: err.message})
    }

  }
}
