import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
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
  axios.get("/posts").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts);
    }


  });
}

onDelete = (id) =>{

  axios.delete(`/post/delete/${id}`).then((res) =>{
    alert("Delete Succesfully");
    this.retrievePosts();
  })

}

filterData(posts,searchKey){

  const result = posts.filter((post) =>
    post.branchid.includes(searchKey) ||
    post.branchid.toLowerCase().includes(searchKey) ||
    post.branchname.includes(searchKey) ||
    post.branchname.toLowerCase().includes(searchKey) ||
    post.email.includes(searchKey) ||
    post.email.toLowerCase().includes(searchKey) ||
    post.province.includes(searchKey) ||
    post.province.toLowerCase().includes(searchKey) ||
    post.city.includes(searchKey) ||
    post.city.toLowerCase().includes(searchKey) ||
    post.contactnumber.includes(searchKey) ||
    post.contactnumber.toLowerCase().includes(searchKey) ||
    post.industry.includes(searchKey) ||
    post.industry.toLowerCase().includes(searchKey) ||
    post.establishdate.includes(searchKey) ||
    post.establishdate.toLowerCase().includes(searchKey) ||
    post.typeofcompany.includes(searchKey) ||
    post.typeofcompany.toLowerCase().includes(searchKey)
  )

  this.setState({posts:result})

}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("/posts").then(res =>{
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
          <center><h4>Branch Management Details</h4></center>
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
              <th scope="col">Branch ID</th>
              <th scope="col">Branch Name</th>
              <th scope="col">Email</th>
              <th scope="col">Province</th>
              <th scope="col">City</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Industry</th>
              <th scope="col">Establish Date</th>
              <th scope="col">Type Of Company</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.branchid}
                    </a>
                </td>
                <td>{posts.branchname}</td>
                <td>{posts.email}</td>
                <td>{posts.province}</td>
                <td>{posts.city}</td>
                <td>{posts.contactnumber}</td>
                <td>{posts.industry}</td>
                <td>{posts.establishdate}</td>
                <td>{posts.typeofcompany}</td>
               

                <td>
                  <a className="btn btn-warning" href={`/edit/${posts._id}`}>
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

        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add New Branch</a></button>
        
      </div>
    )
  }
}
