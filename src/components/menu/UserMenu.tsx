'use client'
import { signOut } from "next-auth/react";
import { useState } from "react";
import { BiUser } from 'react-icons/bi';
import { RxTriangleDown, RxTriangleUp, RxExternalLink } from "react-icons/rx";
import Link from "next/link";

export default function UserMenu({ session }: { session: any }) {
  const [menuToggle, setMenuToggle] = useState(false);

  const menuHandler = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <div className="relative flex flex-wrap justify-center items-center gap-2 p-[2px_6px] rounded-[23px] bg-black text-[13px] leading-[32px]">
      <a className="flex flex-row items-center justify-center gap-2 p-[2px_3px] rounded-[23px] bg-black text-[13px] leading-[32px]" onClick={menuHandler}>
        <div className="flex justify-center items-center w-7 h-7 rounded-full bg-[#535353] ml-0.5">
          <BiUser size='18' color='white'/>
        </div>
        <div className="inline-block max-w-[110px] pl-2 overflow-hidden whitespace-nowrap text-ellipsis leading-[32px] text-[14px] text-white">
          {session.user?.name}
        </div>
        <div className="flex justify-center items-center">
          {menuToggle ? <RxTriangleUp size='20' color='white'/> : <RxTriangleDown size='20' color='white'/>}
        </div>
      </a>

      <div className={`absolute right-0 top-12 w-[196px] p-1 rounded bg-[#282828] shadow-[0_16px_24px_rgba(0,0,0,0.3),0_6px_8px_rgba(0,0,0,0.2)] z-20 ${menuToggle ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col text-left border-b border-borderBottom border-opacity-10">
          <li>
            <Link href="" className="flex justify-between items-center h-10 px-[12px] leading-10 text-[14px] text-white no-underline text-left hover:bg-white hover:bg-opacity-10">
              Profile
            </Link>
          </li>
          <li>
            <Link href="" className="flex justify-between items-center h-10 px-[12px] leading-10 text-[14px] text-white no-underline text-left hover:bg-white hover:bg-opacity-10">
              Setting
            </Link>
          </li>
        </ul>
        <div>
          <a onClick={() => signOut()} className="flex justify-between items-center h-10 px-[12px] leading-10 text-[14px] text-white no-underline text-left hover:bg-white hover:bg-opacity-10">
            Sign Out <span><RxExternalLink size='17'/></span>
          </a>
        </div>
      </div>
    </div>
  );
}