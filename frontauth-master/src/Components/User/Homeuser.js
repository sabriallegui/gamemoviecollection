import { Button } from 'bootstrap'
import { useNavigate } from 'react-router-dom';

import React from 'react'
import './Homeuser.css'


const Homeuser = ({ auth }) => {
    let history = useNavigate();

    const handlemoviesform = () => {
        history('/user/movieadd');
    }
    const handlegamesform = () => {
        history('/user/gameadd');
    };
    const handelmovie = () => {
        history('/app/movie');
    };
    return (
        <div className='body'>
            <aside className="profile-card">
                <header>
                    {/* <!-- here’s the avatar --> */}
                    <a target="_blank" href="#">
                        <img src="http://lorempixel.com/150/150/people/" className="hoverZoomLink" />
                    </a>

                    {/* <!-- the username --> */}
                    <h1>
                        {auth.name}                    </h1>

                    {/* <!-- and role or location --> */}
                    <h2>
                        Better Visuals
                    </h2>

                </header>

                {/* <!-- bit of a bio; who are you? --> */}
                <div className="profile-bio">

                    <p>
                        It takes monumental improvement for us to change how we live our lives. Design is the way we access that improvement.
                    </p>

                </div>
            </aside>
        </div>
    )
}

export default Homeuser
