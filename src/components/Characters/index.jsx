import CharCard from "../CharCard";
import './style.css'

function Characters({listCharacters}){

    return(
        <div className="container">
        <div>
            <h1>Personagens Rick e Morty</h1>
            
        </div>
        <div className="listagem">
        {listCharacters.map((element)=>(
        <CharCard personagens={element}/>
        ))}
    
        </div>
        
        </div>
        
    )
}

export default Characters