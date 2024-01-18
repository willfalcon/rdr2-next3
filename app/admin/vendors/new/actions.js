'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function addVendor(values) {
  const vendor = await prisma.vendor.create({
    data: {
      name: values.name,
      slug: values.slug,
    },
  });
  revalidatePath('/admin/vendors');
  return vendor;
}
