import { prisma } from '../lib/prismaClient';

export async function getAllPosts() {
  return await prisma.post.findMany();
}
