'use client'
interface Iprops {
  id?: string,
  minValue: number,
  maxValue: number,
  defaultValue: number,
  onMouseUp: React.MouseEventHandler
}

export default function Bar({id, minValue , maxValue, onMouseUp, defaultValue}:Iprops) {
  return (
    <div className='relative w-full max-w-[608px] mx-2.5' id='playerBarBox'>
      <input id={id} className="input_range" type="range" min={minValue} max={maxValue} defaultValue={defaultValue} onMouseUp={onMouseUp}/>
    </div>
  );
}
