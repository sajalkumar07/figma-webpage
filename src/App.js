import React from 'react'
import Midnav from "./layout/Midnav"
import CardFlip from './layout/Cardflip';
import Icons from './layout/Icons';

const App = () => {
  return (
    <div className='App'>
        <Midnav></Midnav>
        <CardFlip></CardFlip>
        <Icons></Icons>
    </div>
  )
}

export default App