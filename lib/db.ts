import { PrismaClient } from "@prisma/client/extension";

const prismaForGobal = global as unknown as {
  prisma: PrismaClient;
};

const prisma = prismaForGobal.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  prismaForGobal.prisma = prisma;
}

export default prisma;
