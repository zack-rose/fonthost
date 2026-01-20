import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Neue Montreal Font Host',
  description: 'Publicly hosted Neue Montreal font family',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

