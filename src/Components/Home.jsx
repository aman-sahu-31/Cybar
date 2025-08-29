import React from 'react'
import Card from './ImgSlide'
import Learning from '../pages/Learning Corner/Feacture'
import Media from '../pages/Media Gallery/Media'
import System from '../pages/System-working/System'
import Tracking from '../pages/System-working/Tracking'

function Home() {
  return (
    <>
    <div>
        <Card />
        <Learning/>
        <Tracking/>
        <Media/>
        <System/>
    </div>
    </>
  )
}

export default Home