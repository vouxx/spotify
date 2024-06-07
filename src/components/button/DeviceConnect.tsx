import { TbDevices } from 'react-icons/tb';
import Button from "@/components/button/common/Button";

export default function DeviceConnectButton() {
  return (
    <>
      <Button title='다른기기와 연결'><TbDevices size='20' className={'svgStrokeIcon'}/></Button>
    </>
  );
}
