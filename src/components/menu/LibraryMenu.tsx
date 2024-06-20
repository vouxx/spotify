import Image from 'next/image';
import Link from "next/link";

import { LuLibrary } from "react-icons/lu";

import test1 from '@/static/img/test1.jpg'
import test2 from '@/static/img/test2.jpg'
import LibraryItems from './LibraryItems';

export default function LibraryMenu() {
  
  return (
    <div className='text-left p-1.5 w-full h-[calc(100%-181px)] rounded-lg bg-background mt-2'>
      <div className='text-lightgray h-10 text-sm leading-10 p-1.5'>
        <span className="flex flex-row items-center justify-start h-full text-[#b3b3b3] no-underline">
          <span className='align-text-top flex flex-row justify-start'>
            <LuLibrary />
          </span>
          <span className='ml-2'>라이브러리</span>
        </span>
      </div>

      <LibraryItems coverimg={test1} plname={'플레이리스트1'} listattr={'플레이리스트'} usename={'vouxx'}/>
      <LibraryItems coverimg={test2} plname={'플레이리스트2'} listattr={'플레이리스트'} usename={'vouxx'}/>
    </div>
  )
}
