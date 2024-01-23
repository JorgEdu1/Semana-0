import React from 'react'
import Footer from '../Footer'
import Carrosel from '../Carrosel'
import BarraNav from '../NavBar'
import Sobre from '../Sobre'

const Page = () => {
  return (
    <div>
        <BarraNav/>
        <Carrosel/>
        <Sobre />
        <Footer/>
    </div>
  )
}

export default Page