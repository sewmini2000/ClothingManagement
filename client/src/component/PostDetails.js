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

        axios.get(`/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });

    }

  render(){
    const {branchid,branchname,email,province,city,contactnumber,industry,establishdate,typeofcompany}= this.state.post;

    return(
    <div style={{marginTop:'20px'}}>
        <h4>{branchid}</h4>
        <hr/>

        <dl className="row">
            <dt className="col-sm-3">Branch ID</dt>
            <dd className="col-sm-9">{branchid}</dd>

            <dt className="col-sm-3">Branch Name</dt>
            <dd className="col-sm-9">{branchname}</dd> 

            <dt className="col-sm-3">Email</dt>
            <dd className="col-sm-9">{email}</dd>

            <dt className="col-sm-3">Province</dt>
            <dd className="col-sm-9">{province}</dd>

            <dt className="col-sm-3">City</dt>
            <dd className="col-sm-9">{city}</dd>

            <dt className="col-sm-3">Contact Number</dt>
            <dd className="col-sm-9">{contactnumber}</dd>

            <dt className="col-sm-3">Industry</dt>
            <dd className="col-sm-9">{industry}</dd>

            <dt className="col-sm-3">Establish Date</dt>
            <dd className="col-sm-9">{establishdate}</dd>

            <dt className="col-sm-3">Type Of Company</dt>
            <dd className="col-sm-9">{typeofcompany}</dd>

            
        </dl>
        
    </div>
    )
  }
}

