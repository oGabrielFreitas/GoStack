import { User } from "@prisma/client";
import { prisma_client } from "../../../../prisma/PrismaClient";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";


export class CreateUserUseCase {
  async execute({ name, email }: CreateUserDTO): Promise<User> {

    //Verificar se o usuário já existe
    const userAlreadyExists = await prisma_client.user.findUnique({
      where: {
        email: email //Quando o nome é o mesmo pode-se colocar apenas 1x sem os dois pontos e repetir.
      }
    })

    if (userAlreadyExists){
      throw new Error("Email already registered!")
    }

    //Se não existir => Criar o usuário
    const user = await prisma_client.user.create({
      data: {
        name: name,
        email: email,
      }
    });

    return user;

  }
}
