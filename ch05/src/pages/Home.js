import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/index_1.png';
import img2 from '../img/index_2.png';
import img3 from '../img/index_3.png';
const footerStyle = {
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
    height:'200px',
    padding: '20px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%'
};
const Home = () => {
  return (
    <>
    
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        {/* <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />
      <Carousel.Caption>
        {/* <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />
      <Carousel.Caption>
        {/* <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  
  <div>
  <footer style={footerStyle}>
          <p>footer</p>
      </footer>
</div>
 
</>
  )
}

export default Home