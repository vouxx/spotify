'use client'
import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowDown } from 'react-icons/md';
import test1 from '@/static/img/test1.jpg'
import test2 from '@/static/img/test2.jpg'

export default function AlbumCover() {
  const [isCoverToggle, setIsCoverToggle] = useState(false);

  const coverHandler = () => {
    setIsCoverToggle(prevState => !prevState);
  }

  const renderAlbumCover = (isActive: boolean, imageSrc: string, altText: string, coverClass: string) => (
    <div className={`${coverClass} ${isActive ? 'active' : ''}`}>
      <a onClick={coverHandler}>
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

  return (
    <>
      {renderAlbumCover(!isCoverToggle, test2, "Top Album Cover", "top_album_cover")}
      {renderAlbumCover(isCoverToggle, test1, "Left Album Cover", "left_album_cover")}
    </>
  )
}
