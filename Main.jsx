import React from 'react';
import Navbar from './Navbar'
import Header from './header'
import Drive from './Drive'
import Collabration from './Collabration'
import ChanceLight from './ChanceLight'
import Features from './Features'
import Footer from './Footer'

function Main(props) {
    return (
        <>
        <Navbar/>
        <Header/>
        <Drive/>
        <Collabration/>
        <ChanceLight/>
        <Features/>
        <Footer/>
        </>
    );
}

export default Main;