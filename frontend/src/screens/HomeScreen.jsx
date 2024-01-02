import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <section className='shop' id='shop'>
        <Container>
          <Row>
            {products.map(product => (
              <Col key={product._id} sm={12} md={6} xl={4} className='mb-3'>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeScreen;
