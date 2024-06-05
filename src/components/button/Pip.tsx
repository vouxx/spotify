'use client'
import { useState } from "react"
import { BsPip } from 'react-icons/bs';
import Button from "./common/Button";

export default function Like() {
  const [likes, setLikes] = useState(false)
  return (
    <>
      <Button><BsPip size='20' className={'svgIcon'}/></Button>
    </>
  )
}
