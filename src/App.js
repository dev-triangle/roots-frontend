import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import { Homepage, Contact,Signup,Login,Places} from './pages'
import ScrollToTop from './utils/ScrollToTop';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/places' element={<Places/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
