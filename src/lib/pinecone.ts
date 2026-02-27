import { Pinecone } from "@pinecone-database/pinecone";

export const pinecone = process.env.PINECONE_API_KEY
  ? new Pinecone({ apiKey: process.env.PINECONE_API_KEY })
  : null;

export const getIndex = () => {
  if (!pinecone || !process.env.PINECONE_INDEX) return null;
  return pinecone.index(process.env.PINECONE_INDEX);
};
