import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">LyricFinder</a>
        </Navbar.Brand>
      </Navbar.Header>
     </Navbar>
  )
}

export default NavBar
