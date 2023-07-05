import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from 'hex-to-rgba';


const Time = ({aoFavoritarColaborador, aoDeletar, mudarCor, ...props}) => {
  const css = { backgroundColor: hexToRgba(props.cor, '0.15') };

  return (
    props.colaboradores.length > 0 && (
      <section className="time" style={css}>
      
      <input value={props.cor} type="color" className="input-color" onChange={evento => mudarCor(evento.target.value, props.id)} />
        
        <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
        
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => {
            return <Colaborador
              aoFavoritar={aoFavoritarColaborador}
              aoDeletar={aoDeletar}
              corDeFundo={props.cor}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              id={colaborador.id}
              favorito={colaborador.favorito}
            />;
          })}
        </div>
      </section>
    )
  );
};

export default Time;
