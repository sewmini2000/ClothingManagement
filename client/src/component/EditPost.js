import React, { Component } from 'react';
import axios from 'axios';

export default class EditPost extends Component {


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
    const id = this.props.match.params.id;
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

    axios.put(`/post/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Branch Updated Successfully")
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
            typeofcompany:"",
        
          }
        )
      }
    })


  }


  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          branchid:res.data.post.branchid,
          branchname:res.data.post.branchname,
          email:res.data.post.email,
          province:res.data.post.province,
          city:res.data.post.city,
          contactnumber:res.data.post.contactnumber,
          industry:res.data.post.industry,
          establishdate:res.data.post.establishdate,
          typeofcompany:res.data.post.typeofcompany

        });

        console.log(this.state.post);
      }

    });

  }

  render() {
    return (
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Edit Branch</h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}} >Branch ID</label>
              <input type="text"
              className="form-control"
              name="branchid"
              placeholder="Enter ID"
              value={this.state.branchid}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Branch Name</label>
              <input type="text"
              className="form-control"
              name="branchname"
              placeholder="Enter Name"
              value={this.state.branchname}
              onChange={this.handleInputChange}/>
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
              placeholder="Enter Number"
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
              <input type="text"
              className="form-control"
              name="typeofcompany"
              placeholder="Enter Type"
              value={this.state.typeofcompany}
              onChange={this.handleInputChange}/>
            </div>


            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update
            </button>
            <br/>
            <br/>
        
            <button className="btn btn-success"><a href="CreatePost" style={{textDecoration:'none',color:'white'}}>Add New Branch</a></button>
          </form>
          
        </div>
    )
  }
}