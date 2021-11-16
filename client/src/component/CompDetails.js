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

        axios.get(`/comp/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });

    }

  render(){
    const {customername,address,contactnumber,invoicenumber,productname,productno,complaintdate,complainttakeby,responseaction}= this.state.post;

    return(
    <div style={{marginTop:'20px'}}>
        <h4>{customername}</h4>
        <hr/>

        <dl className="row">


            <dt className="col-sm-3">Address</dt>
            <dd className="col-sm-9">{address}</dd>

            <dt className="col-sm-3">Contact Number</dt>
            <dd className="col-sm-9">{contactnumber}</dd> 

            <dt className="col-sm-3">Invoice Number</dt>
            <dd className="col-sm-9">{invoicenumber}</dd>

            <dt className="col-sm-3">Product Name</dt>
            <dd className="col-sm-9">{productname}</dd>

            <dt className="col-sm-3">Product No</dt>
            <dd className="col-sm-9">{productno}</dd>

            <dt className="col-sm-3">Complaint Date</dt>
            <dd className="col-sm-9">{complaintdate}</dd>

            <dt className="col-sm-3">Complaint Take By</dt>
            <dd className="col-sm-9">{complainttakeby}</dd>

            <dt className="col-sm-3">Response Action</dt>
            <dd className="col-sm-9">{responseaction}</dd>

            
        </dl>
        
    </div>
    )
  }
}