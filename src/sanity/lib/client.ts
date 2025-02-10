// sanity/client.ts
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // CDN for faster performance in production
  token: process.env.SANITY_API_TOKEN, // Add the token here
});