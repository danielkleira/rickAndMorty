import './style.css'

function CharCard({personagens}){
    return(
        <div className={personagens.status==='Alive' ? 'vivo' :'morto'}>
            <p className='paragrafo'>{personagens.name}</p>
            
            <img className='imagem' src={personagens.image} alt='Personagem'/>
        </div>
    )
}

export default CharCard
