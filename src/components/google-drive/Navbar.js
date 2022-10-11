import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="sm" className="d-flex justify-content-between">
      <Navbar.Brand as={Link} to="/" className="text-primary">
        Dropbox
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user" className="text-primary">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
