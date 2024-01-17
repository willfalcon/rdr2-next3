import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function page(props) {
  const vendors = await prisma.vendor.findMany();

  console.log(vendors);

  return (
    <div className="flex-1">
      <Link href="/admin/vendors/new">New</Link>
    </div>
  );
}
