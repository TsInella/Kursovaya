import react, {Component} from 'react'
import { FormControl, Navbar, Nav, NavbarBrand, NavLink, Container, Form, Button} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import logo from './logo100.png'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Sidebar extends Component{
    render() {
        return (
               <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Container>
                    <Navbar.Brand >
                        <img
                        src={logo}
                        height='53'
                        width='75'
                        className="d-inline-block align-top"
                        alt = "Logo"
                        />

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav"  > 
                    <Nav>
                        <NavLink href="/rec"> Reccomended </NavLink>
                        <NavLink href="/prof"> Profile </NavLink>
                    </Nav>
                    <Form inline class="m-auto">
                        <FormControl
                            type="text"
                            placeholder="Search"
                        />
                  </Form>
                    <Button variant="outline-secondary" class="m-auto">Search</Button>
                    </Navbar.Collapse>
                </Container>
               </Navbar>
        )

    }
}