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
      <body className="text-white">
        <SessionProvider session={session}>
          <div className='wrap flex flex-wrap w-screen h-screen overflow-hidden'>
            <div className='flex flex-row w-full'>
              <LeftSide />
              <div className='section w-[57.2917%] h-[calc(100vh-90px)] bg-[rgb(83,83,83)] bg-gradient-to-b from-[rgba(0,0,0,.6)] to-[#121212]'>
                <Header />
                {children}
              </div>
              <div className='right_side w-full max-w-[21.875%] h-[calc(100vh-90px)] bg-black pt-6 box-border flex flex-col flex-wrap space-between content-between'>
                <RightSide />
              </div>
            </div>
            <Player />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}