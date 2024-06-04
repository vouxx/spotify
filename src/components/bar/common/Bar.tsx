
interface Iprops {
  id?: string,
  minValue: number,
  maxValue: number,
  defaultValue: number,
  onMouseUp: React.MouseEventHandler
}

export default function Bar({id, minValue , maxValue, onMouseUp, defaultValue}:Iprops) {
  return (
    <div className='playerBarBox' id='playerBarBox'>
      <input id={id} type="range" min={minValue} max={maxValue} defaultValue={defaultValue} onMouseUp={onMouseUp}/>
    </div>
  );
}
