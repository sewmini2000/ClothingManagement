import React, { Component } from 'react';
import axios from 'axios';

export default class CusEdit extends Component {


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
    const id = this.props.match.params.id;
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

    axios.put(`http://localhost:8000/customer/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Customer Updated Successfully")
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
      }
    })


  }


  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/customer/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          customername:res.data.post.customername,
          address:res.data.post.address,
          email:res.data.post.email,
          province:res.data.post.province,
          city:res.data.post.city,
          phone:res.data.post.phone,
          nic:res.data.post.nic,
          dateofbirth:res.data.post.dateofbirth,
          gender:res.data.post.gender,
          postalcode:res.data.post.postalcode


        });

        console.log(this.state.ost);
      }

    });

  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Add New Customer</h1>
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
          <label style={{marginBottom:'5px'}}>Address</label>
          <input type="text"
          className="form-control"
          name="address"
          placeholder="Enter Address"
          value={this.state.address}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Email</label>
          <input type="text"
          className="form-control"
          name="email"
          placeholder="email@example.com"
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
          <label style={{marginBottom:'5px'}}>City</label>
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
          <label style={{marginBottom:'5px'}}>NIC</label>
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
              <input type="text"
              className="form-control"
              name="gender"
              placeholder="Enter Gender"
              value={this.state.gender}
              onChange={this.handleInputChange}/>
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
              &nbsp; Update
            </button>
            <br/>
            <button className="btn btn-success"><a href="/addd" style={{textDecoration:'none',color:'white'}}>Add New Customer</a></button>
          </form>
          
        </div>
    )
  }
}