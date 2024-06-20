import Image from 'next/image';

interface LibraryItemProps {
  coverimg: string;
  plname: string;
  listattr: string;
  usename: string;
}

export default function LibraryItems({coverimg, plname, listattr, usename}: LibraryItemProps) {
  return (
    <div className='text-lightgray text-sm leading-10 flex flex-row flex-wrap hover:bg-[#212121] p-1.5 rounded-lg overflow-hidden transition-all duration-300 ease-in-out cursor-pointer'>
      <div className='w-[48px] h-[48px] overflow-hidden rounded flex justify-center'>
        <Image  
          src={coverimg}
          alt='test image'
          className={`!w-auto h-full max-w-fit`}
        />
      </div>
      <div className='leading-none max-w-[calc(100%-48px)] pl-3 flex flex-col justify-center'>
        <p className='w-full overflow-hidden whitespace-nowrap text-ellipsis mb-0.5 text-base text-white'>{plname}</p>
        <p className='flex flex-row justify-center items-center'><span className='inline-block max-w-[73px] overflow-hidden whitespace-nowrap text-ellipsis'>{listattr}</span> • <span className='inline-block max-w-[68px] overflow-hidden whitespace-nowrap text-ellipsis'>{usename}</span></p>
      </div>
    </div>
  )
}
