import React, {Component} from "react";
import './App.css';
import Header from './Header';
export class Home extends Component{
    
    constructor(props){
        
        super(props);
        this.state={
            Homes:[],
            DaraisLoaded: false
          
        };
    }
   
    
    componentDidMount(){
        fetch("http://localhost:64469/api/ProductDetail")
        .then((resp) => resp.json())
        .then((json) => {
            this.setState({Homes:json,
                DaraisLoaded: true
            });
        })
        
    }
   
    
        render(){
    
    const{
        Homes
    }=this.state;
            return(
                <div>
                  <table className="table table-stripe">
                  <thead>
                      <tr>
                          <th> ProductId </th>
                          <th> ProductName</th>
                          <th> ProductPrize 
                              (Per unit)</th>
                          
                          <th>ProductUnit </th>
                          <th>Quantity </th>
                          <th>Buy Item</th>
                          <th>Add to Cart</th>
                      </tr>
                  </thead>
                  <tbody>
                      {Homes.map(i=>
                        <tr key={i.ProductId}>
                            <td>{i.ProductId}</td>
                            <td>{i.ProductName}</td>
                            <td>${i.ProductPrize}</td>
                            
                            <td>{i.ProductUnit}</td>
                            
                            <td>
                            
                             <input type="number" placeholder="0"  value={i.stock}></input>
                             
                               </td>
                            <td> <button type="button"
                               className="btn btn-light mr-1">Buy</button></td>
                            <td>  
                               <button type="button"
                               className="btn btn-light mr-1">
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                               <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                               </svg>
                               </button>
                            </td>
                        </tr>  
                        )}
                        <script src="Script.js"></script>
                        
                  </tbody>
                  </table>
                </div>
            )
                
            
        }
}