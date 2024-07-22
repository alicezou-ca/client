import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Intro from './Intro';
import RolesLayout from './RolesLayout';
import Projects from './Projects';

const Layout =() =>{
    return(
        <div>
        <Header/>
        <Intro/>
        <RolesLayout/>
        <Projects/>
        <Footer/>
        </div>
    )
}

export default Layout;