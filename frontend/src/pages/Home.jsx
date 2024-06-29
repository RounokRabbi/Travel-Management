import React from 'react';
import '../styles/home.css'
import { Container, Row,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg2 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle';

import SearchBar from "../shared/SearchBar"
const Home = () =>
    { 
        return <>

{/* =========== Hero Section Start =========== */}
        <section>
            <Container>
                <Row>
                    <Col lg ='6'>
                    <div className="hero_content">
                        <div className="hero_subtitle d-flex align-items-center ">
                            <Subtitle subtitle = {'Know Before You Go'}/>
                            <img src = {worldImg} alt = ""/>
                        </div>
                        <h1>Travelling opens the floor for creating <span className='highlight'> memories</span>
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam modi vero impedit atque, recusandae, officiis quia distinctio inventore ullam, quos exercitationem. Maiores quo unde impedit natus? Itaque eum asperiores quia.
                        </p>
                    </div>
                    </Col>

                    <Col lg = '2'>
                    <div className='hero_img-box'>
                        <img src = {heroImg} alt = "" />

                    </div>
                    </Col>
                    <Col lg = '2'>
                    <div className='hero_img-box mt-4'>
                        <video src = {heroVideo} alt = "" controls/>

                    </div>
                    </Col>
                    <Col lg = '2'>
                    <div className='hero_img-box mt-5'>
                        <img src = {heroImg2} alt = "" />

                    </div>
                    </Col>

                    <SearchBar/>
                </Row>
            </Container>
        </section>
        {/* =========== Hero Section Start =========== */}

        </>
    };

    export default Home;