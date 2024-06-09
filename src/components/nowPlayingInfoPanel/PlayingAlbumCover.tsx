'use client'
import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowDown } from 'react-icons/md';
import test1 from '@/static/img/test1.jpg'
import test2 from '@/static/img/test2.jpg'

export default function PlayingAlbumCover() {
  const [isCoverToggle, setIsCoverToggle] = useState(false); // 초기 상태를 true로 설정하여 left_album_cover가 보이도록 함

  const coverHandler = () => {
    setIsCoverToggle(prevState => !prevState);
  }

  const renderAlbumCover = (isActive: boolean, imageSrc: string, altText: string, coverClass: string) => (
    <div className={`${coverClass} ${isActive ? 'active' : ''} transition-all duration-300 ease-in-out`}>
      <a onClick={coverHandler} className="absolute right-0 top-0 w-6 h-6 flex justify-center items-center mr-2 mt-2 rounded-full bg-black bg-opacity-50 cursor-pointer hover:bg-opacity-100">
        <MdKeyboardArrowDown size='20'/>
      </a>
      <Image 
        src={imageSrc}
        alt={altText}
        layout="responsive"
        width={1000}
        height={1000}
        objectFit="contain"
      />
    </div>
  );

  const left_cover_class = "left_album_cover w-14 h-14 rounded overflow-hidden relative left-0 bottom-0 z-10"
  const top_cover_class = "top_album_cover w-full max-w-xs absolute left-0 bottom-24 z-10"

  return (
    <>
      {renderAlbumCover(!isCoverToggle, test2, "Top Album Cover", "top_album_cover w-full max-w-xs absolute left-0 bottom-24 z-10")}
      {renderAlbumCover(isCoverToggle, test1, "Left Album Cover", "left_album_cover w-14 h-14 rounded overflow-hidden relative left-0 bottom-0 z-10")}
    </>
  )
}
