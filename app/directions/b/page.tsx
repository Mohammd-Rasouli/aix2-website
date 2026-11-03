import type { Metadata } from 'next';
import { DirectionPage } from '@/components/directions/DirectionPage';

export const metadata: Metadata = {
  title: 'Direction B · White lines on a navy blueprint · AIx2 prototype',
};

export default function DirectionB() {
  return <DirectionPage variant="b" />;
}
