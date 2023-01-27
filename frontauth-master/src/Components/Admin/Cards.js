import React from 'react'
import './Cards.css'
const Cards = ({ users }) => {
  console.log('les users objs ', users)
  return (
    <div>
      {
        users.roles === 'admin' ? (<ul class="tilesWrap">
          <li>

            <h3>{users.name}</h3>
            <p>{users.roles}</p>
            <p>
              {users.email}
            </p>
          </li>
        </ul>) : (<><hr /> <p>users</p>   <ul class="tilesWrap">
          <li>

            <h3>{users.name}</h3>
            <p>{users.roles}</p>
            <p>
              {users.email}
            </p>
          </li>
        </ul></>)
      }
    </div>)
}

export default Cards