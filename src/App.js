//CSS imports
import './App.css';

//React Lib Impots
import React from 'react';
import { Route, Routes } from 'react-router-dom';


//Components Import
import CoinInfo from './components/coinInfo/coinInfo.js';
import Signup from './components/signUp/signUp.js';
import AddCoin from './components/addCoin/addCoin.js';
import LogIn from './components/logIn/login.js';
import Main from './components/Main/main.js';




function App() {
  return (
    <Routes>

        <Route path='/' element={<Main />}>    
        </Route>

        <Route path="/signup" element={<Signup />}>    
        </Route>

        <Route path="/addcoin" element={<AddCoin />}>    
        </Route>

        <Route path="/login" element={<LogIn />}>
        </Route>

        <Route path="/coininfo" element={<CoinInfo />}>
        </Route>

      </Routes>
  
      
  );
}

export default App;
