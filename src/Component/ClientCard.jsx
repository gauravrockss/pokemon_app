import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Image from './Image';

const ClientCard = props => {
    const { subtitle, title, expert, location, chain, content, image } = props;
    return (
        <>
            <div style={{ color: 'gray' }}>
                <Card className='cards mb-4 ms-lg-0 ms-3'>
                    <Image variant='top' name={image} className='img' />
                    <Card.Body>
                        <h6 style={{ fontSize: '13px' }}>{subtitle}</h6>
                        <Card.Title style={{ color: 'white' }}>
                            {title}
                        </Card.Title>
                        <h6
                            className='mb-3'
                            style={{ color: 'white', fontSize: '13px' }}>
                            {expert}
                        </h6>
                        <h6 style={{ fontSize: '13px' }} className='mb-2'>
                            {location}
                        </h6>
                        <h6 style={{ fontSize: '13px' }}>{chain}</h6>
                        <Card.Text
                            style={{ fontSize: '13px' }}
                            className='mt-4'>
                            {content}
                        </Card.Text>
                        <Button
                            variant='warning'
                            className='w-100'
                            style={{ color: 'black', fontWeight: '500' }}>
                            LEARN MORE
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default ClientCard;
