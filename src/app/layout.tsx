import { Inter } from "next/font/google";
import type { Metadata } from 'next'
import "./globals.css";
import { getServerSession } from 'next-auth';
import SessionProvider from '@/components/common/SessionProvider'
import type { Session } from 'next-auth'
import LeftSide from "@/layout/LeftSide";
import Header from "@/layout/Header";
import Player from "@/layout/Player";
import RightSide from "@/layout/RightSide";

export const metadata: Metadata = {
  title: 'View your personnal stats - Statsify',
  description: 'Spotify personnal statistics',
}

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  return (
    <html lang="fr">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <div className='wrap'>
              <div className='flex flex-row'>
                <LeftSide />
                <div className='section'>
                  <Header />
                  {children}
                </div>
                <RightSide />
              </div>
              <Player />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}