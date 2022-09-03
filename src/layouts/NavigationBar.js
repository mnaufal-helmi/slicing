import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav>
            <Nav.Link href="Tentang" onClick={toTentang}>
              {' '}
              Tentang
            </Nav.Link>
            <Nav.Link href="Produk" onClick={toProduk}>
              {' '}
              Produk
            </Nav.Link>
            <Nav.Link href="Faq" onClick={toFaq}>
              {' '}
              FAQ
            </Nav.Link>
            <Nav.Link href="Events" onClick={toEvents}>
              {' '}
              Events
            </Nav.Link>
            <Nav.Link href="Partnership" onClick={toPartnership}>
              {' '}
              Partnership
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
