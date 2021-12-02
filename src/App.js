import { Navbar,Nav,NavDropdown,Container } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import {useState} from "react";

import {Link, Route, Routes, Switch} from "react-router-dom";

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

            <Routes>
                <Route path="/" element={<div>Hello World</div>}>

                </Route>
                <Route path="/" element={<div>Hello World</div>}>

                </Route>
            </Routes>

            <div className="container">
                <div className="row">

                        {
                            shoes.map((el,idx)=>{
                                return (
                                    <Card el={el} idx={idx}></Card>
                                )
                            })
                        }

                </div>
            </div>
        </div>
    )
}

function Card(props){
    return(
        <div className="col-md-4">
            <img src={`https://codingapple1.github.io/shop/shoes${props.idx+1}.jpg`} width="100%"/>
            <h4>{props.el.title}</h4>
            <p>{props.el.content}</p>
        </div>
    )
}

export default App;
