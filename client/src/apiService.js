const BASE_URL = process.env.REACT_APP_BASE_URL;

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
    createUser: (newUser) => {
        return fetch(`${BASE_URL}/user`, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(newUser)
        })
            .then((res) => res.json())
            .catch((err) => console.log(err));
    },
    createPost: () => {

    },
    deleteUser: () => {

    },
    deletePost: () => {

    },
};

export default apiService