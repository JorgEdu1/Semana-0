import React from 'react'

const Carrosel = () => {
  return (
    <div className='carousel-div'>
        <div id="carouselExampleControls" data-interval="false"  class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="https://www.cajuinasaogeraldo.com.br/wp-content/uploads/2022/06/Banner_Cajui%CC%81naSG_Lata_2023.png" alt="Primeiro Slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://www.cajuinasaogeraldo.com.br/wp-content/uploads/2022/04/Banner_CajuinaSG_Recife_2023.jpg" alt="Segundo Slide"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Anterior</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Próximo</span>
            </a>
        </div>
    </div>
  )
}

export default Carrosel