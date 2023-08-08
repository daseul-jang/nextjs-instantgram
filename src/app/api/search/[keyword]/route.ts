import { NextRequest, NextResponse } from 'next/server';
import { searchUsers } from '@/service/user';

type Context = {
  params: { keyword: string };
};

<<<<<<< HEAD
export async function GET(_: NextRequest, context: Context) {
=======
export async function GET(req: NextRequest, context: Context) {
>>>>>>> f181829df4e0837e5375969a51443f60d8fe620f
  return searchUsers(context.params.keyword).then((data) =>
    NextResponse.json(data)
  );
}
