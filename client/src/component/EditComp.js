import React, { Component } from 'react';
import axios from 'axios';

export default class EditComp extends Component {


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
    const id = this.props.match.params.id;
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

    console.log(data)

    axios.put(`http://localhost:8000/comp/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Complaint Updated Successfully")
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
      }
    })


  }


  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/comp/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          customername:res.data.post.customername,
          address:res.data.post.address,
          contactnumber:res.data.post.contactnumber,
          invoicenumber:res.data.post.invoicenumber,
          productname:res.data.post.productname,
          productno:res.data.post.productno,
          complaintdate:res.data.post.complaintdate,
          complainttakeby:res.data.post.complainttakeby,
          responseaction:res.data.post.responseaction

        });

        console.log(this.state.pos0t);
      }

    });

  }

  render() {
    return (
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Add New Complaint</h1>
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
              value={this.state.addreess}
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
              <label style={{marginBottom:'5px'}}>City</label>
              <input type="text"
              className="form-control"
              name="city"
              placeholder="city"
              value={this.state.city}
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
              &nbsp; Update
            </button>
            <br/>
            <br/>
        
            <button className="btn btn-success"><a href="/addd" style={{textDecoration:'none',color:'white'}}>Add New Complaint</a></button>
          </form>
          
        </div>
    )
  }
}