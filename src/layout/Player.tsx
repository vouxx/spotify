'use client'
import PlayingAlbumCover from '@/components/nowPlayingInfoPanel/PlayingAlbumCover';
import PlayingTrackInfo from '@/components/nowPlayingInfoPanel/PlayingTrackInfo';
import PlayingTrackButtons from '@/components/nowPlayingInfoPanel/PlayingTrackButtons';
import NowPlayingTrackBar from '@/components/nowPlayingTrackPanel/NowPlayingTrackBar';
import NowPlayingControl from '@/components/nowPlayingTrackPanel/NowPlayingControl';
import PlaybackVolume from '@/components/playbackControlPanel/PlaybackVolume';
import PlaybackScreenControl from '@/components/playbackControlPanel/PlaybackScreenControl';
import PlaybackControl from '@/components/playbackControlPanel/PlaybackControl';
import { useEffect } from 'react';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady: () => void;
  }
}

export default function Player() {
  console.log(authOptions.callbacks?.jwt);
  

  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = '[My access token]';
      const player = new (window as any).Spotify.Player({
        name: '제이 spotify',
        getOAuthToken: (cb: (token: string) => void) => { cb(token); },
        volume: 0.5
      });
    };
  }, []);

  return (
    // <div className='relative w-full h-24 bg-background border-t border-lineblack box-border text-white z-10 flex flex-row flex-nowrap justify-between items-center px-4'>
    <div className='relative w-full h-24 box-border text-white z-10 flex flex-row flex-nowrap justify-between items-center px-4'>
      <div className='min-w-[230px] max-w-[528px]'>
        <div className='flex flex-wrap flex-row justify-start'>
          <PlayingAlbumCover />
          <PlayingTrackInfo />
          <PlayingTrackButtons />
        </div>
      </div>

      <div className='min-w-[500px] w-full max-w-[704px]'>
        <NowPlayingTrackBar />
        <NowPlayingControl />
      </div>
      <div className='min-w-[300px] flex flex-row flex-wrap justify-end items-center'>
        <PlaybackControl />
        <PlaybackVolume />
        <PlaybackScreenControl />
      </div>
    </div>
  )
}