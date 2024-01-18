'use server';

import { prisma } from '@/lib/prisma';

export default async function createCategory(values) {
  const newCategory = await prisma.category.create({
    data: {
      name: values.name,
      slug: values.slug,
      vendor: {
        connect: {
          id: parseInt(values.vendor),
        },
      },
    },
  });
  return newCategory;
}
