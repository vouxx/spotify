import { ReactElement, ReactNode } from 'react';

interface Iprops {
  children?: ReactNode,
  title?: string,
  onClick?:React.MouseEventHandler<HTMLElement>,
  id?: string,
}

export default function Button({ children, title, onClick, id }:Iprops) {
  return (
    <>
      <button title={title} onClick={onClick} id={id}>{children}</button>
    </>
  );
}
