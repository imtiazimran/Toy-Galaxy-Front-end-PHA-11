/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Components/Shared/Navbar/Navbar';
import Foot from './Components/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='bg-slate-800'>
    <Navigation></Navigation>
      <Outlet></Outlet>
      <Foot></Foot>
      <ToastContainer />
    </div>
  );
};

export default App;