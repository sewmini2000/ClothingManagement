import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import image  from './blue.jpg'

export default class CreatePost extends Component {

  constructor(props){
    super(props);
    this.state={
      branchid:"",
      branchname:"",
      email:"",
      province:"",
      city:"",
      contactnumber:"",
      industry:"",
      establishdate:"",
      typeofcompany:""
      
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

    const {branchid,branchname,email,province,city,contactnumber,industry,establishdate,typeofcompany} = this.state;

    const data ={
      branchid:branchid,
      branchname:branchname,
      email:email,
      province:province,
      city:city,
      contactnumber:contactnumber,
      industry:industry,
      establishdate:establishdate,
      typeofcompany:typeofcompany
      
    }

    
    console.log(data)
     //const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
     const con = /^[0-9\b]+$/;
     const cv =  /^[0-9\b]+$/;
 
     if((!con.test(String(branchid))) || (branchid.length != 6))
     {swal("Invalid Branch ID !", "Branch ID should be valid pattern", "error");}
     else if (!email.includes("@") || !email.includes("."))
     {
      {swal("Invalid Email Address !", "Email Address should be valid pattern", "error");}
     }
     else{
       swal({
         title: "Are you sure?",
         text: ` Branch ID: ${this.state.branchid}| Contact Number: ${this.state.contactnumber}}` ,
         icon: "info",
         buttons: true,
         dangerMode: true,
       })
       .then((willDelete) => {
         if (willDelete) {
    axios.post("/post/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            branchid:"",
            branchname:"",
            email:"",
            province:"",
            city:"",
            contactnumber:"",
            industry:"",
            establishdate:"",
            typeofcompany:""


          }
        )
       // swal("Branch Added Successfully!",+ `${this.state.status}`, "success");

      }

    })

    swal("Branch Added Successfully!", {

      icon: "success",

    });

  } else {

    swal("Your Branch is not completed!");

  }

});
} 

}  


//demo button method
demo =() => { 

  //setState
  this.setState ({
    branchid:"000006"
  })

  this.setState ({
    branchname:"Maharagama"
  })

  this.setState ({
    email:"estilo06@gmail.com"
  }) 

  this.setState ({
    province:"Western"
  }) 

  this.setState ({
    city:"Colombo"
  }) 

  this.setState ({
    contactnumber:"0112345678"
  }) 

  this.setState ({
    industry:"Clothing"
  }) 

  this.setState ({
    establishdate:"09/08/2021"
  }) 

  
  this.setState ({
    typeofcompany:"Private"
  }) 

 

}

  render() {
    return (
      
              
        <div >
          <Row>
          <Col md={6}>

          {/* <Image src="/blue" fluid /> */}
          <img src ={image} alt = "blue" style={{"width":"215%"}}/>
         
       
          </Col>
          <Col md={6} className="bg-light mt-2 mb-n2">
          <b> <h1 className="h3 mb-3 font-weight-normal">Add New Branch</h1></b>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Branch ID</label>
              <input type="text" 
              className="form-control"
              name="branchid"
              placeholder="Enter ID"
              value={this.state.branchid}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Branch Name</label>
              <select className="form-control"    placeholder=" Select" name="branchname" onChange={this.handleInputChange}>
              <option value="select">--Select--</option>
                <option value="colombo">Colombo</option>
                <option value="ampara">Ampara</option>
                <option value="kandy">Kandy</option>
                <option value="nugegoda">Nugegoda</option>
                <option value="piliyandala">Piliyandala</option>
                <option value="maharagama">Maharagama</option>
                </select>
              {/* <input type="text" */}
              {/* className="form-control"
              name="branchname"
              placeholder="Enter Name"
              value={this.state.branchname}
              onChange={this.handleInputChange}/> */}
            </div>


            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Email</label>
              <input type="text"
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
              placeholder="province"
              value={this.state.province}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>City</label>
              <input type="text"
              className="form-control"
              name="city"
              placeholder="city"
              value={this.state.city}
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
              <label style={{marginBottom:'5px'}}>Industry</label>
              <input type="text"
              className="form-control"
              name="industry"
              placeholder="Industry Type"
              value={this.state.industry}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Establish Date</label>
              <input type="date"
              className="form-control"
              name="establishdate"
              placeholder="Enter Date"
              value={this.state.establishdate}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Type Of Company</label>
              <select className="form-control"    name="typeofcompany" onChange={this.handleInputChange}>
              <option value="select">--Select--</option>
                <option value="private">Private</option>
                <option value="public">Public</option>
            
                </select>
              {/* <input type="text"
              className="form-control"
              name="typeofcompany"
              placeholder="Enter Type"
              value={this.state.typeofcompany}
              onChange={this.handleInputChange}/> */}
            </div>
      


            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>

            <br/>
            <br/>
          
          

            <button type="button" class="btn btn-outline-dark btn-sm" onClick={this.demo} > Demo </button>

          
          </form>
          </Col>
          </Row>
         
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