import NavigationMenu from '@/components/menu/NavigationMenu';
import LibraryMenu from '@/components/menu/LibraryMenu';

export default function LeftSide() {
  return (
    <div className='w-full max-w-[20.8333%] h-[calc(100vh-111px)] bg-black box-border flex flex-col flex-wrap content-between justify-start pr-2.5'>
      <NavigationMenu />
      <LibraryMenu />
    </div>
  )
}
