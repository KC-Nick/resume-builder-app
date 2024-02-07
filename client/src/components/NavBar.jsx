import React from 'react'

export default function NavBar({ currentPage, handlePageChange }) {
  return (
    <div className='nav nav-tabs'>
        <div className='nav-item'>
            <a href='/' 
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
        </div>
    </div>
  )
};