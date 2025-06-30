import React from 'react';
import { Outlet } from 'react-router';
import Home from '../Layouts/Home';
import Navbar from '../Components/Navbar';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>

    );
};

export default Root;