import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient } from '../../../../lib/getQueryClient';
import { fetchNotes } from '../../../../lib/api';
import NotesClient from './Notes.client';

export default async function NotesFilterPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const tag = resolvedParams.slug[0] || 'all';
  
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, '', tag],
    queryFn: () => fetchNotes(1, 12, '', tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient currentTag={tag} />
    </HydrationBoundary>
  );
}