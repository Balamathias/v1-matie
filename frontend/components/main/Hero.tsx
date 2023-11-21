'use client'

import { AppWrap } from "@/wrappers"
import HeroContent from "../sub/HeroContent"

const Hero = () => {
  return (
    <div className="relative flex-col flex w-full h-full min-h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute top-[-390px] left-0 w-full object-cover z-[1]"
      >
        <source src="/static/cards-video.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  )
}

export default AppWrap(Hero, 'home', 'relative')
