import React, { Component } from 'react'

 
  export  const Body =  (props)=>{
    let children= props.children;
        return (
            <div>
   <div {...props} className={"content-wrapper " +(props.className ||"")  }>
   {props.children}
  </div>
</div>

        )
    }
 
export  const Footer =  (props)=>{
  return (
      <div>
<footer  {...props} className={"main-footer " +(props.className ||"") }> 


{props.children}
</footer>
</div>

  )
} 

export  const Header =  (props)=>{
  return (
      <div>
<nav  {...props}  className={"main-header navbar navbar-expand navbar-white navbar-light " +(props.className ||"")   }> 
{props.children}
</nav>
</div>

  )
} 

export  const LeftBar =  (props)=>{
  let children= props.children;
      return (
          <div>
      <aside  {...props}  className={"main-sidebar sidebar-dark-primary elevation-4 " +(props.className ||"")  }> 

  {props.children}
</aside>
</div>

      )
  } 

  export  const RightBar =  (props)=>{
    let children= props.children;
        return (
            <div>
        <aside  {...props}  className={"control-sidebar control-sidebar-dark " +(props.className ||"")  }> 
      
            {props.children}
            

  </aside>
</div>

        )
    } 

    export default {Body, Footer,Header,LeftBar,RightBar}