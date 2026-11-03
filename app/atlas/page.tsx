import { redirect } from 'next/navigation';

/** Atlas became Paradigm in the menu (user, 2026-10-30); old links land on the new page. */
export default function Page() {
  redirect('/paradigm');
}
