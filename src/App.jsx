/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Components/Shared/Navbar/Navbar';
import Foot from './Components/Shared/Footer/Footer';

const App = () => {
  return (
    <div className='bg-slate-800'>
    <Navigation></Navigation>
      <Outlet></Outlet>
      <Foot></Foot>
    </div>
  );
};

export default App;