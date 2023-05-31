import { PrismaClient } from "@prisma/client";

// To use this keyword across our code.
declare global {
  var prisma: PrismaClient | undefined;
}

// Search for the global prisma our create a new prisma client.
// If we are in development, global prims will always be this client.
const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;

// Note: All of this was to avoid errors with next hot reload and prisma.  