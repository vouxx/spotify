import { RiPlayList2Fill } from 'react-icons/ri';
import Button from "@/components/button/common/Button";

export default function PlayListButton() {
  return (
    <>
      <Button title='플레이리스트'><RiPlayList2Fill size='20' className="mx-auto fill-current text-white opacity-70"/></Button>
    </>
  );
}
