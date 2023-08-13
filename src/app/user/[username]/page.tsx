import UserPosts from '@/components/UserPosts';
import UserProfile from '@/components/UserProfile';
import { getUserForProfile } from '@/service/user';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { cache } from 'react';

type Props = {
  params: {
    username: string;
  };
};

// getUserForProfile 함수가 UserPage, generateMetadata 두 곳에서 쓰이므로,
// 캐싱처리를 해서 중복호출을 막아준다
const getUser = cache(async (username: string) => getUserForProfile(username));

export default async function UserPage({ params: { username } }: Props) {
  const user = await getUser(username);

  if (!user) {
    notFound();
  }

  return (
    <section className='w-full'>
      <UserProfile user={user} />
      <UserPosts user={user} />
    </section>
  );
}

export async function generateMetadata({
  params: { username },
}: Props): Promise<Metadata> {
  const user = await getUser(username);
  return {
    title: `${user?.name} (@${user?.username}) · Instantgram Photos`,
    description: `${user?.name}'s all Instantgram posts`,
  };
}
