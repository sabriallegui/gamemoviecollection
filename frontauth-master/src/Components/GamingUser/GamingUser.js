import React from 'react'
import './GamingUser.css'
const GamingUser = () => {
    return (
        <div>
            <div classNameName="formbold-main-wrapper">

                <div className="formbold-form-wrapper">

                    <img src="https://cdn.myanimelist.net/s/common/uploaded_files/1450816043-5ba72417b7656e985bad8bd5a2c1b0b1.gif" alt="movie" />

                    <form >
                        <div className="formbold-form-title">
                            <h2 className="">Gaming add  now</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt.
                            </p>
                        </div>

                        <div className="formbold-input-flex">
                            <div>
                                <label for="firstname" className="formbold-form-label">
                                    title
                                </label>
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    className="formbold-form-input"
                                />
                            </div>
                            <div>
                                <label for="lastname" className="formbold-form-label"> good /bad  </label>
                                <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    className="formbold-form-input"
                                />
                            </div>
                        </div>

                        <div className="formbold-input-flex">
                            <div>
                                <label for="text" className="formbold-form-label"> Best character </label>
                                <input
                                    type="text"
                                    name="text"
                                    id="text"
                                    className="formbold-form-input"
                                />
                            </div>
                            <div>
                                <label for="phone" className="formbold-form-label"> Rrting </label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    className="formbold-form-input"
                                />
                            </div>
                        </div>


                        <button className="formbold-btn">add Movie Now</button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default GamingUser
