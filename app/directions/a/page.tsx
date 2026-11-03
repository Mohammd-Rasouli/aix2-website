import type { Metadata } from 'next';
import { DirectionPage } from '@/components/directions/DirectionPage';

export const metadata: Metadata = {
  title: 'Direction A · Navy ink on light paper · AIx2 prototype',
};

export default function DirectionA() {
  return <DirectionPage variant="a" />;
}
