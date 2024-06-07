
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
    <div className='player_bar_box' id='playerBarBox'>
      <input id={id} className="play_bar" type="range" min={minValue} max={maxValue} defaultValue={defaultValue} onMouseUp={onMouseUp}/>
    </div>
  );
}
