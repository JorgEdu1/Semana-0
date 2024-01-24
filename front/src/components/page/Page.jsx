import React from 'react'
import Footer from '../Footer'
import Carrosel from '../Carrosel'
import BarraNav from '../NavBar'
import Sobre from '../Sobre'
import Frete from '../Frete'
import Forms from '../Forms'
import Cards from '../Cards'

const Page = () => {
  //Aqui foi criado o componente Page, que é a página principal do site, onde estão todos os outros componentes
  return (
    <div>
        <BarraNav/>{/*Aqui foi importado o componente BarraNav, que é a barra de navegação do site*/}
        <Carrosel/>{/*Aqui foi importado o componente Carrosel, que é o carrosel de imagens do site*/}
        <Cards/>{/*Aqui foi importado o componente Cards, que são os cards de produtos do site*/}
        <Sobre />{/*Aqui foi importado o componente Sobre, que é a seção sobre o site*/}
        <Frete/>{/*Aqui foi importado o componente Frete, que é a seção de cálculo de frete do site, foi aqui que usamos o maps e API de frete*/}
        <Forms/>{/*Aqui foi importado o componente Forms, que é a seção de formulário de contato do site, foi aqui que usamos o axios para enviar o email com nossa API*/}
        <Footer/>{/*Aqui foi importado o componente Footer, que é o rodapé do site*/}
    </div>
  )
}

export default Page