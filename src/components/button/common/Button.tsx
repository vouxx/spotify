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
      <button className="mx-1.5 transition-all duration-300 ease-in-out opacity-70 hover:opacity-100" title={title} onClick={onClick} id={id}>{children}</button>
    </>
  );
}
