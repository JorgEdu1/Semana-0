import React from 'react'
import Footer from '../Footer'
import Carrosel from '../Carrosel'
import BarraNav from '../NavBar'
import Sobre from '../Sobre'
import Frete from '../Frete'
import Forms from '../Forms'
import Cards from '../Cards'

const Page = () => {
  return (
    <div>
        <BarraNav/>
        <Carrosel/>
        <Cards/>
        <Sobre />
        <Frete/>
        <Forms/>
        <Footer/>
    </div>
  )
}

export default Page