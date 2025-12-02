import { PrismaClient } from "./generated/prisma/client";

const prismaForGobal = global as unknown as {
  prisma?: PrismaClient;
};

const prisma = prismaForGobal.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  prismaForGobal.prisma = prisma;
}

export default prisma;
