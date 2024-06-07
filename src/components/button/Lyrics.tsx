import { MdOutlineLyrics } from 'react-icons/md';
import Button from "@/components/button/common/Button";

export default function LyricsButton() {
  return (
    <>
      <Button title='가사'><MdOutlineLyrics size='20' className={'svgIcon'}/></Button>
    </>
  );
}
