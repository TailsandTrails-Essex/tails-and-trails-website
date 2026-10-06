import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tails & Trails | Pet Sitting & Dog Walking in Essex',
  description:
    'Dog walking, pet sitting, and daycare for all animals across Essex. Book trusted care from Tails & Trails.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
