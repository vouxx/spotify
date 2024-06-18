import Image from 'next/image';
import Link from "next/link";

import { LuLibrary } from "react-icons/lu";

import test1 from '@/static/img/test1.jpg'
import test2 from '@/static/img/test2.jpg'

export default function LibraryMenu() {
  
  return (
    <ul className='text-left p-1.5 w-full h-[calc(100%-181px)] rounded-lg bg-background mt-2'>
      <li className='text-lightgray h-10 text-sm leading-10 p-1.5'>
        <Link href={'/'}>
          <span className="flex flex-row items-center justify-start h-full text-[#b3b3b3] no-underline">
            <span className='align-text-top flex flex-row justify-start'>
              <LuLibrary />
            </span>
            <span className='ml-2'>라이브러리</span>
          </span>
        </Link>
      </li>
      <li className='text-lightgray text-sm leading-10 flex flex-row flex-wrap hover:bg-[#212121] p-1.5 rounded-lg overflow-hidden transition-all duration-300 ease-in-out cursor-pointer'>
        <div className='w-[48px] h-[48px] overflow-hidden rounded flex justify-center'>
          <Image  
            src={test2}
            alt='test image'
            className={`!w-auto h-full max-w-fit`}
          />
        </div>
        <div className='leading-none max-w-[calc(100%-48px)] pl-3 flex flex-col justify-center'>
          <p className='w-full overflow-hidden whitespace-nowrap text-ellipsis mb-0.5 text-base text-white'>플레이리스트 이름</p>
          <p><span>vouxx</span></p>
        </div>
      </li>
      <li className='text-lightgray text-sm leading-10 flex flex-row flex-wrap p-1.5 pt-2 rounded-lg overflow-hidden transition-all duration-300 ease-in-out cursor-pointer hover:bg-[#212121]'>
        <div className='w-[48px] h-[48px] overflow-hidden rounded'>
          <Image  
            src={test1}
            alt='test image'
            className="rounded-b-lg w-auto h-full"
          />
        </div>
        <div className='leading-none max-w-[calc(100%-48px)] pl-3 flex flex-col justify-center'>
          <p className='w-full overflow-hidden whitespace-nowrap text-ellipsis mb-0.5 text-base text-white'>플레이리스트 이름</p>
          <p><span>vouxx</span></p>
        </div>
      </li>
    </ul>
  )
}
