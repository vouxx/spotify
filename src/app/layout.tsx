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
  title: 'Spotify  |  zei Played it',
  description: 'zei Spotify 2.0 Web player',
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
      <body className="text-white bg-black">
        <SessionProvider session={session}>
          <div className='wrap flex flex-wrap w-screen h-screen overflow-hidden text-white'>
            <div className='flex flex-row w-full p-2 pb-0'>
              <LeftSide />
              <div className='section w-[57.2917%] h-[calc(100vh-111px)] rounded-lg bg-background bg-gradient-to-b from-[rgba(0,0,0,.6)] to-[#151515]'>
                <Header />
                <div className="p-2">
                  {children}
                </div>
              </div>
              <div className='right_side w-full max-w-[21.875%] h-[calc(100vh-111px)] box-border flex flex-col flex-wrap space-between content-between ml-2 rounded-lg bg-background'>
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