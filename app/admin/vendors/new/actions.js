'use server';

import { prisma } from '@/lib/prisma';

export async function addVendor(values) {
  const vendor = await prisma.vendor.create({
    data: {
      name: values.name,
      slug: values.slug,
    },
  });
  return vendor;
}
