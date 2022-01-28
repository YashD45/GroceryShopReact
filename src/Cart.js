
import React, {Component} from "react";


export class Cart extends Component{
    
constructor(props){
    
    super(props);
    this.state={
        Carts:[],
        DaraisLoaded: false
      
    };
}


componentDidMount(){
    fetch("http://localhost:64469/api/CartDetail")
    .then((resp) => resp.json())
    .then((json) => {
        this.setState({Carts:json,
            DaraisLoaded: true
        });
    })
    
}
    render(){

const{
    Carts
}=this.state;
        return(
            
            <div>
              <table className="table table-stripe">
              <thead>
                  <tr>
                      <th>cartId</th>
                      <th>ProductId</th>
                      <th>ProductName</th>
                      <th>Quantity </th>
                      <th>Buy item</th>
                      <th>Remove Item</th>
                  </tr>   
              </thead>
              <tbody>
                  {Carts.map(i=>
                    <tr key={i.cartId}>
                        <td>{i.cartId}</td>
                        <td>{i.ProductId}</td>
                        <td>{i.ProductName}</td>
                        <td> 
                        <td> <button type="button"
                               className="btn btn-light mr-1">Buy</button></td> 
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