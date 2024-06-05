'use client'
import { signIn, signOut, useSession  } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { BiUser } from 'react-icons/bi';
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";

export default function SignIn() {
    const { data: session } = useSession();
    const [menuToggle, setMenuToggle] = useState(false);
    
    const menuHandler = () => {
      menuToggle == false? setMenuToggle(true):setMenuToggle(false);
    }

    if (!session) {
      return (
        <div className="sign_in">
          <a onClick={() => signIn("spotify")}>Sign In</a>
        </div>
      );
    }
    return (
      <div className="sign_out">
        <a className="flex_row" onClick={() => menuHandler()}>
          <BiUser size='18' color='white'/> {session.user?.name}
          { menuToggle === false? <RxTriangleDown size='20' color='white'/> : <RxTriangleUp size='20' color='white'/> }
        </a>
        <ul className={`login_gnb ${menuToggle ? 'toggle_show' : 'toggle_off'}`}>
          <li>
            <Link href="">Profile</Link>
          </li>
          <li>
            <a onClick={() => signOut()}>Sign Out</a>
          </li>
        </ul>
      </div>
    )
}