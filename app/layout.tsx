import type { Metadata } from 'next';
import { DM_Sans as FontSans, DM_Serif_Text as FontSerif, JetBrains_Mono as FontMono } from 'next/font/google';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { cn } from '@/lib/utils';
import { copy } from '@/lib/constants';
import Navbar from '@/components/navbar';
import ThemeProvider from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

config.autoAddCss = false;

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const fontSerif = FontSerif({ weight: '400', subsets: ['latin'], variable: '--font-serif', display: 'swap' });
const fontMono = FontMono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
    title: {
        template: '%s | meetoo',
        default: 'meetoo',
    },
    description: copy,
    applicationName: 'meetoo',
    authors: [
        {
            name: 'Tyler Lin',
            url: 'https://tylerl.in',
        },
    ],
    creator: 'Tyler Lin',
    metadataBase: new URL('https://meetoo.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'min-h-dvh h-full bg-background font-sans antialiased',
                    fontSans.variable,
                    fontSerif.variable,
                    fontMono.variable
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <div className="fixed left-0 top-0 -z-10 h-full w-full">
                        <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-background bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,hsla(var(--primary)/0.16)_100%)]"></div>
                    </div>
                    <Navbar />
                    <div className="min-h-dvh h-full flex flex-col">
                        <div className="grow pt-16">{children}</div>
                        <Toaster richColors position="top-right" />
                        <Footer />
                    </div>
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    );
}
