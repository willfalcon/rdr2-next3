import { prisma } from '@/lib/prisma';
import ListTitle from '../../LIstTitle';

import UpdateVendorForm from './UpdateVendorForm';

export default async function SingleVendorPage({ params }) {
  const vendor = await prisma.vendor.findUnique({
    where: {
      slug: params.slug,
    },
  });

  return (
    <>
      <ListTitle href={`/admin/vendors/${vendor.slug}`}>{vendor.name}</ListTitle>
      <UpdateVendorForm vendor={vendor} />
    </>
  );
}
