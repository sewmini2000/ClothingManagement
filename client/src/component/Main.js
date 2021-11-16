import React, { Component } from 'react';
import Pic1 from './Pic1.jpg';
import Pic2 from './Pic2.jpg';
import Pic3 from './Pic3.jpg';
import Pic4 from './Pic4.png';
import Pic5 from './Pic5.jpg';
import Pic6 from './Pic6.jpg';





export default class Main extends Component{
    render(){
        return(
            
               
  

<div className="container">
  <div className="row">

    <p><br/></p>
    <p><br/></p>

    <div className="col-sm-4">
       <button>
       <a href="/branch"> <img src={Pic1} alt='Picture1'  style={{width:'300px', height:'300px'}}/></a>
      </button>
      <p></p>
      <p><a href="/branch"> <button type="button" className="btn btn-info" style={{width:'315px', height:'50px',color:'yellow'}}>Branch</button></a></p>
    </div>

    <div className="col-sm-4">
       <button>
       <a href="/customer"> <img src={Pic2} alt='Picture2' style={{width:'300px', height:'300px'}}/></a>
      </button>
      <p></p>
      <p><a href="/customer"> <button type="button" className="btn btn-info" style={{width:'315px', height:'50px',color:'yellow'}}>Customer</button></a></p>
    </div>


  

    <div className="col-sm-4">
       <button>
       <a href="/comp"><img src={Pic3} alt='Picture3'  style={{width:'300px', height:'300px'}}/></a>
      </button>
      <p></p>
      <p> <a href="/comp"><button type="button" className="btn btn-info" style={{width:'315px', height:'50px',color:'yellow'}}>Complaint</button></a></p>
    </div>

    <p><br/></p>
    <p><br/></p>

    <div className="col-sm-4">
       <button>
       <a href="staff"><img src={Pic4} alt='Picture4' style={{width:'300px', height:'300px'}}/></a>
      </button>
      <p></p>
      <p> <a href="staff"> <button type="button" className="btn btn-info" style={{width:'315px', height:'50px',color:'yellow'}}>Staff Attendence</button></a></p>
    </div>

    <div className="col-sm-4">
       <button>
       <a href="profit"><img  src={Pic5} alt='Picture5'  style={{width:'300px', height:'300px', }}/></a>
      </button>
      <p></p>
      <p><a href="profit"> <button type="button" className="btn btn-info" style={{width:'315px', height:'50px',color:'yellow'}}>Daily Sales</button></a></p>
    </div>
    
    <div className="col-sm-4">
       <button>
       <a href="profit"><img src={Pic6} alt='Picture6'  style={{width:'300px', height:'300px'}}/></a>
      </button>
      <p></p>
     <p><a href="profit"> <button type="button" className="btn btn-info" style={{width:'315px', height:'50px',color:'yellow'}}>Reports</button></a></p>
    </div>
  

  </div>
  </div>
  


 
             
     )   
    }
    }