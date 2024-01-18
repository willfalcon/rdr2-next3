import * as z from 'zod';

export const vendorSchema = z.object({
  name: z.string(),
  slug: z.string(),
});
