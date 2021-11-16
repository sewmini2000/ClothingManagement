import React, { Component } from 'react';
import axios from 'axios';

export default class EditProfit extends Component {


  constructor(props){
    super(props);
    this.state={
      itemname:"",
      date:"",
      quantity:"",
      price:""
     
     
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
    const {itemname,date,quantity,price} = this.state;

    const data ={
      itemname:itemname,
      date:date,
      quantity:quantity,
      price:price
  
    }

    console.log(data)

    axios.put(`http://localhost:8000/profit/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Profit Updated Successfully")
        this.setState(
          {
            itemname:"",
            date:"",
            quantity:"",
            price:""
            
        
          }
        )
      }
    })


  }


  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/profit/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          itemname:res.data.post.itemname,
          date:res.data.post.date,
          quantity:res.data.post.quantity,
          price:res.data.post.price
          

        });

        console.log(this.state.post);
      }

    });

  }

  render() {
    return (
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Edit Details</h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}} >Item Name</label>
              <input type="text"
              className="form-control"
              name="itemname"
              placeholder="Enter Name"
              value={this.state.itemname}
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
              <label style={{marginBottom:'5px'}}>Quantity</label>
              <input type="text"
              className="form-control"
              name="quantity"
              placeholder="Enter Here"
              value={this.state.quantity}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Price</label>
              <input type="text"
              className="form-control"
              name="price"
              placeholder="Enter Price"
              value={this.state.price}
              onChange={this.handleInputChange}/>
            </div>

            


            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update
            </button>
            <br/>
            <br/>
        
            <button className="btn btn-success"><a href="/addd" style={{textDecoration:'none',color:'white'}}>Add New Profit</a></button>
          </form>
          
        </div>
    )
  }
}