import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ClientCard from './../Component/ClientCard';
import Sidebar from './../Component/Sidebar';

import details from './../Services/details';
const Main = () => {
    return (
        <>
            <section>
                <div className='background-img'>
                    <div className='hero text-center d-flex flex-column justify-content-center  p-lg-0 p-5'>
                        <div
                            style={{ maxWidth: '800px' }}
                            className='m-auto pt-5'>
                            <h1
                                style={{
                                    fontSize: 'clamp(30px,5vw,45px)',
                                    color: 'white',
                                    paddingTop: '50px',
                                }}>
                                PEOPLE IN CYBER SECURITY
                            </h1>
                        </div>
                        <div style={{ maxWidth: '500px' }} className='m-auto'>
                            <p
                                style={{
                                    fontSize: 'clamp(12px,5vw,13px)',
                                    color: 'white',
                                }}>
                                this page is a gallery of professional people.
                                this was using CMS filter on click invite me on
                                1-1 project to get started this page is a
                                gallery of professional people.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5' style={{ background: '#101820' }}>
                <Container>
                    <Sidebar className='d-none d-sm-block' />
                    <Row>
                        <Row>
                            <Col lg={3}>
                                <div className='filter p-3 d-none d-lg-block'>
                                    <h6 className='text-white mb-4 title'>
                                        Filter by
                                    </h6>

                                    <div
                                        style={{
                                            lineHeight: '1.6',
                                        }}>
                                        <h5
                                            className='mb-3'
                                            style={{ color: '#18E7CF' }}>
                                            CORE SKILLS
                                        </h5>
                                        <div className='b1 my-3'></div>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>
                                                SCRIPTING & AUTOMATION{' '}
                                            </a>{' '}
                                        </p>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>
                                                DIGITAL SECURITY
                                            </a>{' '}
                                        </p>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>
                                                SYSTEM ADMINSTRATION{' '}
                                            </a>{' '}
                                        </p>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>
                                                ARCHITECTURE
                                            </a>{' '}
                                        </p>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>NETWORKING </a>{' '}
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            lineHeight: '1.6',
                                        }}>
                                        <h5
                                            className='mb-3'
                                            style={{ color: '#00a3ff' }}>
                                            BLUE TEAM
                                        </h5>
                                        <div
                                            className='b2 my-3'
                                            style={{
                                                color: '#18E7CF',
                                            }}></div>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>
                                                SECURITY MONITORING{' '}
                                            </a>{' '}
                                        </p>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>
                                                INCIDENT RESPONCE
                                            </a>{' '}
                                        </p>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>
                                                THREAT INTELLIGENCE{' '}
                                            </a>{' '}
                                        </p>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>
                                                DIGITAL INTELLIGENCE
                                            </a>{' '}
                                        </p>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>
                                                COMLIANCE & RISK{' '}
                                            </a>{' '}
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            lineHeight: '1.6',
                                        }}>
                                        <h5
                                            className='mb-3'
                                            style={{ color: '#ff644e' }}>
                                            RED TEAM
                                        </h5>
                                        <div className='b3 my-3'></div>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>
                                                SECURITY MONITORING{' '}
                                            </a>{' '}
                                        </p>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>
                                                INCIDENT RESPONCE
                                            </a>{' '}
                                        </p>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>
                                                THREAT INTELLIGENCE{' '}
                                            </a>{' '}
                                        </p>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>
                                                DIGITAL INTELLIGENCE
                                            </a>{' '}
                                        </p>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>NETWORKING </a>{' '}
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            lineHeight: '1.6',
                                        }}>
                                        <h5
                                            className='mb-3'
                                            style={{ color: '#efbc40' }}>
                                            SPECIAL
                                        </h5>
                                        <div className='b4 my-3'></div>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>
                                                OSINT & INVESTIGATION{' '}
                                            </a>{' '}
                                        </p>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>
                                                CYBER OPERATION
                                            </a>{' '}
                                        </p>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>
                                                TECHNICAL LEADERSHIP{' '}
                                            </a>{' '}
                                        </p>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>
                                                CYBER CRIME'
                                            </a>{' '}
                                        </p>
                                        <p>
                                            {' '}
                                            <a href='#LINK'>CYBER LAW' </a>{' '}
                                        </p>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={9}>
                                <Row>
                                    {details.map(detail => (
                                        <Col
                                            lg={4}
                                            md={6}
                                            sm={12}
                                            className='mt-lg-0 mt-4 '>
                                            <ClientCard
                                                image={detail.image}
                                                subtitle={detail.subtitle}
                                                title={detail.title}
                                                expert={detail.expert}
                                                location={detail.Location}
                                                chain={detail.chain}
                                                content={detail.content}
                                            />
                                        </Col>
                                    ))}
                                    <Button
                                        className='ms-lg-2 mx-2'
                                        style={{
                                            background: '#282F36',
                                            border: 'none',
                                        }}>
                                        Load More
                                    </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Main;
