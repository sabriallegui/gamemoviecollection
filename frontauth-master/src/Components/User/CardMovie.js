import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { deleteMovie, fetchMovie } from '../../api/movie';
import { useDispatch, useSelector } from "react-redux"

const CardMovie = ({ el }) => {
    console.log("hedha howa id", el);
    const history = useNavigate();
    const dispatch = useDispatch();

    const handlemoviesform = () => {
        Navigate('/user/movieadd');
    }
    const handleDeleteFromCard = async (id) => {
        let result = await deleteMovie(id)
        console.log("deleted result", result);
        dispatch(deleteMovie(id))
    }

    return (
        <div className="cards">

            <figure className="card">

                <img src={el.img} />

                <figcaption> {el.title}</figcaption>

            </figure>
            <button className='button' onClick={() => handlemoviesform()}>Add a new Movie</button>
            <button className='button' onClick={() => handleDeleteFromCard(el._id)}>Delete</button>
            <>ggggggggggggg</>


        </div>
    )
}

export default CardMovie



