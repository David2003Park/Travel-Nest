import React from 'react'
import '../styles/home.css'

import { Container, Row,Col } from 'reactstrap';
import heroIgm from '../assets/images/hero-img01.jpg'
import heroIgm02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subitile from './../shared/Subtitle';

const Home = () => {
  return <>
  {/* hero section */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center ">
                <Subtitle Subtitle={'Know before you go'}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>Traveling opens the gateway to creating <span
              className="highlight"> memories</span></h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id laudantium eveniet praesentium magnam! Laudantium sapiente praesentium iste inventore similique hic, natus dolores velit magni facere facilis harum et maxime quas?</p>
          </div>
        </Col>

        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroIgm} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box">
            <video src={heroVideo} alt="" controls/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroIgm02} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
    {/* hero section ends */}
  
  </>
}

export default Home