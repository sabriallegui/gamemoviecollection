import React, { useState } from 'react'
import './addCardForm.css'
import { useNavigate } from 'react-router';
import { postMovie } from '../../api/movie';

function AddCardForm() {
    let navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [goodbad, setGoodbad] = useState('')
    const [rating, setRating] = useState('')
    const [bestCharacter, setBestCharacter] = useState('')
    const [moviedescription, setMoviedescription] = useState('')
    const [img, setImg] = useState('')

    const handleSubmit = async (value) => {
        await postMovie(value)
        navigate('/')


    }
    return (
        <div>
            <div classNameName="formbold-main-wrapper">

                <div className="formbold-form-wrapper">

                    <img src="https://media.tenor.com/yLTlFjvjmb0AAAAC/jujutsu-kaisen-gojo-satoru.gif" alt="movie" />

                    <form >
                        <div className="formbold-form-title">
                            <h2 className="">Movie add  now</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt.
                            </p>
                        </div>

                        <div className="formbold-input-flex">
                            <div>
                                <label className="formbold-form-label">
                                    title
                                </label>
                                <input
                                    type="text"
                                    id="firstname"
                                    className="formbold-form-input"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div>
                                <label for="lastname" className="formbold-form-label"> good /bad  </label>
                                <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    className="formbold-form-input"
                                    value={goodbad}
                                    onChange={(e) => setGoodbad(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="formbold-input-flex">
                            <div>
                                <label className="formbold-form-label"> Best character </label>
                                <input
                                    type="text"
                                    name="text"
                                    id="text"
                                    className="formbold-form-input"
                                    value={bestCharacter}
                                    onChange={(e) => setBestCharacter(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="formbold-form-label"> Raring </label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    className="formbold-form-input"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="formbold-mb-3">
                            <label for="address" className="formbold-form-label">
                                Movie description
                            </label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                className="formbold-form-input"
                                value={moviedescription}
                                onChange={(e) => setMoviedescription(e.target.value)}
                            />
                        </div>




                        <div className="formbold-mb-3">
                            <label for="address" className="formbold-form-label">
                                Movie image
                            </label>
                            <input
                                type="text"

                                id="address"
                                className="formbold-form-input"
                                value={img}
                                onChange={(e) => setImg(e.target.value)}
                            />
                        </div>


                        <button className="formbold-btn" type='button' onClick={() => handleSubmit({ title, goodbad, rating, bestCharacter, moviedescription, img })}>add Movie Now</button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default AddCardForm
