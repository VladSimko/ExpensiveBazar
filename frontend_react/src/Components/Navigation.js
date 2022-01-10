import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";


const Navigation = () => {

  let user=JSON.parse(localStorage.getItem('user-info'));
  const history = useHistory();

  function logout()
  {
    localStorage.clear();
    history.push("/");
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/" className="WhiteBorder">E-Bazar</Navbar.Brand>
        <Nav className="me-auto navBarLink">
          {
            localStorage.getItem('user-info') ?
              <>
                <Link to="/listpage">Browse</Link>
                <NavDropdown title="Add" id="navStyle">
                   <NavDropdown.Item id="navStyle2" ><Link to="/addcarpage">CAR</Link></NavDropdown.Item> 
                   <NavDropdown.Item id="navStyle2" ><Link to="/addboatpage">BOAT</Link></NavDropdown.Item> 
                   <NavDropdown.Item id="navStyle2" ><Link to="/addhousepage">HOUSE</Link></NavDropdown.Item> 
                </NavDropdown>
                
              </>
              :
              <>
                <Link to="/loginpage">Login</Link>
                <Link to="/registerpage">Register</Link>
              </>
          }
        </Nav>
        {
          localStorage.getItem('user-info') ?
          <NavDropdown title={user && user.name} id="nav-dropdown">
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>
          : null
        }
          
      </Navbar>
    </>

  );
}

export default Navigation;