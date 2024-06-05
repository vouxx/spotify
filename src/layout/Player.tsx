import Button from '@/components/button/common/Button';
import AlbumCover from '@/components/playInfo/AlbumCover';
import PlayTrackInfo from '@/components/playInfo/PlayingTrackInfo';
import PlayingTrackButtons from '@/components/playInfo/PlayingTrackButtons';

import '@/styles/player.css';

export default function Player() {
  return (
    <div className='player'>
      {/* [ ] : 한 번 더 감싸서 component로 묶어 줄 필요가 있는지 고민 (api 연결할 때 체크) */}
      <div className='player_info'>
        {/* 앨범 커버 이미지 토글 */}
        <AlbumCover />
        {/* 플레이 중인 노래 정보 */}
        <PlayTrackInfo />     
        {/* 플레이 중인 노래 버튼(좋아요, pip) */}
        <PlayingTrackButtons />   
      </div>
    </div>
  )
}
