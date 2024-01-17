import Link from 'next/link';
import Menu from './Menu';
import Settings from './Settings';
import Theme from './Theme';

export default function Navbar() {
  return (
    <nav className="p-4 flex gap-4">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-2xl tracking-tight font-bold">
          RDR2 Checklist
        </Link>
      </div>
      <Menu />
      <Settings />
      <Theme />
    </nav>
  );
}
