/*

The site/PagePreset component sets the main structure of a page 

*/
 
import React,{useContext} from 'react';  
//import {DataContext} from "../../../../core/modules"   
import Position from '../../core/modules/Positions';
import Partial from '../partials';

const Default = (props) => { 
 // const [context, setContext]   = useContext(DataContext);
  
    return ( <div className="wrapper">
      <Position.Header>
      {!props.override.Header &&  <Partial.NavBar/>}    {props.override.Header &&  props.override.Header}
        </Position.Header>

      <Position.LeftBar> 
      {!props.override.LeftBar &&  <Partial.LeftBar/>}    {props.override.LeftBar &&  props.override.LeftBar}
      </Position.LeftBar> 

      <Position.Body>
        {props.override.Body} 
      </Position.Body>  

      <Position.RightBar> 
      {!props.override.RightBar &&  <Partial.RightBar/>}    {props.override.RightBar &&  props.override.RightBar}
      </Position.RightBar> 

      <Position.Footer>
      {!props.override.Footer &&  <Partial.Footer/>}    {props.override.Footer &&  props.override.Footer}
      </Position.Footer>

    </div>);
}
 
export default {Default:Default};
