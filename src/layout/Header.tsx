import SignIn from '@/components/button/SignIn'
import React from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import '@/styles/header.css';

export default function Header() {
  return (
    <div id='header'>
      <div className='history_box'>
        <a href={'#none'} title="뒤로 가기">
          <SlArrowLeft color='white'/>
        </a>
        <a href={'#none'} title="앞으로 가기">
          <SlArrowRight color='white'/>
        </a>
      </div>
      <SignIn />
    </div>
  )
}
