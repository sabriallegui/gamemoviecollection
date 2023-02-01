import { React, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { deleteMovie, fetchMovie } from '../../api/movie';
import { fetchGames } from '../../api/game';
import { setmovies } from '../../store/movieSlice';
import { setGames } from '../../store/gameSlice';
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

    // ddfvgbhjdfghsdfghjksdfghjsdfghfh


    const game = useSelector(state => state.gamescolllection)
    console.log(game, "gamee message 23456345678")
    // const handleDeletxe = async (id) => {
    //     let result = await deleteMovie(id)
    //     console.log("deleted result", result);
    //     dispatch(deleteMovie(id))

    // }

    // const getGames = async () => {
    //     const datam = await fetchGames()
    //     dispatch(setGames(datam))
    //     console.log("Gaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaame", datam)

    // }
    // useEffect(() => {
    //     getGames();
    // }, [])








    return (
        <div>
            <div className="wrapper">

                <h2><strong>All Movies</strong></h2>
                {
                    Movies.map((e) => <CardMovie key={e._id} el={e} handleDelete={handleDelete} />)
                }



            </div>

            <h2><strong>What's new?</strong></h2>


        </div>

    )
}

export default Movieuser


