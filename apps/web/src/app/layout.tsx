import type { Metadata } from 'next';
import '../styles/globals.css';
import { AppShell } from '../components/AppShell';
import { ThemeProvider } from '../components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Salamanda | African Asset Intelligence & Autopsy Terminal',
  description:
    'Comprehensive living repository of Kenyan and African real-economy assets, failure autopsies, land valuations, and primary public records.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}

