'use client'
import { AiFillStepBackward } from 'react-icons/ai';
import Button from "@/components/button/common/Button";

export default function BackwardButton() {
  const BackwardHandler = () => { }

  return (
    <>
      <Button title='이전곡' onClick={() => { BackwardHandler() }}><AiFillStepBackward size='22' className={'svgIcon'}/></Button>
    </>
  );
}
