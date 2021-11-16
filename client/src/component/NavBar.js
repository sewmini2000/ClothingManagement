import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
          <li class="nav-item dropdown">


                <a class="nav-link " href="/" id="navbarDropdownMenuLink" >
                  <b>Home</b>
                </a>
                {/* <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="/Main/add">Main</a></li>
                  <li><a class="dropdown-item" href="#"></a></li>
                </ul> */}
               
                
           </li>

           <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 <b> Branch</b>
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="/add">Create Branch</a></li>
                  <li><a class="dropdown-item" href="/branch">Branch Details</a></li>
                  {/* <li><a class="dropdown-item" href="#"></a></li> */}
                </ul>
               
           </li>

           <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b>  Customer</b>
                </a>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="/customer/add">New Customer</a></li>
                  <li><a class="dropdown-item" href="/customer">Customer Details</a></li>
                  <li><a class="dropdown-item" href="#"></a></li>
                </ul>
               
           </li>
           <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b>  Complaint</b>
                </a>


           <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="/comp/add">Customer Complaint</a></li>
                  <li><a class="dropdown-item" href="/comp">Complaint Details</a></li>
                  <li><a class="dropdown-item" href="#"></a></li>
                </ul>
               </li>  
          

               <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b>  Staff Attendence Details</b>
                </a>


           <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="/staff/add">Staff Attendence</a></li>
                  <li><a class="dropdown-item" href="/staff">Attendence Details</a></li>
                  <li><a class="dropdown-item" href="#"></a></li>
                </ul>
               </li>  



               <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b>Daily Sales</b>
                </a>


           <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="/profit/add">Profit</a></li>
                  <li><a class="dropdown-item" href="/profit">Profit Details</a></li>
                  <li><a class="dropdown-item" href="#"></a></li>
                </ul>
               </li>  


               
          
          
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        
    )
  }
}
          
    
