import type { Metadata } from 'next';
import { DirectionC } from '@/components/directions/DirectionC';

export const metadata: Metadata = {
  title: 'Direction C · The as-built scan · AIx2 prototype',
};

export default function PageC() {
  return <DirectionC />;
}
