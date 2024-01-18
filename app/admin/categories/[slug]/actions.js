'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function updateCategory(category, values) {
  const updatedCategory = await prisma.category.update({
    where: {
      id: category,
    },
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
  revalidatePath('/admin/categories');
  return updatedCategory;
}

export async function deleteCategory(category) {
  await prisma.category.delete({
    where: {
      id: category,
    },
  });
  revalidatePath('/admin/categories');
  return 'success';
}
