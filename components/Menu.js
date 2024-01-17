import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu';
import { MdOutlineMenu } from 'react-icons/md';

export default function Menu() {
  const loading = false;
  const initials = 'wh';
  const user = false;
  const loggedIn = false;

  return (
    <DropdownMenu className="">
      <DropdownMenuTrigger>
        {loading ? (
          '...'
        ) : user ? (
          <Avatar>
            <AvatarImage src={user.image} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        ) : (
          <div className="">
            <MdOutlineMenu className="w-8 h-8" />
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        {loggedIn ? (
          <DropdownMenuItem asChild>
            <Link href="/api/auth/signout">Logout</Link>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem asChild>
            <Link href="/api/auth/signin">Login</Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
