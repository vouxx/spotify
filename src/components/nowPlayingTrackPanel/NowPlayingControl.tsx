import BackwardButton from "../button/Backward";
import FowardButton from "../button/Foward";
import PlayButton from "../button/PlayPause";
import RepeatButton from "../button/Repeat";
import ShuffleButton from "../button/Shuffle";

export default function NowPlayingControl() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center">
      <ShuffleButton className="bg-transparent border-none cursor-pointer mx-1.5 transition-all duration-300 ease-in-out fill-current text-white hover:text-white" />
      <BackwardButton className="bg-transparent border-none cursor-pointer mx-1.5 transition-all duration-300 ease-in-out fill-current text-white hover:text-white" />
      <PlayButton className="bg-transparent border-none cursor-pointer mx-1.5 transition-all duration-300 ease-in-out fill-current text-white hover:text-white" />
      <FowardButton className="bg-transparent border-none cursor-pointer mx-1.5 transition-all duration-300 ease-in-out fill-current text-white hover:text-white" />
      <RepeatButton className="bg-transparent border-none cursor-pointer mx-1.5 transition-all duration-300 ease-in-out fill-current text-white hover:text-white" />
    </div>
  )
}
