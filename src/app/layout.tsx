import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';

const inter = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-robotoCondensed',
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: 'Youtube Pizza Project',
  description: 'Youtube Pizza Project',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} quicksand bangers robotoCondensed`}>{children}</body>
    </html>
  );
}
