import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'no-dna.org',
  description: 'An informal standard for CLI tools to detect non-human operators.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">{children}</body>
    </html>
  );
}
