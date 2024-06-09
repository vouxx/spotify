import TrackBar from "../bar/TrackBar";

export default function NowPlayingTrackBar() {
  return (
    <div className="flex flex-row justify-between items-center w-full mt-1">
      <span className="inline-block text-lightgray text-xs min-w-10 leading-6 text-right">0:00</span>
      <TrackBar />
      <span className="inline-block text-lightgray text-xs min-w-10 leading-6 text-left">0:00</span>
    </div>
  )
}
