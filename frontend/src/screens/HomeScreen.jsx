import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
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
