import SignIn from '@/components/button/SignIn'
import React from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import '@/styles/header.css';

export default function Header() {
  return (
    <div id='header' className='relative p-4 px-8 h-16 box-border flex flex-row items-center justify-between'>
      <div className='history_box'>
        <a href={'#none'} title="뒤로 가기" className=''>
          <span className='flex justify-center items-center'>
            <SlArrowLeft color='white'/>
          </span>
        </a>
        <a href={'#none'} title="앞으로 가기" className=''>
          <SlArrowRight color='white'/>
        </a>
      </div>
      <SignIn />
    </div>
  )
}