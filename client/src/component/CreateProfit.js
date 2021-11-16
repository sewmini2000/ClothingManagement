import React, { Component } from 'react';
import axios from 'axios';


export default class CreateProfit extends Component {

  constructor(props){
    super(props);
    this.state={
      itemname:"",
      date:"",
      quantity:"",
      price:"",
      total:""
      
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

    const {itemname,date,quantity,price,total} = this.state;

    const data ={
      itemname:itemname,
      date:date,
      quantity:quantity,
      price:price,
      total:total
      
    }

    console.log(data)
   

  

    axios.post("http://localhost:8000/profit/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            itemname:"",
            date:"",
            quantity:"",
            price:"",
            total:""

          }
        )
   
  }

})




}


//demo button method
demo =() => { 

  //setState
  this.setState ({
    itemname:"Frock"
  })

  this.setState ({
    date:""
  })

  this.setState ({
    quantity:"4"
  }) 

  this.setState ({
    price:"1000"
  }) 

  this.setState ({
    total:""
  }) 

 


}
     
  render() {
    return (

      <div class="row">
  
      <div class="col-6">
        <br/>
        <br/>
        <br/>
        <br/>
      
        <img src="https://i.gifer.com/7yAb.gif" width="90%" height="78%" />
      </div>
      <div class="col-6">
      <div className="mycard">
      <div className="card" >
        
        <div className="container-fluid">
          <h1 className="h3 mb-3 font-weight-normal">Add New Profit</h1>
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
              &nbsp; Save
            </button>
            <br>
            </br>
            <button type="button" class="btn btn-outline-dark btn-sm" onClick={this.demo} > Demo </button>
          
          
          </form>
</div>
</div>
</div>
</div>

          <footer class="page-footer font-small special-color-dark pt-4" style={{ backgroundColor: '#999999' }} >


<div class="container">


  <ul class="list-unstyled list-inline text-center">
    <li class="list-inline-item">
      <a class="btn-floating btn-fb mx-1">
        <i class="fab fa-facebook-f"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-tw mx-1">
        <i class="fab fa-twitter"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-gplus mx-1">
        <i class="fab fa-google-plus-g"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-li mx-1">
        <i class="fab fa-linkedin-in"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-dribbble mx-1">
        <i class="fab fa-dribbble"> </i>
      </a>
    </li>
  </ul>



</div>


<div class="footer-copyright text-center py-3">© 2021 Copyright:
  <a href="https://mdbootstrap.com/">estiloonline@gmail.com</a>
</div>


</footer>
          
          
        </div>
    )
  }
}