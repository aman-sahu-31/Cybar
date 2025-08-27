import React from 'react'
import Navbar from './Header/Navbar'
import Card from '../Components/Card'
import Learning from '../pages/Learning Corner/Learning'
import Media from '../pages/Media Gallery/Media'
// import Footer from '../pages/Footer'
import System from '../pages/System-working/System'
import Tracking from '../pages/System-working/Tracking'

function Home() {
  return (
    <>
    <div>
        <Navbar/>
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