import { User } from "@prisma/client";

export interface AuthResponseDTO{

  token: string
  user: User

}
