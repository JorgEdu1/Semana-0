import React from 'react'

const BarraNav = () => {
    return (
        //criando a barra de navegação
        <div className='barraNav'>
            <div className='logo'>
                <img src="https://www.cajuinasaogeraldo.com.br/wp-content/uploads/2021/07/cajuina-sao-geraldo11.png" alt="" />
            </div>
            <div className='barraNav_links'>
                <a href="#">Produtos</a>
                <a href="#">Calcular frete</a>
                <a href="#">Contatos</a>
            </div>
        </div>
    )
}

export default BarraNav