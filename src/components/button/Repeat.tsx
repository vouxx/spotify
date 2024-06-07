'use client'
import { TbRepeatOnce, TbRepeat } from 'react-icons/tb';
import Button from "@/components/button/common/Button";

export default function RepeatButton() {
  return (
    <>
      <Button title='반복' onClick={() => { }}>
        <TbRepeat size='22' className={'svgStrokeIcon'}/>
        {/* <TbRepeatOnce size='22' color='#feac00' />
        <TbRepeat size='22' color='#feac00'/> */}
      </Button>
    </>
  );
}
