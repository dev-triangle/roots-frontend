import React, { Suspense } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import { Homepage, Contact,Signup,Login,Places,Items} from './pages'
import Guides from './pages/Guides/Guides';
import Navbar from  './components/Navbar/Navbar'
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
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
        <Route path='/items' element={<Items/>}/>
      </Routes>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
