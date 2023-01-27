import axios from 'axios'


export const fetchMovie = async () => {
    const { data } = await axios.get(`http://localhost:5001/movie`);
    return data
}

export const postMovie = async (values) => {
    const addingMovie = await axios.post(`http://localhost:5001/movie`, { ...values })
}


export const deleteMovie = async (id) => {
    const deleteMovie = await axios.delete(`http://localhost:5001/movie/${id}`)
}



export const updateMovie = async (id, value) => {
    const updateMovie = await axios.put(`http://localhost:5001/movie/${id}`, value)
}

export const GetUniqueMovie = async (id, value) => {
    const { data } = await axios.get(`http://localhost:5001/movie/${id}`, value)
    return data
}