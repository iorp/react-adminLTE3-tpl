import React, { useContext } from 'react'
import {Link} from 'react-router-dom' 
 
 //import {DataContext} from "../../../../core/modules"   

 

 
  export default (props)=>{ 
 //   const [context, setContext]   = useContext(DataContext);
        return ( <>
             
  
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div> 
      
        <div className="info">
  Hello user
         
        </div> 
      </div>
     
        {/* NestedList */} 
 
   {/* Sidebar Menu */}
<nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
<li className="nav-header">MISCELLANEOUS</li>
          <li className="nav-item">
            <a href="https://adminlte.io/docs/3.0" className="nav-link">
              <i className="nav-icon fas fa-file" />
              <p>Documentation</p>
            </a>
            </li>
            </ul>
            </nav>
    
 
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}

 
    </>
        )
    }