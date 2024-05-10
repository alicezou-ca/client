import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Intro from './Intro';
import RolesLayout from './RolesLayout';

const Layout =({children}) =>{
    return(
        <div>
        <Header/>
        <Intro/>
        <RolesLayout/>
        <Footer/>
        </div>
    )
}

export default Layout;