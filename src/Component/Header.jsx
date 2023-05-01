import React from 'react';
import { Form, Nav, Navbar } from 'react-bootstrap';
import Image from './Image';

const Header = () => {
    return (
        <>
            <section>
                <Navbar style={{ background: '#101820' }} expand='lg'>
                    <div className='logo ms-5'>
                        <Image name='logo.png' />
                        <Navbar.Brand href='#' className='text-white'>
                            Cyberspatial
                        </Navbar.Brand>
                    </div>
                    <Navbar.Toggle
                        aria-controls='navbarScroll'
                        style={{ color: 'white' }}
                    />
                    <Navbar.Collapse id='navbarScroll' className='text-white'>
                        <Nav className='me-auto my-lg-0 ms-5 ' navbarScroll>
                            <Nav.Link href='#action1' className='text-white'>
                                DISCOVER
                            </Nav.Link>
                            <Nav.Link
                                href='#action2'
                                className='text-white mx-3'>
                                LEARN
                            </Nav.Link>
                            <Nav.Link href='#action2' className='text-white'>
                                CONNECT
                            </Nav.Link>
                        </Nav>
                        <Form className='me-5'>
                            <Form.Control
                                type='search'
                                className='me-5 mt-1 px-5 search'
                                aria-label='Search'
                            />
                            <p
                                style={{
                                    letterSpacing: '2px',
                                    color: '#696E73',
                                }}>
                                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                            </p>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </section>
        </>
    );
};

export default Header;
