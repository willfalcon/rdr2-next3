'use server';

import { revalidatePath } from 'next/cache';

export async function updateVendor(vendor, values) {
  const updatedVendor = await prisma.vendor.update({
    where: {
      id: vendor,
    },
    data: {
      name: values.name,
      slug: values.slug,
    },
  });
  revalidatePath('/admin/vendors');
  return updatedVendor;
}

export async function deleteVendor(vendor) {
  const deletedVendor = await prisma.vendor.delete({
    where: {
      id: vendor,
    },
  });
  revalidatePath('/admin/vendors');
  return 'success';
}
