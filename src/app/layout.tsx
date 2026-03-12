import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  title: 'NO_DNA: detect non-human operators',
  description: 'An informal standard for CLI tools to detect non-human operators.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
