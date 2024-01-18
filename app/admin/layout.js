import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ListTitle from './LIstTitle';

const menuList = [
  {
    slug: 'vendors',
    name: 'Vendors',
  },
  {
    slug: 'categories',
    name: 'Category',
  },
  {
    slug: 'items',
    name: 'Item',
  },
  {
    slug: 'materials',
    name: 'Material',
  },
  {
    slug: 'material-types',
    name: 'Material Type',
  },
];

export default function DashboardLayout({ children }) {
  return (
    <div className="h-full flex flex-col divide-y">
      <Title>Dashboard</Title>
      <div className="flex flex-1 divide-x">
        <div className="flex-initial w-80">
          <ListTitle href="/admin">Lists</ListTitle>
          <ul>
            {menuList.map(item => (
              <li key={item.slug}>
                <Button asChild variant="ghost" className="block">
                  <Link href={`/admin/${item.slug}`}>{item.name}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        {children}
      </div>
    </div>
  );
}
