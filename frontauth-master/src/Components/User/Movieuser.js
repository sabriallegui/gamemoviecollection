import { React, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { deleteMovie, fetchMovie } from '../../api/movie';
import { setmovies } from '../../store/movieSlice';
import CardMovie from './CardMovie';
import WhatsNew from './WhatsNew';

const Movieuser = () => {

    const dispatch = useDispatch();
    const Movies = useSelector(state => state.movies)
    const handleDelete = async (id) => {
        let result = await deleteMovie(id)
        console.log("deleted result", result);
        dispatch(deleteMovie(id))
    }

    const getMovies = async () => {
        const datam = await fetchMovie()
        dispatch(setmovies(datam.movies))
        console.log("mooooooooooooooooooooove", Movies)

    }
    useEffect(() => {
        getMovies();
    }, [])

    return (
        <div>
            <div className="wrapper">

                <h2><strong>All Movies</strong></h2>
                {
                    Movies.map((e) => <CardMovie key={e._id} el={e} handleDelete={handleDelete} />)
                }



            </div>

            <h2><strong>What's new?</strong></h2>
            {/* {Movies.map((e) => <WhatsNew el={e} />)} */}


        </div>

    )
}

export default Movieuser


