import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='footer'>
            <div className='redes-sociais'>
                <img src="/imagens/fb.png" alt="Logo do facebook" />
                <img src="/imagens/tw.png" alt="Logo do twitter" />
                <img src="/imagens/ig.png" alt="Logo do instagram" />
            </div>
            <div className='logo-organo'><img src="/imagens/logo.png" alt="Logo do organo" /></div>
            <div className='texto'><h3>Desenvolvido por Alura.</h3></div>
        </footer>
    )
}

export default Rodape