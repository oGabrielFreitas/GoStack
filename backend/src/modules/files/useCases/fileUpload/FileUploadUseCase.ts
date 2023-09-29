import { FileUploadDTO } from "../../dtos/FileUploadDTO";
import { FileUploadedResponseDTO } from "../../dtos/FileUploadedResponseDTO"

export class FileUploadUseCase {

  async execute({file_name, file_type, file_size }: FileUploadDTO): Promise<FileUploadedResponseDTO> {

    const response = {
    file_status: 'Success',
    }

    return response


  }
}
