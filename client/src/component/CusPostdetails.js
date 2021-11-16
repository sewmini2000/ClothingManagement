import react, {Component} from 'react';
import axios from 'axios';


export default class App extends Component {
    constructor(props){
        super(props);
        
        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/customer/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });

    }

  render(){
    const {customername,address,email,province,city,phone,nic,dateofbirth,gender,postalcode}= this.state.post;

    return(
    <div style={{marginTop:'20px'}}>
        <h4>{customername}</h4>
        <hr/>

        <dl className="row">


            <dt className="col-sm-3">Address</dt>
            <dd className="col-sm-9">{address}</dd>

            <dt className="col-sm-3">Email</dt>
            <dd className="col-sm-9">{email}</dd> 

            <dt className="col-sm-3">Province</dt>
            <dd className="col-sm-9">{province}</dd>

            <dt className="col-sm-3">City</dt>
            <dd className="col-sm-9">{city}</dd>

            <dt className="col-sm-3">Phone Number</dt>
            <dd className="col-sm-9">{phone}</dd>

            <dt className="col-sm-3">NIC</dt>
            <dd className="col-sm-9">{nic}</dd>

            <dt className="col-sm-3">Date Of Birth</dt>
            <dd className="col-sm-9">{dateofbirth}</dd>

            <dt className="col-sm-3">Gender</dt>
            <dd className="col-sm-9">{gender}</dd>

            <dt className="col-sm-3">Postal Code</dt>
            <dd className="col-sm-9">{postalcode}</dd>

            
        </dl>
        
    </div>
    )
  }
}