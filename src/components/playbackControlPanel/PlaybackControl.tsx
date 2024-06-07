import DeviceConnectButton from "../button/DeviceConnect";
import LyricsButton from "../button/Lyrics";
import PlayListButton from "../button/PlayList";

export default function PlaybackControl() {
  return (
    <div className="flex">
      <LyricsButton />
      <PlayListButton />
      <DeviceConnectButton />
    </div>
  )
}
