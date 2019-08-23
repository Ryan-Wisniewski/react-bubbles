import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    // console.log('but the token is literally right here!', token)
    return axios.create({
        headers: {
            Authorization: token
        }
    })
}