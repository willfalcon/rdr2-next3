import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import ListTitle from '../LIstTitle';

export default async function ListLayout({ children }) {
  const categories = await prisma.category.findMany();
  return (
    <>
      <div className="flex-initial px-4 py-2 w-80 vendor-list">
        <ListTitle href="/admin/categories">Categories</ListTitle>
        <ul>
          {categories.map(item => (
            <li>
              <Button key={item.id} asChild variant="ghost">
                <Link href={`/admin/categories/${item.slug}`}>{item.name}</Link>
              </Button>
            </li>
          ))}
        </ul>
        <Button variant="secondary">
          <Link href="/admin/categories/new">New</Link>
        </Button>
      </div>
      <div className="flex-initial px-4 py-2 w-80 single-vendor">{children}</div>
    </>
  );
}
