import { BiFullscreen } from 'react-icons/bi';
import Button from "@/components/button/common/Button";

export default function FullScreenButton() {
  return (
    <>
      <Button title='전체화면'><BiFullscreen size='20' className={'svgIcon'}/></Button>
    </>
  );
}
