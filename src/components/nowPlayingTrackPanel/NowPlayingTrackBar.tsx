import TrackBar from "../bar/TrackBar";

export default function NowPlayingTrackBar() {
  return (
    <div className="track_bar_group">
      <span>0:00</span>
      <TrackBar />
      <span>0:00</span>
    </div>
  )
}
