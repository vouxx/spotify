'use client'
import { IoMdShuffle } from 'react-icons/io';
import Button from "@/components/button/common/Button";

export default function ShuffleButton() {
  const ShuffleHandler = () => {
  }

  return (
    <>
      <Button title='무작위' onClick={() => {}}>
        <IoMdShuffle size='22' className={'svgIcon'}/>
        {/* <IoMdShuffle size='22' color='#feac00'/> */}
      </Button>
    </>
  );
}
