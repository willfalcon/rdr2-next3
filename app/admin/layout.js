import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const menuList = [
  {
    slug: 'vendors',
    name: 'Vendors',
  },
  {
    slug: 'category',
    name: 'Category',
  },
  {
    slug: 'item',
    name: 'Item',
  },
  {
    slug: 'material',
    name: 'Material',
  },
  {
    slug: 'materialType',
    name: 'Material Type',
  },
];

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Title>Dashboard</Title>
      <div className="flex">
        <div className="flex-1">
          {menuList.map(item => (
            <Button key={item.slug} asChild variant="ghost" className="block">
              <Link href={`/admin/${item.slug}`}>{item.name}</Link>
            </Button>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
