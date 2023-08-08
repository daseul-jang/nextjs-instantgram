<<<<<<< HEAD
import { NextResponse } from 'next/server';
=======
import { NextResponse, NextRequest } from 'next/server';
>>>>>>> 5d395972a3679573498288e2ae6ba6ea7ed08f03
import { searchUsers } from '@/service/user';

export async function GET() {
  return searchUsers().then((data) => NextResponse.json(data));
}
