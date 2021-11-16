import React, { Component } from 'react';
import axios from 'axios';
import jspdf from "jspdf";
import "jspdf-autotable";

export default class ProfitfHome extends Component {
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
  axios.get("http://localhost:8000/profit").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts);
    }


  });
}

printpdf=()=>{
  const doc = new jspdf();
  const tableColumn = ["Item Name", "Date", "Quantity", "Price"];
  const tableRows = [];

  this.state.posts.map((detail) => {
    const memberDetail = [detail.itemname, detail.date, detail.quantity, detail.price];
    tableRows.push(memberDetail);
  });
  doc.text("Profit Report", 14, 15).setFontSize(12);
  // doc.addImage(Logo, "JPEG", 115, 5, 80, 30);
  doc.autoTable(tableColumn, tableRows, {
    styles: { fontSize: 8 },
    startY: 35,
  });
  doc.save("Profit_Report.pdf");
}

onDelete = (id) =>{

  axios.delete(`http://localhost:8000/profit/delete/${id}`).then((res) =>{
    alert("Delete Succesfully");
    this.retrievePosts();
  })

}

filterData(posts,searchKey){

  const result = posts.filter((post) =>
    post.itemname.includes(searchKey) ||
    post.itemname.toLowerCase().includes(searchKey) ||
    post.date.includes(searchKey) ||
    post.date.toLowerCase().includes(searchKey) ||
    post.quantity.includes(searchKey) ||
    post.quantity.toLowerCase().includes(searchKey) ||
    post.price.includes(searchKey) ||
    post.price.toLowerCase().includes(searchKey) 
   
    
  )

  this.setState({posts:result})

}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("/profit").then(res =>{
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
          <center><h4>Profit Details</h4></center>
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
              <th scope="col">Item Name</th>
              <th scope="col">Date</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/profit/show/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.itemname}
                    </a>
                </td>
                
             
                <td>{posts.date}</td>
                <td>{posts.quantity}</td>
                
                <td>{posts.price}</td>
                <td>{posts.price*posts.quantity}</td>
               

                <td>
                  <a className="btn btn-warning" href={`profit/edit/${posts._id}`}>
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

        <button className="btn btn-success"><a href="profit/add" style={{textDecoration:'none',color:'white'}}>Add New Profit</a></button>
        <button className="btn btn-success" onClick={this.printpdf} style={{marginLeft: '20px'}}>Print</button>
        
      </div>
    )
  }
}
