
import './App.css';
import { useState,useEffect } from 'react';
import Characters from './components/Characters';


function App() {

  const [characterList,setCharacterList]= useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
    .then((response) => response.json())
    .then((response) => setCharacterList(response.results))
    .catch((err)=>console.log(err));
  },[currentPage]);

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  };
 
  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  };

  console.log(characterList)
  return (
    <div className="App">
      <header className="App-header">
        <Characters listCharacters={characterList}></Characters>
        <div className='botoes'>
        <button onClick={previousPage}>Página Anterior</button>
        <button onClick={nextPage}>Próxima Página</button>
        </div>
        
      </header>
    </div>
  );
}

export default App;