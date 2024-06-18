import Image from 'next/image';
import Link from "next/link";

import { MdHomeFilled } from 'react-icons/md';
import { IoSearch } from "react-icons/io5";

import Logo from "@/static/img/logo.svg";

export default function NavigationMenu() {
  return (
    <ul className='text-left p-3 w-full rounded-lg bg-background'>
      <li>
        <div className="block w-[130px] mb-6">
          <Link href={'/'}>
            <Image src={Logo} alt="LOGO" className="block w-full"/>
          </Link>
        </div>
      </li>
      <li className='text-lightgray h-10 text-sm leading-10 mb-1.5'>
        <Link href={'/'}>
          <span className="flex flex-row items-center justify-start h-full text-[#b3b3b3] no-underline">
            <span className="flex flex-row justify-start">
              <MdHomeFilled />
            </span>
            <span className="ml-2">홈</span>
          </span>
        </Link>
      </li>
      <li className='text-lightgray h-10 text-sm leading-10'>
        <Link href={'/'}>
          <span className="flex flex-row items-center justify-start h-full text-[#b3b3b3] no-underline">
            <span className="flex flex-row justify-start">
              <IoSearch />
            </span>
            <span className="ml-2">검색</span>
          </span>
        </Link>
      </li>
    </ul>
  )
}
