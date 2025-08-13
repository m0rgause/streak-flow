import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const connectionString = process.env.DATABASE_URL;

const prismaPg = new PrismaPg(
  {
    connectionString,
  },
  {
    schema: "public",
  }
);

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
    adapter: prismaPg,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
