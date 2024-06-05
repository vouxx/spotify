import Image from 'next/image';
import Link from "next/link";

import { MdHomeFilled } from 'react-icons/md';
import { IoSearch } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";

import '@/styles/leftSide.css';
import Logo from "../static/img/logo.svg";

export default function LeftSide() {
  return (
    <div className='left_side'>
      <div className="logo">
        <Link href={'/'}>
          <Image src={Logo} alt="LOGO"/>
        </Link>
      </div>

      <div className='menu_group'>
        <ul>
          <li>
            <Link href={'/'}>
              <span> <MdHomeFilled /> </span>
              <span> 홈 </span>
            </Link>
          </li>
        </ul>
        <hr />
        <ul>
          <li>
            <Link href={'/'}>
              <span>
                <LuLibrary />
              </span>
              <span> 라이브러리</span>
            </Link>
          </li>
          <li>
            내가 만든 라이브러리
          </li>
        </ul>
      </div>
    </div>
  )
}
