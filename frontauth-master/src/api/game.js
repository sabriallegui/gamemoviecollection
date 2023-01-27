import axios from 'axios'


export const fetchGames = async () => {
    const { data } = await axios.get(`http://localhost:5001/game`);
    return data
}

export const postGame = async (values) => {
    const addingGames = await axios.post(`http://localhost:5001/game`, { ...values })
}


export const deletGame = async (id) => {
    const deletGames = await axios.delete(`http://localhost:5001/game/${id}`)
}



export const updateGame = async (id, value) => {
    const updatedGames = await axios.put(`http://localhost:5001/game/${id}`, value)
}

export const GetUniqueGamee = async (id, value) => {
    const { data } = await axios.get(`http://localhost:5001/game/${id}`, value)
    return data
}