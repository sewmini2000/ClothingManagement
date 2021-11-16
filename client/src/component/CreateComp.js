import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import image  from './blue.jpg'

export default class CreateComp extends Component {

  constructor(props){
    super(props);
    this.state={
      customername:"",
      address:"",
      contactnumber:"",
      invoicenumber:"",
      productname:"",
      productno:"",
      complaintdate:"",
      complainttakeby:"",
      responseaction:""
      
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

    const {customername,address,contactnumber,invoicenumber,productname,productno,complaintdate,complainttakeby,responseaction} = this.state;

    const data ={
      customername:customername,
      address:address,
      contactnumber:contactnumber,
      invoicenumber:invoicenumber,
      productname:productname,
      productno:productno,
      complaintdate:complaintdate,
      complainttakeby:complainttakeby,
      responseaction:responseaction
    }

   //const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
   const con = /^[0-9\b]+$/;
   const cv =  /^[0-9\b]+$/;

   if((!con.test(String(contactnumber))) || (contactnumber.length != 10))
   {swal("Invalid Contact Number !", "Vontact Number should be valid pattern", "error");}

   else{
     swal({
       title: "Are you sure?",
       text: `Customer Name: ${this.state.customername}| Contact Number: ${this.state.contactnumber}}` ,
       icon: "info",
       buttons: true,
       dangerMode: true,
     })
     .then((willDelete) => {
       if (willDelete) {

    axios.post("http://localhost:8000/comp/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            customername:"",
            address:"",
            contactnumber:"",
            invoicenumber:"",
            productname:"",
            productno:"",
            complaintdate:"",
            complainttakeby:"",
            responseaction:""

          }
        )
    // swal("Complaint Added Successfully!",+ `${this.state.status}`, "success");

  }

})

swal("Complaint Added Successfully!", {

  icon: "success",

});

} else {

swal("Your Complaint is not completed!");

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
    contactnumber:"0774567654"
  }) 

  this.setState ({
    invoicenumber:"001#"
  }) 

  this.setState ({
    productname:"T-Shirt"
  }) 

  this.setState ({
    productno:"78"
  }) 

  this.setState ({
    complaintdate:"02/03/2021"
  }) 

  this.setState ({
    complainttakeby:"Kasuni"
  }) 

  
  this.setState ({
    responseaction:"Accepted"
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
    
      <img src="https://i.gifer.com/Agmh.gif" width="90%" height="78%" />
    </div>
    <div class="col-6">
    <div className="mycard">
    <div className="card" >
      
  

        <div className="container-fluid">
        
          <h1 className="h3 mb-3 font-weight-normal">Customer Complaint Details</h1>
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
              <label style={{marginBottom:'5px'}}>Contact Number</label>
              <input type="text"
              className="form-control"
              name="contactnumber"
              placeholder="0xx-xxxxxxx"
              value={this.state.contactnumber}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Invoice Number</label>
              <input type="text"
              className="form-control"
              name="invoicenumber"
              placeholder="Enter Number"
              value={this.state.invoicenumber}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Product Name</label>
              <input type="text"
              className="form-control"
              name="productname"
              placeholder="Enter Name"
              value={this.state.productname}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Product No</label>
              <input type="text"
              className="form-control"
              name="productno"
              placeholder="Enter Number"
              value={this.state.productno}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Complaint Date</label>
              <input type="date"
              className="form-control"
              name="complaintdate"
              placeholder="Enter Date"
              value={this.state.complaintdate}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Complaint Take By</label>
              <input type="text"
              className="form-control"
              name="complainttakeby"
              placeholder="Enter Here"
              value={this.state.complainttakeby}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Response Action</label>
              <input type="text"
              className="form-control"
              name="responseaction"
              placeholder="Enter Here"
              value={this.state.responseaction}
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