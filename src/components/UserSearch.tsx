'use client';

import { ProfileUser } from '@/model/user';
import { useState } from 'react';
import useSWR from 'swr';
import GridSpinner from './ui/GridSpinner';
import UserCard from './UserCard';
import { useDebounce } from '@/util/hooks';

export default function UserSearch() {
  const [keyword, setKeyword] = useState('');
  const debounceSearch = useDebounce(keyword, 1000);
  const {
    data: users,
    isLoading: loading,
    error,
  } = useSWR<ProfileUser[]>(`/api/search/${debounceSearch}`);

  return (
    <section className='w-full max-w-2xl my-4 flex flex-col items-center'>
      <div className='w-full mb-4'>
        <input
          className='w-full text-xl p-3 outline-none border border-gray-400'
          type='text'
          autoFocus
          placeholder='이름 또는 아이디를 입력하세요!'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      {error && <p>Error!!</p>}
      {loading && <GridSpinner />}
      {!loading && !error && users?.length === 0 && (
        <p>해당 사용자를 찾을 수 없습니다</p>
      )}
      <ul className='w-full p-4'>
        {users &&
          users.map((user) => (
            <li key={user.username}>
              <UserCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  );
}
