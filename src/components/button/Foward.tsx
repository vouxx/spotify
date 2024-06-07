'use client'
import { AiFillStepForward } from 'react-icons/ai';
import Button from "@/components/button/common/Button";

export default function FowardButton() {
  const ForwardHandler = () => { }

  return (
    <>
      <Button title='이전곡' onClick={() => { ForwardHandler() }}><AiFillStepForward size='22' className={'svgIcon'}/></Button>
    </>
  );
}
