import "../styles/NavBar.css"
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

/* Displays a navbar to be rendered to the top of the screen */
const NavBar = () => {
    return (
        <div>
            <Navbar expand="md">
                <NavLink to="/" className="navbar-brand">
                    Snack or Booze
                </NavLink>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/snacks">Snacks</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/drinks">Booze</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/items/new">Add an item</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;
