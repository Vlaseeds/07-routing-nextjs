import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient } from '../../../../lib/getQueryClient';
import { fetchNoteById } from '../../../../lib/api';
import NotePreviewClient from './NotePreview.client';

export default async function NotePreviewPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', resolvedParams.id],
    queryFn: () => fetchNoteById(resolvedParams.id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePreviewClient id={resolvedParams.id} />
    </HydrationBoundary>
  );
}