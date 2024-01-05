import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';

const Header = () => {
  const { cartItems } = useSelector(state => state.cart);

  return (
    <>
      <Navbar className='main-header' bg='light' variant='light' expand='md' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='logo'>Skateshop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='#shop'>Shop</Nav.Link>
              <Nav.Link href='#about'>About</Nav.Link>
              <Nav.Link href='#contact'>Contact</Nav.Link>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <FaShoppingCart /> Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
