import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
   const[characters, setCharacters] = useState([]);

   function searchHandler(id){
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function closeHandler(id){
         let deleted = characters.filter(character => character.id !== Number(id))
         setCharacters(deleted);
      }

   return (
      <div className='App'>
         <Nav onSearch={searchHandler}/>
         <Home/>
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={closeHandler}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
         <Footer/>
      </div>
   );
}
export default App;