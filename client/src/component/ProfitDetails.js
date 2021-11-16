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

        axios.get(`/profit/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });

    }

  render(){
    const {itemname,date,quantity,price}= this.state.post;

    return(
    <div style={{marginTop:'20px'}}>
        <h4>{itemname}</h4>
        <hr/>

        <dl className="row">
            <dt className="col-sm-3">Date</dt>
            <dd className="col-sm-9">{date}</dd>

            <dt className="col-sm-3">Quantity</dt>
            <dd className="col-sm-9">{quantity}</dd> 

            <dt className="col-sm-3">Price</dt>
            <dd className="col-sm-9">{price}</dd>

           

            
        </dl>
        
    </div>
    )
  }
}

