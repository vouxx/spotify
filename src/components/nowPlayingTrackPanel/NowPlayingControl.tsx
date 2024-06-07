import BackwardButton from "../button/Backward";
import FowardButton from "../button/Foward";
import PlayButton from "../button/PlayPause";
import RepeatButton from "../button/Repeat";
import ShuffleButton from "../button/Shuffle";

export default function NowPlayingControl() {
  return (
    <div className="now_playing_panel_buttons">
      <ShuffleButton />
      <BackwardButton />
      <PlayButton />
      <FowardButton />
      <RepeatButton />
    </div>
  )
}
