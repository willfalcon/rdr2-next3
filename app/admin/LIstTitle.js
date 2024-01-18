import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ListTitle({ href, children }) {
  return (
    <Button className="text-2xl font-bold mb-3 px-4 tracking-tight" variant="ghost" asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
}
