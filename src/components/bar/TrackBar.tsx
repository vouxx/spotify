'use client'
import Bar from "./common/Bar";

export default function TrackBar() {
  return (
    <>
      <Bar id="playBarRange" minValue={0} maxValue={50} onMouseUp={() => {console.log('test')}} defaultValue={50}/>
    </>
  )
}
