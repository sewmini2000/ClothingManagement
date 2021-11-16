import React, { Component } from 'react';
import axios from 'axios';

export default class StaffHome extends Component {
constructor(props){
  super(props);

  this.state={
    posts:[]
  };

}

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:8000/staff").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts);
    }


  });
}

onDelete = (id) =>{

  axios.delete(`http://localhost:8000/staff/delete/${id}`).then((res) =>{
    alert("Delete Succesfully");
    this.retrievePosts();
  })

}

filterData(posts,searchKey){

  const result = posts.filter((post) =>
    post.staffid.includes(searchKey) ||
    post.staffid.toLowerCase().includes(searchKey) ||
    post.firstname.includes(searchKey) ||
    post.firstname.toLowerCase().includes(searchKey) ||
    post.lastname.includes(searchKey) ||
    post.lastname.toLowerCase().includes(searchKey) ||
    post.nic.includes(searchKey) ||
    post.nic.toLowerCase().includes(searchKey) ||
    post.date.includes(searchKey) ||
    post.date.toLowerCase().includes(searchKey) ||
    post.contactnumber.includes(searchKey) ||
    post.contactnumber.toLowerCase().includes(searchKey) ||
    post.arrivaltime.includes(searchKey) ||
    post.arrivaltime.toLowerCase().includes(searchKey) ||
    post.workinghours.includes(searchKey) ||
    post.workinghours.toLowerCase().includes(searchKey) 
    
  )

  this.setState({posts:result})

}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("/staff/").then(res =>{
    if(res.data.success){
     
      this.filterData(res.data.existingPosts,searchKey)
    }
  });

}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
          <center><h4>Staff Attendence Details</h4></center>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleSearchArea}>
            </input>
          </div>
        </div>
      
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Staff ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">NIC</th>
              <th scope="col">Date</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Arrival Time</th>
              <th scope="col">Working Hours</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/staff/show/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.staffid}
                    </a>
                </td>
                
                <td>{posts.firstname}</td>
                <td>{posts.lastname}</td>
                <td>{posts.nic}</td>
                <td>{posts.date}</td>
                <td>{posts.contactnumber}</td>
                <td>{posts.arrivaltime}</td>
                <td>{posts.workinghours}</td>
               

                <td>
                  <a className="btn btn-warning" href={`staff/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

        <button className="btn btn-success"><a href="staff/add" style={{textDecoration:'none',color:'white'}}>Add New Staff</a></button>
        
      </div>
    )
  }
}
