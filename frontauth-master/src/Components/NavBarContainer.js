import React from 'react'
import './navbar.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
const NavBarContainer = ({ auth, logout }) => {
  console.log('lina nav account auth ', auth)
  return (
    <div>



      <nav className="navMenu">

        {auth.role === 'admin' ? (<>
          <h2>{auth.name}</h2>
          <Link to="/">Home</Link>

          <Link >eyes</Link>

        </>) : (<>
          <h2>{auth.name}</h2>
          <Link to="/">Home</Link>
          <Link to="/app/movie">Movie</Link>
          <Link to="/user/gameadd">Game</Link>



        </>)}


        <Button variant="outline-secondary" type="button" onClick={() => logout()}>Logout</Button>


      </nav>
    </div>
  )
}

export default NavBarContainer