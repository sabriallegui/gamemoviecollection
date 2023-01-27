import { React, useEffect } from 'react';
// import { fetchMovie } from '../../api/movie';
// import { setel } from '../../store/ellice';
// import { useDispatch, useSelector } from "react-redux"


const WhatsNew = ({ el }) => {

    return (
        <div>
            <h1>partie games</h1>

            <div className="news">

                <figure className="article">

                    <img src="https://mrreiha.keybase.pub/codepen/hover-fx/news1.jpg" />

                    <figcaption>

                        <h3>  <figcaption> {el.title}</figcaption></h3>

                        <p>

                            In today’s update, two heads are better than one, and three heads are better than that, as the all-new Flockheart’s Gamble Arcana item for Ogre Magi makes its grand debut.

                        </p>

                    </figcaption>

                </figure>

                <figure className="article">

                    <img src="https://mrreiha.keybase.pub/codepen/hover-fx/news2.png" />

                    <figcaption>

                        <h3>Update</h3>

                        <p>

                            Just in time for Lunar New Year and the Rat’s time in the cyclical place of honor, the Treasure of Unbound Majesty is now available.

                        </p>

                    </figcaption>

                </figure>

            </div>
        </div>
    )
}

export default WhatsNew
