import React, { Component } from 'react';
import axios from 'axios';

export default class EditStaff extends Component {


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
    const id = this.props.match.params.id;
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

    axios.put(`http://localhost:8000/staff/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Staff Updated Successfully")
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
      }
    })


  }


  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/staff/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          staffid:res.data.post.staffid,
          firstname:res.data.post.firstname,
          lastname:res.data.post.lastname,
          nic:res.data.post.nic,
          date:res.data.post.date,
          contactnumber:res.data.post.contactnumber,
          arrivaltime:res.data.post.arrivaltime,
          workinghours:res.data.post.workinghours
          
        });

        console.log(this.state.post);
      }

    });

  }

  render() {
    return (
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Edit Staff</h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}} >Staff ID</label>
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
              &nbsp; Update
            </button>
            <br/>
            <br/>
        
            <button className="btn btn-success"><a href="/addd" style={{textDecoration:'none',color:'white'}}>Add New Staff</a></button>
          </form>
          
        </div>
    )
  }
}