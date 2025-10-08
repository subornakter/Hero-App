import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
    );
};

export default MainLayout;