import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navigation.js';
import H from './Components/Home.js';
import R from './Components/Register.js';
import L from './Components/Login.js';
import SH from './Components/Show.js';
import RA from './Components/Respappbar.js';
import U from './Components/Update.js';
import D from './Components/Delete.js';

import C from './Components/Contactus.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
   
    
    <div className="App">
      <header className="App-header">
        
      <img src={logo} className="App-logo" alt="logo" /> 
        <h3>
            Online job portal system 
        </h3>
        
      </header>

      <div className="App-body">
       <Nav/>
       <C />
       
       <RA/>
       <Routes>
        <Route path='/'element={<H/>}></Route>
        <Route path='/Reg'element={<R/>}></Route>
        <Route path='/Home'element={<H/>}></Route>
        <Route path='/Sho'element={<SH/>}></Route>
         <Route path='/Log'element={<L/>}></Route>
        <Route path='/Upd'element={<U/>}></Route>
       <Route path='/Del'element={<D/>}></Route>

        <Route path='/Cont'element={<C/>}></Route>
    
    
       
       </Routes>
      

       </div>
    </div>
    </BrowserRouter>
  );
}


export default App;
