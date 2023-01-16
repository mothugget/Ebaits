const BASE_URL = 'http://localhost:3030';

const apiService = {
    populateDashboard: () => {
        return fetch(`${BASE_URL}/posts`, {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => res.json())
            .catch((err) => console.log(err));
    },
    getProfile: (username) => {
        return fetch(`${BASE_URL}/user/${username}`, {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => res.json())
            .catch((err) => console.log(err));
    },
    getProfileSignin: (email) => {
        return fetch(`${BASE_URL}/user/signin/${email}`, {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => res.json())
            .catch((err) => console.log(err));
    },
    createUser: () => {

    },
    createPost: () => {

    },
    deleteUser: () => {

    },
    deletePost: () => {

    },
};

export default apiService