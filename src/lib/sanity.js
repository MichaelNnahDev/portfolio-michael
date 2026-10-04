import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '799ub142',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});
