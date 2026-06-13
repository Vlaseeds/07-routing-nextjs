import type { ReactNode } from 'react';
import css from './FilterLayout.module.css';

export default function FilterLayout({ children, sidebar }: { children: ReactNode; sidebar: ReactNode }) {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <div className={css.notesWrapper}>{children}</div>
    </section>
  );
}