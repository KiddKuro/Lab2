// Import necessary components from react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Define and export a functional component called NavigationBar
export default function NavigationBar() {
  return (
    // Navbar component with a primary background and dark theme
    <Navbar bg="primary" data-bs-theme="dark">
      
      {/* Container to keep content aligned and responsive */}
      <Container>
        
        {/* Brand/logo section of the Navbar */}
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        
        {/* Navigation links aligned to the left */}
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/read">Read</Nav.Link>
          <Nav.Link href="/create">Create</Nav.Link> 
        </Nav>

      </Container>
    </Navbar>
  );
}
