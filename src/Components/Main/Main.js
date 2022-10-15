import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarContainer from '../Navbar/NavbarContainer';

const Main = () => {
    return (
        <div>
            <NavbarContainer></NavbarContainer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;