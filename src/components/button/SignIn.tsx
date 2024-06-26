'use client'
import { signIn, signOut, useSession  } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { BiUser } from 'react-icons/bi';
import { RxTriangleDown, RxTriangleUp, RxExternalLink } from "react-icons/rx";
import UserMenu from "../menu/UserMenu";

export default function SignIn() {
  const { data: session } = useSession();
  const [menuToggle, setMenuToggle] = useState(false);

  const menuHandler = () => {
    !menuToggle ? setMenuToggle(true) : setMenuToggle(false);
  }

  if (!session) { 
    return (
      <div className="flex flex-wrap justify-center items-center gap-2 p-[0px_12px] rounded-[23px] bg-black text-[13px] leading-[32px]">
        <a onClick={() => signIn("spotify")}>Sign In</a>
      </div>
    );
  }

  return (
    <UserMenu session={session}/>
  )
}