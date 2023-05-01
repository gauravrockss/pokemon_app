import React from 'react';

import Header from './Component/Header';

import Main from './pages/Main';
import Footer from './Component/Footer';

import './App.css';
import { Container } from 'react-bootstrap';
function App() {
    return (
        <>
            <Header />

            <Main />

            <Footer />
        </>
    );
}

export default App;
// style={{
//     maxWidth: 'min(95%, 1296px)',
//     marginInline: 'auto',
//     padding: 0,
// }}
