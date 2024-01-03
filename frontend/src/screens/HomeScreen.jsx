import { Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <section className='shop' id='shop'>
            <Container>
              <Row>
                <h1 className='mb-5'>Latest Products</h1>
                {products.map(product => (
                  <Col key={product._id} sm={12} md={6} xl={4} className='mb-3'>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        </>
      )}
    </>
  );
};

export default HomeScreen;
