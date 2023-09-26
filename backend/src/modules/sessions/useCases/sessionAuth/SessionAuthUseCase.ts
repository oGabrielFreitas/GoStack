import { prisma_client } from "../../../../prisma/PrismaClient";
import { SessionAuthDTO } from "../../dtos/SessionAuthDTO";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { AuthResponseDTO } from "../../dtos/AuthResponseDTO";


export class SessionAuthUseCase {
  async execute({ email , password }: SessionAuthDTO): Promise<AuthResponseDTO> {

    //Verificar se o email já existe

    // Busca usuário no banco de dados
    const userSearched = await prisma_client.user.findUnique({
      where: {
        email
      }
    })

    if (!userSearched){
      throw new Error("Wrong e-mail or password.")
    }

    // Comparando a senha

    const passwordMatched = await compare(password, userSearched.password)

    if (!passwordMatched){
      throw new Error("Wrong e-mail or password.")
    }


    // Se tudo certo, ele irá retorar o usuário e o token JWT

    const token = sign({}, 'dcff1efbc16a5db3abf677b46bb58892', {
      subject: userSearched.id,
      expiresIn: '1d',
    });

    delete userSearched.password // Apagamos a hash de senha do json

    return {
      token,
      user: userSearched,
    }

  }
}
