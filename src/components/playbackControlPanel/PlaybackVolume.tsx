import React from 'react'
import VolumeButton from '../button/Volume'
import VolumeBar from '../bar/VolumeBar'

export default function PlaybackVolume() {
  return (
    <div className='volume_box'>
      <VolumeButton />
      <VolumeBar />
    </div>
  )
}
