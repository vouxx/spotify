import Image from 'next/image';
import Link from "next/link";
import test1 from '@/static/img/test1.jpg'

import { LuLibrary } from "react-icons/lu";

export default function LibraryMenu() {
  return (
    <ul className='text-left p-6 w-full h-[calc(100%-205px)] rounded-lg bg-background mt-2'>
      <li className='text-lightgray h-10 text-sm leading-10'>
        <Link href={'/'}>
          <span className="flex flex-row items-center justify-start h-full text-[#b3b3b3] no-underline">
            <span className='align-text-top flex flex-row justify-start'>
              <LuLibrary />
            </span>
            <span className='ml-2'>라이브러리</span>
          </span>
        </Link>
      </li>
      <li className='text-lightgray h-10 text-sm leading-10 flex flex-column flex-wrap'>
        <div className='w-[48px] overflow-hidden rounded'>
          <Image  
            src={test1}
            alt='test image'
            className="rounded-b-lg"
          />
        </div>
        <div className='leading-none'>
          <p>플레이리스트 이름</p>
          <p><span>TAG</span> <span>vouxx</span></p>
        </div>
      </li>
    </ul>
  )
}
