import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tails & Trails | Pet Sitting & Dog Walking in Essex',
  description: 'Professional pet sitting, dog walking, and daycare services for all animals in Essex. Book with us today.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
