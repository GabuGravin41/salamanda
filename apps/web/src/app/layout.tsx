import type { Metadata } from 'next';
import '../styles/globals.css';
import { Navbar } from '../components/Navbar';
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <footer className="border-t border-surface-border bg-surface/30 py-8 text-xs text-slate-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-200">SALAMANDA</span>
                <span>— Living Asset & Autopsy Terminal for African Capital</span>
              </div>
              <div className="text-slate-500 font-mono text-[11px]">
                Every fact cited to primary public records (Kenya Gazette, eKLR, CBK, CMA)
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
