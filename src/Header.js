import{Navbar ,Nav, NavDropdown} from 'react-bootstrap'
import {Link ,useHistory} from 'react-router-dom'
function Header(){
    let user = JSON.parse(localStorage.getItem('user-info'))
    const history=useHistory();
    function logOut()
    {
        localStorage.clear();
        history.push('/SignUp')
    }
    return(
        <div>
            <Navbar bg="Light" varient="dark">
                <Navbar.Brand href="#home">Are You Sure you want to Logout?......</Navbar.Brand>
                <Nav className='mr-auto nav_bar_wrapper'>
                    {
                        localStorage.getItem('user-info')?
                        <>
                        
                        
                        </>
                        :
                        <>
                       
                        </>
                    }
                </Nav>
              
                <nav>
                   <NavDropdown title={user && user.name}>
                  <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>

                   </NavDropdown>

                </nav>
               
            </Navbar>
        </div>
    )
}

export default Header