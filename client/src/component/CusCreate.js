import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';


export default class CreateComp extends Component {

  constructor(props){
    super(props);
    this.state={
      customername:"",
      address:"",
      email:"",
      province:"",
      city:"",
      phone:"",
      nic:"",
      dateofbirth:"",
      gender:"",
      postalcode:""
      
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

    const {customername,address,email,province,city,phone,nic,dateofbirth,gender,postalcode} = this.state;

    const data ={
      customername:customername,
      address:address,
      email:email,
      province:province,
      city:city,
      phone:phone,
      nic:nic,
      dateofbirth:dateofbirth,
      gender:gender,
      postalcode:postalcode
    }

    console.log(data)
   //const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
   const con = /^[0-9\b]+$/;
   const cv =  /^[0-9\b]+$/;

   if((!con.test(String(phone))) || (phone.length != 10))
   {swal("Invalid Phone Number !", "Phone Number should be valid pattern", "error");}
   else if (!email.includes("@") || !email.includes("."))
   {
    {swal("Invalid Email Address !", "Email Address should be valid pattern", "error");}
   }
   else{
     swal({
       title: "Are you sure?",
       text: `Customer Name: ${this.state.customername}| Phone Number: ${this.state.phone}}` ,
       icon: "info",
       buttons: true,
       dangerMode: true,
     })
     .then((willDelete) => {
       if (willDelete) {

    axios.post("http://localhost:8000/customer/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            customername:"",
            address:"",
            email:"",
            province:"",
            city:"",
            phone:"",
            nic:"",
            dateofbirth:"",
            gender:"",
            postalcode:""

          }
        )
    // swal("Customer Added Successfully!",+ `${this.state.status}`, "success");

  }

})

swal("Customer Added Successfully!", {

  icon: "success",

});

} else {

swal("Your Customer Form is not completed!");

}

});
} 

}     



//demo button method
demo =() => { 

  //setState
  this.setState ({
    customername:"Sewmini"
  })

  this.setState ({
    address:"11/A,Maharagama"
  })

  this.setState ({
    email:"sewmini@gmail.com"
  }) 

  this.setState ({
    province:"Western"
  }) 

  this.setState ({
    city:"Colombo"
  }) 

  this.setState ({
    phone:"0772345678"
  }) 

  this.setState ({
    nic:"200067564534"
  }) 

  this.setState ({
    dateofbirth:"09/08/2000"
  }) 

  
  this.setState ({
    gender:"female"
  }) 

  
  this.setState ({
    postalcode:"2233"
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
    
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCLq7Nx_Nl2xk3HpSENzOPowf8SjsPWp8kw&usqp=CAU" width="90%" height="78%" />
    </div>
    <div class="col-6">
    <div className="mycard">
    <div className="card" >
      
      <div className="container-fluid">

         
          <h1 className="h3 mb-3 font-weight-normal">Customer Details</h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}} >Customer Name</label>
              <input type="text"
              className="form-control"
              name="customername"
              placeholder="Enter Name"
              value={this.state.customername}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Addreess</label>
              <input type="text"
              className="form-control"
              name="address"
              placeholder="Enter Address"
              value={this.state.address}
              onChange={this.handleInputChange}/>
            </div>


            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Enter Email</label>
              <input type="email"
              className="form-control"
              name="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Province</label>
              <input type="text"
              className="form-control"
              name="province"
              placeholder="Enter Here"
              value={this.state.province}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>City </label>
              <input type="text"
              className="form-control"
              name="city"
              placeholder="Enter Here"
              value={this.state.city}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Phone Number</label>
              <input type="text"
              className="form-control"
              name="phone"
              placeholder="0xx-xxxxxxx"
              value={this.state.phone}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}> NIC</label>
              <input type="text"
              className="form-control"
              name="nic"
              placeholder="Enter NIC"
              value={this.state.nic}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Date Of Birth</label>
              <input type="date"
              className="form-control"
              name="dateofbirth"
              placeholder="Enter Birth"
              value={this.state.dateofbirth}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Gender</label>
              <select className="form-control" name="gender" placeholder="Select" onChange={this.handleInputChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                </select>
              {/* <input type="text"
              className="form-control"
              name="gender"
              placeholder="Enter Here"
              value={this.state.gender}
              onChange={this.handleInputChange}/> */}
            </div>

        
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Postal Code</label>
              <input type="text"
              className="form-control"
              name="postalcode"
              placeholder="Enter Code"
              value={this.state.postalcode}
              onChange={this.handleInputChange}/>
            </div>


            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>
      <br>
      </br>
            <button type="button" class="btn btn-outline-dark btn-sm" onClick={this.demo} > Demo </button>
          </form>
          </div>
          </div>
          
          </div>
          </div>

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