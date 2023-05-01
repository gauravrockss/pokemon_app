import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import {
    AiFillFacebook,
    AiFillYoutube,
    AiOutlineTwitter,
} from 'react-icons/ai';
import Image from './Image';
const Footer = () => {
    return (
        <>
            <div
                className='footer'
                style={{ paddingTop: '60px', background: '#0F171F' }}>
                <Container>
                    <Row
                        className='d-flex flex-wrap  mt-5 px-lg-0 px-4'
                        style={{ whiteSpace: 'nowrap' }}>
                        <Col lg={2} sm={12} className='mb-lg-0 mb-5 logo'>
                            <h5 className='text-white mb-5 '>
                                <Image name='logo.png' />
                                Cyberspatial
                            </h5>

                            <h5 className='text-white text-center'>
                                Level Up.
                            </h5>
                            <div className='text-center'>
                                <h6>
                                    Making Cybersecurity <br /> accessible for
                                    everyone
                                </h6>
                            </div>
                        </Col>

                        <Col className='ms-lg-5 ms-1'>
                            <h6 className='pb-2'>OVERVIEW</h6>
                            <p>
                                <a href=''>VIDEOS</a>
                            </p>
                            <p>
                                <a href=''>INTERVIEW</a>
                            </p>
                            <p>
                                <a href=''>ARTICLES</a>
                            </p>
                        </Col>
                        <Col className='mb-lg-0 mb-4'>
                            <h6 className='pb-2'>EDUCATION</h6>
                            <p>
                                <a href=''>CORE SKILL</a>
                            </p>
                            <p>
                                <a href=''>BLUE TEAM</a>
                            </p>
                            <p>
                                <a href=''>RED TEAM</a>
                            </p>
                            <p>
                                <a href=''>SPECIAL TOPICS</a>
                            </p>
                        </Col>
                        <Col>
                            <h6 className='pb-2'>DISCOVER</h6>
                            <p>
                                <a href=''>PROJECTS</a>
                            </p>
                            <p>
                                <a href=''>PEOPLE</a>
                            </p>
                            <p>
                                <a href=''>RESOURCES</a>
                            </p>
                            <p>
                                <a href=''>GEAR</a>
                            </p>
                        </Col>
                        <Col>
                            <h6 className='pb-2'>LEARN </h6>
                            <p>
                                <a href=''>JUNIOR</a>
                            </p>
                            <p>
                                <a href=''>SENIOR</a>
                            </p>
                            <p>
                                <a href=''>MASTER</a>
                            </p>
                        </Col>
                        <Col>
                            <h6 className='pb-2'>CONNECT</h6>
                            <p>
                                <a href=''>JOIN</a>
                            </p>
                            <p>
                                <a href=''>COLLABORATE</a>
                            </p>
                            <p>
                                <a href=''>ABOUT US</a>
                            </p>
                        </Col>
                    </Row>
                    <Row className='d-flex   mt-5 align-items-center'>
                        <Col lg={5}>
                            <h6>Copyright @ 2012-2020 The Cyberspatial</h6>
                        </Col>
                        <Col>
                            {' '}
                            <h6>Terms & Conditions</h6>{' '}
                        </Col>
                        <Col>
                            {' '}
                            <h6>Privacy policy</h6>
                        </Col>

                        <Col className='text-white d-flex justify-content-center align-items-center  mb-4'>
                            <a href='' className=' pe-1'>
                                <BsInstagram size={25} />
                            </a>{' '}
                            <a href='' className=' pe-1'>
                                <AiFillFacebook size={28} />
                            </a>{' '}
                            <a href='' className=' pe-1'>
                                <AiFillYoutube size={35} />
                            </a>{' '}
                            <a href='' className=' pe-1'>
                                <AiOutlineTwitter size={35} />
                            </a>{' '}
                            <a href='' className=''>
                                <BsWhatsapp size={30} />
                            </a>{' '}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Footer;
