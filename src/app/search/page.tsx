import UserSearch from '@/components/UserSearch';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Search',
  description: 'Search users to follow',
};

export const dynamic = 'force-dynamic';

export default function SearchPage() {
  return <UserSearch />;
}
