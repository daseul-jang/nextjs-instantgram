import { authOptions } from '../../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import { NextResponse, NextRequest } from 'next/server';
import { getFollowingPostsOf, getPost } from '@/service/posts';

type Context = {
  params: { id: string };
};

export async function GET(req: NextRequest, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }

  return getPost(context.params.id).then((data) => NextResponse.json(data));
}
