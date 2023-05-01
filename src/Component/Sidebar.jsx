import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Sidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                variant='warning'
                onClick={handleShow}
                className='d-block d-lg-none py-2 px-5  ms-lg-0 ms-4'>
                Filter By
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton style={{ background: '#1b2936' }}>
                    <Offcanvas.Title className='text-white'>
                        Filter by
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body
                    style={{ background: '#1b2936' }}
                    className='filter1 p-3'>
                    <div
                        style={{
                            lineHeight: '2.1',
                        }}>
                        <h5 className='mb-2' style={{ color: '#18E7CF' }}>
                            CORE SKILLS
                        </h5>
                        <div className='b1 my-3'></div>
                        <p>
                            {' '}
                            <a href='#LINK'>SCRIPTING & AUTOMATION </a>{' '}
                        </p>
                        <p>
                            {' '}
                            <a href='#LINK'>DIGITAL SECURITY</a>{' '}
                        </p>
                        <p>
                            {' '}
                            <a href='#LINK'>SYSTEM ADMINSTRATION </a>{' '}
                        </p>
                        <p>
                            {' '}
                            <a href='#LINK'>ARCHITECTURE</a>{' '}
                        </p>
                        <p>
                            {' '}
                            <a href='#LINK'>NETWORKING </a>{' '}
                        </p>
                    </div>
                    <div
                        style={{
                            lineHeight: '2.1',
                        }}>
                        <h5 className='mb-2' style={{ color: '#00a3ff' }}>
                            BLUE TEAM
                        </h5>
                        <div
                            className='b2 my-3'
                            style={{
                                color: '#18E7CF',
                            }}></div>
                        <p>
                            {' '}
                            <a href='#LINK'>SECURITY MONITORING </a>{' '}
                        </p>
                        <p>
                            {' '}
                            <a href='#LINK'>INCIDENT RESPONCE</a>{' '}
                        </p>
                        <p>
                            {' '}
                            <a href='#LINK'>THREAT INTELLIGENCE </a>{' '}
                        </p>
                        <p>
                            {' '}
                            <a href='#LINK'>DIGITAL INTELLIGENCE</a>{' '}
                        </p>
                        <p>
                            {' '}
                            <a href='#LINK'>COMLIANCE & RISK </a>{' '}
                        </p>
                    </div>
                    <div
                        style={{
                            lineHeight: '2.1',
                        }}>
                        <h5 className='mb-2' style={{ color: '#ff644e' }}>
                            RED TEAM
                        </h5>
                        <div className='b3 my-3'></div>
                        <p>
                            {' '}
                            <a href='#LINK'>SECURITY MONITORING </a>{' '}
                        </p>
                        <p>
                            {' '}
                            <a href='#LINK'>INCIDENT RESPONCE</a>{' '}
                        </p>
                        <p>
                            {' '}
                            <a href='#LINK'>THREAT INTELLIGENCE </a>{' '}
                        </p>
                        <p>
                            {' '}
                            <a href='#LINK'>DIGITAL INTELLIGENCE</a>{' '}
                        </p>
                        <p>
                            {' '}
                            <a href='#LINK'>NETWORKING </a>{' '}
                        </p>
                    </div>
                    <div
                        style={{
                            lineHeight: '2.1',
                        }}>
                        <h5 className='mb-2' style={{ color: '#efbc40' }}>
                            SPECIAL
                        </h5>
                        <div className='b4 my-3'></div>
                        <p>
                            {' '}
                            <a href='#LINK'>OSINT & INVESTIGATION </a>{' '}
                        </p>
                        <p>
                            {' '}
                            <a href='#LINK'>CYBER OPERATION</a>{' '}
                        </p>
                        <p>
                            {' '}
                            <a href='#LINK'>TECHNICAL LEADERSHIP </a>{' '}
                        </p>
                        <p>
                            {' '}
                            <a href='#LINK'>CYBER CRIME'</a>{' '}
                        </p>
                        <p>
                            {' '}
                            <a href='#LINK'>CYBER LAW' </a>{' '}
                        </p>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Sidebar;
