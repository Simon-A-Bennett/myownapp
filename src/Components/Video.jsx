import React from 'react'
import nebula from '../assets/video/nebula.webm'
import '../Styles/Video.css'

const Video = () => {
  return (
    <div>
      <video class="center" width="480" height='auto' autoplay='autoplay' loop preload playsinline muted >
      <source src={nebula}/>
     </video>
    </div>
  )
}

export default Video
