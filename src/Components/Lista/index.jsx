export const Lista = ({odas}) => {
    return(
        <div className='listas'>
            <div>
            <li className="odas"> {odas.length} odas </li>
            </div>
          
            {odas.map(oda => (
             <div key={oda._id} className='lista'>
                <h1>{oda.nome} </h1>
                <p > USUARIO: {oda.usuario} </p>
                <p > DATA DE INCLUSAO: {oda.data_inclusao}</p>
                <p > PALAVRAS-CHAVE: {oda.palavras_chave}</p>
                <p > DESCRIÇAO: {oda.descricao} </p>
              </div>
            ))}
        </div>
    )
}

export default Lista