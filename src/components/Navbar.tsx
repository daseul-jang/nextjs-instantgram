'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import ColorButton from './ui/ColorButton';
import Avatar from './Avatar';

export default function Header() {
  const pathName = usePathname();
  const { data: session } = useSession();
  const user = session?.user;
  const navList = [
    {
      title: 'Home',
      icon: <HomeIcon />,
      clickedIcon: <HomeFillIcon />,
      href: '/',
    },
    {
      title: 'Search',
      icon: <SearchIcon />,
      clickedIcon: <SearchFillIcon />,
      href: '/search',
    },
    {
      title: 'NewPost',
      icon: <NewIcon />,
      clickedIcon: <NewFillIcon />,
      href: '/new',
    },
  ];

  return (
    <div className='flex justify-between items-center px-6'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>Instantgram</h1>
      </Link>
      <nav>
        <ul className='flex gap-4 items-center p-4'>
          {navList.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathName === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          {user && (
            <li>
              <Link href={`/user/${user.username}`}>
                <Avatar image={user.image} size='small' highlight />
              </Link>
            </li>
          )}
          <li>
            {session ? (
              <ColorButton text='Sign out' onClick={() => signOut()} />
            ) : (
              <ColorButton text='Sign in' onClick={() => signIn()} />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
