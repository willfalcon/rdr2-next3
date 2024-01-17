import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RDR2 Checklist',
  description: `Keep track of materials you need, materials you've collected, who you've given them to, and what you've already crafted.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <div className="py-3">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
