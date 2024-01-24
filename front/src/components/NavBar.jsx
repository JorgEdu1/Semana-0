const BarraNav = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth',
          });
        }
      };

    return (
        <div className='barraNav'>
            <div className='logo'>
                <img src="https://www.cajuinasaogeraldo.com.br/wp-content/uploads/2021/07/cajuina-sao-geraldo11.png" alt="" />
            </div>
            <div className='barraNav_links'>
                <a color="white" onClick={() => scrollToSection('productId')}>Produtos</a>
                <a onClick={() => scrollToSection('freteId')}>Calcular frete</a>
                <a onClick={() => scrollToSection('formId')}>Contatos</a>
            </div>
        </div>
    )
}

export default BarraNav