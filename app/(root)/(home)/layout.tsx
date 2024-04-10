import { Metadata } from 'next';
import { ReactNode } from 'react';

import Navbar from '@/components/meeting/Navbar';

export const metadata: Metadata = {
  title: 'YOOM',
  description: 'A workspace for your team, powered by Stream Chat and Clerk.',
};

const RootLayout = ({ children }: Readonly<{children: ReactNode}>) => {
  return (
    <main className="relative">
      <Navbar />

      {children}
    </main>
  );
};

export default RootLayout;
