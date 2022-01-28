import React, {Component} from "react";


export class MyOrder extends Component{
constructor(props){
    super(props);
    this.state={
        myorders:[],
        DaraisLoaded: false
      
    };
}


componentDidMount(){
    fetch("http://localhost:64469/api/MyOrder")
    .then((resp) => resp.json())
    .then((json) => {
        this.setState({myorders:json,
            DaraisLoaded: true
        });
    })
    
}
    render(){

const{
   myorders
}=this.state;
        return(
            <div>
              <table className="table table-stripe">
              <thead>
                  <tr>
                  <th>OrderdetailId</th>
                      <th>CustomerId</th>
                      <th>Quantity</th>
                      <th>ProductPrize</th>
                      <th>Delete Order</th>
                  </tr>  
              </thead>
              <tbody>
                  {myorders.map(i=>
                    <tr key={i.OrderdetailId}>
                        <td>{i.CustomerId}</td>
                        <td>{i.OrderdetailId}</td>
                        <td>{i.Quantity}</td>
                        <td>{i.ProductPrize}</td>
                        <td>  
                           <button type="button"
                           className="btn btn-light mr-1">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                           <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                           </svg>
                           </button>
                        </td>
                    </tr>  
                    )}
              </tbody>
              </table>
            </div>
        )
            
        
    }
}