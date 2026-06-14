import './globals.css';

export const metadata = {
  title: 'Le Regain | Integrated Healthcare & Aesthetics',
  description:
    'Le Regain Integrated Healthcare & Aesthetics in Kochi, Kerala. PMR, rehabilitation, dermatology, hair, skin and aesthetic care at Sid\'s Arcade, Vyttila.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
