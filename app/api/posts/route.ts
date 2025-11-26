import { NextResponse } from 'next/server';

export async function GET() {
  // Simulating a DB fetch
  const posts = [
    { id: 1, title: 'Stacked Diffs are Fast', content: 'Review small PRs.' },
    { id: 2, title: 'Graphite Automates Git', content: 'No more conflicts.' },
  ];
  return NextResponse.json(posts);
}