import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import '@/styles/globals.css';

const lato = Lato({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900'],
    variable: '--font-lato',
});

export const metadata: Metadata = {
    title: 'Optima-CRM - Featured Properties Valencia & Costa Blanca',
    description: 'Catch up on the latest real estate news, trends, and hot properties in Valencia and the Costa Blanca.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={lato.className} suppressHydrationWarning={true}>
                {children}
            </body>
        </html>
    );
}
