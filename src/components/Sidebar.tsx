'use client';

import { useSession } from 'next-auth/react';
import Avatar from './Avatar';

export default function Sidebar() {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <section className='w-60'>
      <div className='w-full flex flex-row justify-center items-center mt-10'>
        <Avatar image={user?.image} size='big' gradient={false} />
        <div className='flex flex-col mx-6'>
          <p className='font-bold'>{user?.username}</p>
          <p className='text-gray-500'>{user?.name}</p>
        </div>
      </div>
      <div>
        <p className='my-9'>
          About · Help · Press · API · Jobs · Privacy · Terms · Location ·
          Language
        </p>
        <p className='font-bold text-gray-600'>
          @Copyright INSTANTGRAM from METAL
        </p>
      </div>
    </section>
  );
}
