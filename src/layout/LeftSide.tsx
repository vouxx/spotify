import Image from 'next/image';
import Link from "next/link";

import { MdHomeFilled } from 'react-icons/md';
import { IoSearch } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";

import Logo from "../static/img/logo.svg";

export default function LeftSide() {
  return (
    <div className='w-full max-w-[20.8333%] h-[calc(100vh-90px)] bg-black pt-6 box-border flex flex-col flex-wrap content-between justify-start'>
      <div className="block w-[130px] ml-6 mb-6">
        <Link href={'/'}>
          <Image src={Logo} alt="LOGO" className="block w-full"/>
        </Link>
      </div>

      <div className='w-full px-6'>
        <ul className='text-left'>
          <li className='text-lightgray h-10 text-sm leading-10'>
            <Link href={'/'}>
              <span className="flex flex-row items-center justify-start h-full text-[#b3b3b3] no-underline">
                <span className="flex flex-row justify-start">
                  <MdHomeFilled />
                </span>
                <span className="ml-2">홈</span>
              </span>
            </Link>
          </li>
        </ul>
        <hr className='bg-lineblack border-none h-px my-3' />
        <ul>
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
          <li className='text-lightgray h-10 text-sm leading-10'>
            내가 만든 라이브러리
          </li>
        </ul>
      </div>
    </div>
  )
}
