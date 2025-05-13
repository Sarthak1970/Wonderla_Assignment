import type { Metadata } from 'next';
import './globals.css'; 

export const metadata: Metadata = {
  title: 'Assignment by Sarthak',
  description: 'Amusement park website',
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