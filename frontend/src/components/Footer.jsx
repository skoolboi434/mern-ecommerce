import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section className='contact' id='contact'>
        <div className='main-contact'>
          <div className='contact-content'>
            <li>
              <a href='#shop'>Shop</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </div>

          <div className='contact-content'>
            <li>
              <a href='#'>Shipping &amp; Returns</a>
            </li>
            <li>
              <a href='#'>Store Policy</a>
            </li>
            <li>
              <a href='#'>Payment Methods</a>
            </li>
          </div>

          <div className='contact-content'>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a href='#'>Tel: 123-456-7890</a>
            </li>
          </div>

          <div className='contact-content'>
            <li>
              <a href='#'>Facebook</a>
            </li>
            <li>
              <a href='#'>Instagram</a>
            </li>
          </div>
        </div>
      </section>

      <div className='last'>
        <p>&copy; {currentYear} MERN - Skateshop</p>
      </div>
    </>
  );
};

export default Footer;
