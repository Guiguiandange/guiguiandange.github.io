import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'development') {
  if (!global.prismaClient) {
    global.prismaClient = new PrismaClient();
  }
  prisma = global.prismaClient;
} else {
  prisma = new PrismaClient();
}

export { prisma };
