import '@/styles/player.css';

import PlayingAlbumCover from '@/components/nowPlayingInfoPanel/PlayingAlbumCover';
import PlayingTrackInfo from '@/components/nowPlayingInfoPanel/PlayingTrackInfo';
import PlayingTrackButtons from '@/components/nowPlayingInfoPanel/PlayingTrackButtons';
import NowPlayingTrackBar from '@/components/nowPlayingTrackPanel/NowPlayingTrackBar';
import NowPlayingControl from '@/components/nowPlayingTrackPanel/NowPlayingControl';
import PlaybackVolume from '@/components/playbackControlPanel/PlaybackVolume';
import PlaybackScreenControl from '@/components/playbackControlPanel/PlaybackScreenControl';
import PlaybackControl from '@/components/playbackControlPanel/PlaybackControl';

export default function Player() {
  return (
    <div className='player'>
      {/* [ ] : 한 번 더 감싸서 component로 묶어 줄 필요가 있는지 고민 (api 연결할 때 체크) */}
      <div className='player_info'>
        {/* 앨범 커버 이미지 토글 */}
        <PlayingAlbumCover />
        {/* 플레이 중인 노래 정보 */}
        <PlayingTrackInfo />     
        {/* 플레이 중인 노래 버튼(좋아요, pip) */}
        <PlayingTrackButtons />   
      </div>

      <div className='player_bar'>
        <NowPlayingTrackBar />
        <NowPlayingControl />
      </div>

      <div className='playback_panel'>
        <PlaybackControl />
        <PlaybackVolume />
        <PlaybackScreenControl />
      </div>
    </div>
  )
}
