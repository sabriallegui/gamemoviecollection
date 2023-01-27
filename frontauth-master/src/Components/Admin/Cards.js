import React from 'react'
import './Cards.css'
const Cards = ({ user }) => {
  console.log('les users objssdfgh ', user)
  return (
    <div>
      {
        <><hr /> <p>users</p>   <ul class="tilesWrap">
          <li>

            <h3>{user.name}</h3>
            <p>{user.roles}</p>
            <p>
              {user.email}
            </p>
          </li>
        </ul></>
      }
    </div>)
}

export default Cards