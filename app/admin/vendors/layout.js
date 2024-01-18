import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import ListTitle from '../LIstTitle';

export default async function VendorLayout({ children }) {
  const vendors = await prisma.vendor.findMany();
  return (
    <>
      <div className="flex-initial px-4 py-2 w-80 vendor-list">
        <ListTitle href="/admin/vendors">Vendors</ListTitle>
        <ul>
          {vendors.map(vendor => (
            <li>
              <Button key={vendor.id} asChild variant="ghost">
                <Link href={`/admin/vendors/${vendor.slug}`}>{vendor.name}</Link>
              </Button>
            </li>
          ))}
        </ul>
        <Button variant="secondary">
          <Link href="/admin/vendors/new">New</Link>
        </Button>
      </div>
      <div className="flex-initial px-4 py-2 w-80 single-vendor">{children}</div>
    </>
  );
}
