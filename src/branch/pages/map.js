import React,{useContext} from 'react'; 
import PagePresets from '../components/PagePreset';
import MapWrapper from '../../core/components/MapWrapper';
 
 
const Page = () => {  
  return(<PagePresets.Default  override={
    { 
      Body:<Body props={{}}/> 
    } 
  }/>);
}

export default Page;

 

const Body= ()=>{ 
  return ( <> 
{/* Content Header (Page header) */}
<div className="content-header">
<div className="container-fluid">
  <div className="row mb-2">
    <div className="col-sm-6">
      <h1 className="m-0 text-dark">Map</h1>
    </div>{/* /.col */}
    <div className="col-sm-6">
      <ol className="breadcrumb float-sm-right">
        <li className="breadcrumb-item"><a href="#">Map</a></li>
        <li className="breadcrumb-item active">Dashboard v1</li>
      </ol>
    </div>{/* /.col */}
  </div>{/* /.row */}
</div>{/* /.container-fluid */}
</div>
{/* /.content-header */}
{/* Main content */}
<section className="content">
<div className="container-fluid">
 
  <div className="row">
   <MapWrapper/>

  </div>
 
</div> 
</section>
{/* /.content */}
</>
  )
}