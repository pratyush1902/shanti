import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shanti Kidney & Diagnostic Centre | Trusted Dialysis & Advanced Diagnostics in Patna',
  description:
    'Trusted Dialysis. Advanced Diagnostics. Compassionate Care. Shanti Kidney & Diagnostic Centre in Patna provides world-class hemodialysis, expert nephrology consultations, complete diagnostic imaging, and 24x7 emergency kidney care.',
  keywords: [
    'kidney care patna',
    'dialysis centre patna',
    'shanti kidney centre',
    'nephrology hospital patna',
    'advanced diagnostics patna',
    'best dialysis hospital bihar',
    'kidney specialist patna',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
