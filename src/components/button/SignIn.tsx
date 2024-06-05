'use client'
import { signIn, signOut, useSession  } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { BiUser } from 'react-icons/bi';
import { RxTriangleDown, RxTriangleUp, RxExternalLink } from "react-icons/rx";

export default function SignIn() {
    const { data: session } = useSession();
    const [menuToggle, setMenuToggle] = useState(false);

    const menuHandler = () => {
      !menuToggle? setMenuToggle(true):setMenuToggle(false);
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
          <div className="user_icon"> <BiUser size='18' color='white'/> </div>
          <div className="user_name"> {session.user?.name} </div>
          <div className="menu_icon">
            { !menuToggle? <RxTriangleDown size='20' color='white'/> : <RxTriangleUp size='20' color='white'/> }
          </div>
        </a>
        <div className={`login_gnb ${menuToggle ? 'toggle_show' : 'toggle_off'}`}>
          <ul>
            <li>
              <Link href="">Profile</Link>
            </li>
            <li>
              <Link href="">Setting</Link>
            </li>
          </ul>
          <div>
            <a onClick={() => signOut()}>Sign Out <span><RxExternalLink size='17'/></span></a>
          </div>
        </div>
      </div>
    )
}