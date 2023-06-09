import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import About from './Views/About/About.jsx'
import Detail from './Views/Detail/Detail.jsx'
import Footer from './components/Footer/Footer';
import Form from './Views/Form/Form.jsx';
import Favorites from './Views/Favorites/Favorites';
import ErrorPage from './Views/ErrorPage/ErrorPage';

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);//estado local Access
   const navigate = useNavigate();
   const location = useLocation();
   const logInRoute = location.pathname === '/';
   
   async function searchHandler(id) {
      try {
        const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
        if (data.name) {
          setCharacters(oldChars => [...oldChars, data]);
         }
      } catch (error) {
        navigate('/error');
      }
    }

   function closeHandler(id) {
      let deleted = characters.filter(character => character.id !== Number(id))
      setCharacters(deleted);
   }
   
   async function login(userData) {
      try {
        const { email, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/login/';
        const { data } = await axios.get(URL, { params: { email, password } });
        const { access } = data;
        setAccess(data);
        access && navigate('/home');
      } catch (error) {
        console.log("No se ha podido iniciar sesión")
      }
    }
    

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   function randomHandler() {
      let haveIt = [];
      //Generate random number
      let random = (Math.random() * 826).toFixed();
  
      //Coerce to number by boxing
      random = Number(random);
  
      if (!haveIt.includes(random)) {
        haveIt.push(random);
        fetch(`https://rickandmortyapi.com/api/character/${random}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          });
      } else {
        console.log("Ya agregaste todos los personajes");
        return false;
      }
    }
   
   
   return (
      <div className='App'>
         {!logInRoute && <Nav onSearch={searchHandler} random={randomHandler} setAccess={setAccess} />}
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={closeHandler} />} />
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/error' element={<ErrorPage/>}/>
         </Routes>
         {!logInRoute && <Footer />}
      </div>
   );
}
export default App;