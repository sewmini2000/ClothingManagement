import React, { Component } from 'react';
import axios from 'axios';

export default class HomeComp extends Component {
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
  axios.get("http://localhost:8000/comp").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts);
    }


  });
}

onDelete = (id) =>{

  axios.delete(`http://localhost:8000/comp/delete/${id}`).then((res) =>{
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
    post.contactnumber.includes(searchKey) ||
    post.contactnumber.toLowerCase().includes(searchKey) ||
    post.invoicenumber.includes(searchKey) ||
    post.invoicenumber.toLowerCase().includes(searchKey) ||
    post.productname.includes(searchKey) ||
    post.productname.toLowerCase().includes(searchKey) ||
    post.productno.includes(searchKey) ||
    post.productno.toLowerCase().includes(searchKey) ||
    post.complaintdate.includes(searchKey) ||
    post.complaintdate.toLowerCase().includes(searchKey) ||
    post.complainttakeby.includes(searchKey) ||
    post.complainttakeby.toLowerCase().includes(searchKey) ||
    post.responseaction.includes(searchKey) ||
    post.responseaction.toLowerCase().includes(searchKey)
    
  )

  this.setState({posts:result})

}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("/comp").then(res =>{
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
          <center><h4>Complaint Details</h4></center>
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
              <th scope="col">Customer Name</th>
              <th scope="col">Addreess</th>
              <th scope="col">Contact Numbe</th>
              <th scope="col">Invoice Number</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Nor</th>
              <th scope="col">Complaint Date</th>
              <th scope="col">Complaint Take By</th>
              <th scope="col">Response Action</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/comp/show/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.customername}
                    </a>
                </td>
                
                <td>{posts.address}</td>
                <td>{posts.contactnumber}</td>
                <td>{posts.invoicenumber}</td>
                <td>{posts.productname}</td>
                <td>{posts.productno}</td>
                <td>{posts.complaintdate}</td>
                <td>{posts.complainttakeby}</td>
                <td>{posts.responseaction}</td>
               

                <td>
                  <a className="btn btn-warning" href={`comp/edit/${posts._id}`}>
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

        <button className="btn btn-success"><a href="comp/add" style={{textDecoration:'none',color:'white'}}>Add New Complaint</a></button>
        
      </div>
    )
  }
}
