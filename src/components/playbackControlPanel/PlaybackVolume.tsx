import React from 'react'
import VolumeButton from '../button/Volume'
import VolumeBar from '../bar/VolumeBar'

export default function PlaybackVolume() {
  return (
    <div className='flex flex-row justify-between items-center w-full max-w-[125px] mr-1'>
      <VolumeButton />
      <VolumeBar />
    </div>
  )
}
