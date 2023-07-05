import "./Colaborador.css";
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

const Colaborador = ({ nome, imagem, cargo, corDeFundo, aoDeletar, id, aoFavoritar, favorito }) => {

  const favoritar = () => {
    aoFavoritar(id)
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar
  }

  return (
    <div className="colaborador">
      <AiFillCloseCircle 
        size={25} 
        className="deletar" 
        onClick={() => aoDeletar(id)} 
      />
      <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
        <img src={imagem} alt={"Foto de " + nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className='favoritar'>
            {favorito
             ? <AiFillHeart {...propsFavorito} color='red' /> 
             : <AiOutlineHeart {...propsFavorito} />}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
