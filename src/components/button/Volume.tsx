'use client'
import { BsFillVolumeDownFill, BsFillVolumeOffFill, BsFillVolumeUpFill } from 'react-icons/bs';
import Button from "@/components/button/common/Button";

export default function VolumeButton() {
  return (
    <>
      <Button title='볼륨' onClick={() => {  }}>
        <BsFillVolumeUpFill size='20' className={'svgIcon'}/>
        {/* <BsFillVolumeDownFill size='20' className={'svgIcon'}/>
        <BsFillVolumeOffFill size='20' className={'svgIcon'}/> */}
      </Button>
    </>
  );
}
