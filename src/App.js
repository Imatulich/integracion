import style from './App.module.css';
import NavBar from './components/Nav/Navbar';
import { useState } from 'react';
import Cards from './components/cardlist/Cards.jsx';
import axios from 'axios';

function App() {
   const [characters, setCharacters] = useState([]);
   


   function searchHandler(id){
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }
   

   function closeHander(id){
   let Delete = characters.filter(character=> character.id !== Number(id))
   setCharacters(Delete)
   }
   
   return (
      <div className={style.fondo}>
        <NavBar onSearch={searchHandler}/>
        <Cards characters={characters} onClose={closeHander} />
      </div>
    );
}

export default App;
