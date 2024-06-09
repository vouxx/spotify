import SignIn from '@/components/button/SignIn'
import React from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

export default function Header() {
  return (
    <div id='header' className='relative p-4 px-8 h-16 box-border flex flex-row items-center justify-between'>
      <div className='flex gap-4'>
        <a href={'#none'} title="뒤로 가기" className='flex justify-center items-center w-8 h-8 rounded-full bg-black bg-opacity-70'>
          <SlArrowLeft color='white'/>
        </a>
        <a href={'#none'} title="앞으로 가기" className='flex justify-center items-center w-8 h-8 rounded-full bg-black bg-opacity-70'>
          <SlArrowRight color='white'/>
        </a>
      </div>
      <SignIn />
    </div>
  )
}