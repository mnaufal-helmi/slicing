import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Home, Tentang, FAQ, Produk, Events, Partnership } from '..pages';

const NavigationBar = () => {
  const navigate = useNavigate();

  function toTentang() {
    navigate('/Tentang');
  }
  function toFAQ() {
    navigate('/FAQ');
  }
  function toProduk() {
    navigate('/Produk');
  }
  function toEvents() {
    navigate('/Events');
  }
  function toPartnership() {
    navigate('/Partnership');
  }

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
            <Nav.Link href="FAQ" onClick={toFAQ}>
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
