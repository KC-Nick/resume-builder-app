import React from 'react';
import {NavBar, Nav } from 'react-bootstrap';
import Home from '../pages/Home';
import Login from '../pages/Login';

export default function NavBar({ currentPage, handlePageChange }) {
  return (
    <NavBar className='nav nav-tabs'>
        <div className='nav-item'>
            <a href='/' 
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
        </div>
    </NavBar>
  )
};