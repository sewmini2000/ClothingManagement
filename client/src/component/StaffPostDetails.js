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

        axios.get(`/staff/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });

    }

  render(){
    const {staffid,firstname,lastname,nic,date,contactnumber,arrivaltime,workinghours}= this.state.post;

    return(
    <div style={{marginTop:'20px'}}>
        <h4>{staffid}</h4>
        <hr/>

        <dl className="row">
            <dt className="col-sm-3">Staff ID</dt>
            <dd className="col-sm-9">{staffid}</dd>

            <dt className="col-sm-3">First Name</dt>
            <dd className="col-sm-9">{firstname}</dd> 

            <dt className="col-sm-3">Last Name</dt>
            <dd className="col-sm-9">{lastname}</dd>

            <dt className="col-sm-3">NIC</dt>
            <dd className="col-sm-9">{nic}</dd>

            <dt className="col-sm-3">Date</dt>
            <dd className="col-sm-9">{date}</dd>

            <dt className="col-sm-3">Contact Number</dt>
            <dd className="col-sm-9">{contactnumber}</dd>

            <dt className="col-sm-3">Arrival Time</dt>
            <dd className="col-sm-9">{arrivaltime}</dd>

            <dt className="col-sm-3">Working Hours</dt>
            <dd className="col-sm-9">{workinghours}</dd>

           
            
        </dl>
        
    </div>
    )
  }
}

