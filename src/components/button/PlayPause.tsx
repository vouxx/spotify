'use client';
import { HiPlay, HiPause } from 'react-icons/hi';
import Button from "@/components/button/common/Button";

export default function PlayButton() {

  const PlayerHandler = () => {
  }

  return (
    <>
      <Button title='재생/일시정지' id="playerBtn" onClick={() => {PlayerHandler}}>
        <HiPlay size='40' color='#fff'/> 
        {/* <HiPause size='40' color='#fff'/> */}
      </Button>
    </>
  );
}
