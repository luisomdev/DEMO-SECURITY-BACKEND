import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async insertUser(user: { name: string, email: string }) : Promise<Object> {

    try {
      return await prisma.client.create({
        data: {
          name: user.name,
          email: user.email,
        }
      })
      
    } catch (error) {
      return { status: false }
    }
  }
}
