"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return <p>Could not fetch note details. {error.message}</p>;
}