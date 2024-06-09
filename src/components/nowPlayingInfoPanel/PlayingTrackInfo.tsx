export default function PlayingTrackInfo() {
  return (
    <div className="transition-all duration-300 ease-in-out flex flex-col justify-center mx-4 text-left">
      <p className="block max-w-[310px] text-[14px] leading-[22px] text-left text-white">재생 중인 노래 제목</p>
      <p className="block max-w-[310px] text-[11px] leading-[18px] text-left text-lightgray">재생 중인 노래 가수 이름</p>
    </div>
  )
}
