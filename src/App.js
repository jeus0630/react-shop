import { Navbar,Nav,NavDropdown,Container } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import {useState} from "react";

function App(){

    let [shoes, shoesFunc] = useState(data);

    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">JewooShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="container">
                <div className="row">

                        {
                            shoes.map((el,idx)=>{
                                return (
                                    <div className="col-md-4" key={idx}>
                                        <img src="https://codingapple1.github.io/shop/shoes{idx}.jpg" width="100%"/>
                                        <h4>상품명</h4>
                                        <p>상품정보</p>
                                    </div>
                                )
                            })
                        }

                </div>
            </div>
        </div>
    )
}

export default App;
