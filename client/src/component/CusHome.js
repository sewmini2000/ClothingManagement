import React, { Component } from 'react';
import axios from 'axios';

export default class CusHome extends Component {
constructor(props){
  super(props);

  this.state={
  posts: []
  };

}


componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:8000/customer").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts);
    }


  });
}


onDelete = (id) =>{

  axios.delete(`http://localhost:8000/customer/delete/${id}`).then((res) =>{
    alert("Delete Succesfully");
    this.retrievePosts();
  })

}

filterData(posts,searchKey){

  const result = posts.filter((post) =>
    post.customername.includes(searchKey) ||
    post.customername.toLowerCase().includes(searchKey) ||
    post.address.includes(searchKey) ||
    post.address.toLowerCase().includes(searchKey) ||
    post.email.includes(searchKey) ||
    post.email.toLowerCase().includes(searchKey) ||
    post.province.includes(searchKey) ||
    post.province.toLowerCase().includes(searchKey) ||
    post.city.includes(searchKey) ||
    post.city.toLowerCase().includes(searchKey) ||
    post.phone.includes(searchKey) ||
    post.phone.toLowerCase().includes(searchKey) ||
    post.nic.includes(searchKey) ||
    post.nic.toLowerCase().includes(searchKey) ||
    post.dateofbirth.includes(searchKey) ||
    post.dateofbirth.toLowerCase().includes(searchKey) ||
    post.gender.includes(searchKey) ||
    post.gender.toLowerCase().includes(searchKey) ||
    post.postalcode.includes(searchKey) ||
    post.postalcode.toLowerCase().includes(searchKey) 
  )

  this.setState({posts:result})

}


handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("/customer").then(res =>{
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
         <center><h4>Customer Details</h4></center>
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
      
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Province</th>
              <th scope="col">City</th>
              <th scope="col">Phone Number</th>
              <th scope="col">NIC</th>
              <th scope="col">Date Of Birth</th>
              <th scope="col">Gender</th>
              <th scope="col">Postal Code</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/customer/show/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.customername}
                    </a>
                </td>
                
                <td>{posts.address}</td>
                <td>{posts.email}</td>
                <td>{posts.province}</td>
                <td>{posts.city}</td>
                <td>{posts.phone}</td>
                <td>{posts.nic}</td>
                <td>{posts.dateofbirth}</td>
                <td>{posts.gender}</td>
                <td>{posts.postalcode}</td>
                <td>
                  <a className="btn btn-warning" href={`/customer/edit/${posts._id}`}>
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

        <button className="btn btn-success"><a href="/customer/add" style={{textDecoration:'none',color:'white'}}>Add New Customer</a></button>
        <br/>
        
      </div>
    )
  }
}