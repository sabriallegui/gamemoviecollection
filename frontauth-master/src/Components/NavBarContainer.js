import React from 'react'
import './navbar.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBarContainer = ({ auth, logout }) => {
  console.log('lina nav account auth ', auth)
  return (
    <div>



      <nav class="navMenu">

        {auth.role === 'admin' ? (<>
          <a href="#">Home</a>

          <a href="#">Work</a>

        </>) : (<>
          <a href="#">Home</a>
          <a href="#">my list</a>
          <a href="#">About</a>
        </>)}


        <Button variant="outline-secondary" onClick={() => logout()}>Logout</Button>


      </nav>
    </div>
  )
}

export default NavBarContainer