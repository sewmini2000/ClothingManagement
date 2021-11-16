import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';


export default class CreateStaff extends Component {

  constructor(props){
    super(props);
    this.state={
      staffid:"",
      firstname:"",
      lastname:"",
      nic:"",
      date:"",
      contactnumber:"",
      arrivaltime:"",
      workinghours:""
     
      
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }

  onSubmit = (e) =>{

    e.preventDefault();

    const {staffid,firstname,lastname,nic,date,contactnumber,arrivaltime,workinghours} = this.state;

    const data ={
      staffid:staffid,
      firstname:firstname,
      lastname:lastname,
      nic:nic,
      date:date,
      contactnumber:contactnumber,
      arrivaltime:arrivaltime,
      workinghours:workinghours
     
      
    }

    console.log(data)
     //const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
     const con = /^[0-9\b]+$/;
     const cv =  /^[0-9\b]+$/;
 
     if((!con.test(String(staffid))) || (staffid.length != 6))
     {swal("Invalid Staff ID !", "Staff ID should be valid pattern", "error");}
 
     else{
       swal({
         title: "Are you sure?",
         text: ` Staff ID: ${this.state.staffid}| Contact Number: ${this.state.contactnumber}}` ,
         icon: "info",
         buttons: true,
         dangerMode: true,
       })
       .then((willDelete) => {
         if (willDelete) {
    axios.post("/staff/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            staffid:"",
            firstname:"",
            lastname:"",
            nic:"",
            date:"",
            contactnumber:"",
            arrivaltime:"",
            workinghours:""
            


          }
        )
       // swal("Staff Added Successfully!",+ `${this.state.status}`, "success");

      }

    })

    swal("Staff Added Successfully!", {

      icon: "success",

    });

  } else {

    swal("Your Staff is not completed!");

  }

});
} 

}      


//demo button method
demo =() => { 

  //setState
  this.setState ({
    staffid:"000006"
  })

  this.setState ({
    firstname:"Nishadi"
  })

  this.setState ({
    lastname:"Apsara"
  }) 

  this.setState ({
    nic:"200034675434"
  }) 

  this.setState ({
    date:""
  }) 

  this.setState ({
    contactnumber:"0772345678"
  }) 

  this.setState ({
    arrivaltime:""
  }) 

  this.setState ({
    workinghours:"05"
  }) 

}
  render() {
    return (

      <div class="row">
  
    <div class="col-6">
      <br/>
      <br/>
      <br/>
      <br/>
    
      <img src="https://i.gifer.com/2mVW.gif" width="90%" height="78%" />
    </div>
    <div class="col-6">
    <div className="mycard">
    <div className="card" >
      
      
              
        <div className="container-fluid">
          
         <b> <h1 className="h3 mb-3 font-weight-normal">Add New Staff</h1></b>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Staff ID</label>
              <input type="text" 
              className="form-control"
              name="staffid"
              placeholder="Enter ID"
              value={this.state.staffid}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>First Name</label>
              <input type="text"
              className="form-control"
              name="firstname"
              placeholder="Enter Name"
              value={this.state.firstname}
              onChange={this.handleInputChange}/>
            </div>


            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Last Name</label>
              <input type="text"
              className="form-control"
              name="lastname"
              placeholder="Enter Name"
              value={this.state.lastname}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>NIC</label>
              <input type="text"
              className="form-control"
              name="nic"
              placeholder="Enter NIC"
              value={this.state.nic}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Date</label>
              <input type="date"
              className="form-control"
              name="date"
              placeholder="Enter Date"
              value={this.state.date}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Contact Number</label>
              <input type="text"
              className="form-control"
              name="contactnumber"
              placeholder="0xx-xxxxxxx"
              value={this.state.contactnumber}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Arrival Time</label>
              <input type="time"
              className="form-control"
              name="arrivaltime"
              placeholder="Time"
              value={this.state.arrivaltime}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Working Hours</label>
              <input type="text"
              className="form-control"
              name="workinghours"
              placeholder="Enter Hours"
              value={this.state.workinghours}
              onChange={this.handleInputChange}/>
            </div>

           

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>

            <br/>
            <br/>
          
           

            <button type="button" class="btn btn-outline-dark btn-sm" onClick={this.demo} > Demo </button>
          
          </form>
          </div>
          </div>
          </div></div>
          <footer class="page-footer font-small special-color-dark pt-4" style={{ backgroundColor: '#999999' }} >


<div class="container">


  <ul class="list-unstyled list-inline text-center">
    <li class="list-inline-item">
      <a class="btn-floating btn-fb mx-1">
        <i class="fab fa-facebook-f"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-tw mx-1">
        <i class="fab fa-twitter"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-gplus mx-1">
        <i class="fab fa-google-plus-g"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-li mx-1">
        <i class="fab fa-linkedin-in"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-dribbble mx-1">
        <i class="fab fa-dribbble"> </i>
      </a>
    </li>
  </ul>



</div>


<div class="footer-copyright text-center py-3">© 2021 Copyright:
  <a href="https://mdbootstrap.com/">estiloonline@gmail.com</a>
</div>


</footer>
        </div>
    )
  }
}