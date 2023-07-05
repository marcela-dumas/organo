import './Campo.css'

const Campo = ({type='text', ...props}) => {

    return (
        <div className={`campo campo-${type}`}>
            <label>{props.label}</label>
            <input 
                type={type} 
                value={props.valor} 
                onChange={evento => props.aoAlterado(evento.target.value)} 
                required={props.obrigatorio} 
                placeholder={props.placeholder} 
            />
        </div>
    )
}

export default Campo