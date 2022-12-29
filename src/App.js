import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import { Homepage, Contact,Signup,Login,Places} from './pages'
import Guides from './pages/Guides/Guides';
import Navbar from  './components/Navbar/Navbar'
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
        <Route path='/guides' element={<Guides/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
