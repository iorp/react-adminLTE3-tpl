import logo from './logo.svg';
import './App.css';
import {  BrowserRouter, Routes,  Route, useParams, Navigate } from "react-router-dom";
import $ from 'jquery';


import OriginalDashboard from './branch/pages/OriginalDashboard'
import Home from './branch/pages/home'
import About from './branch/pages/about'
import Map from './branch/pages/map'



require('./core/plugins/fontawesome_free/css/all.min.css')
 
require('./core/plugins/overlayScrollbars/css/OverlayScrollbars.css') 
require('./core/plugins/overlayScrollbars/js/jquery.overlayScrollbars.js')

require('./core/plugins/bootstrap/js/bundle.js')
 
require('./core/plugins/adminlte/css/adminlte.css')
require('./core/plugins/adminlte/js/adminlte.js') 


window.$=$;




 
 
  
const Error = (props) => {
  return ( <>{props.message}</> );
}

function App() {



  // 
  return (
    <BrowserRouter basename='/build' >
    <Routes>

        
      {/* 
          
      <Route path="/test" element={<Test />}/>  
      <Route path="*" element={<WrongUrl />}/>
       <Route exact path={'/:request'} element={<Include address={"@a"} />}/>   
      */} 
           <Route path="/dashboard" element={<OriginalDashboard />} />  
           <Route path="/" element={<Home />} />    
           <Route path="/about" element={<About />} />    
           <Route path="/map" element={<Map />} />    
  
        <Route path="*" element={<Error  message={'Invalid url'} code={'URL_INVALID'}/>} /> 

     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
