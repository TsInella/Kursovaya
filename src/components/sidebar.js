import react, {Component} from 'react'
import { FormControl, Navbar, NavbarBrand, NavLink, Container, Form, Button} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import logo from './logo100.png'

export default class Sidebar extends Component{
    render() {
        return (
            <div>
               <Navbar collapseOnSelect expand="md" bg="dark" variant="light">
                <Container>
                    <NavbarBrand >
                        <img
                        src={logo}
                        height='30'
                        width='30'
                        className="d-inline-block align-left"
                        alt = "Logo"
                        />

                    </NavbarBrand>
                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id ="responsive-navbar-nav"> 
                    <Nav className='mr-auto'>
                        <NavLink href="/rec"> Reccomended </NavLink>
                        <NavLink href="/prof"> Profile </NavLink>
                    </Nav>
                    <Form inline>
                        <FormControl
                        type="text"
                        placeholder="search"
                        className="mr-sm-2">
                        </FormControl>
                        <Button variant="outline-info"> Search</Button>
                    </Form>
                    </NavbarCollapse>
                </Container>
               </Navbar>
            </div>
        )

    }
}