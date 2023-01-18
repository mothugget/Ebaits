// import cloudinary from 'cloudinary';

const BASE_URL = process.env.REACT_APP_BASE_URL;

// cloudinary.config({
//     cloud_name: process.env.REACT_APP_CLOUD_DOMAIN,
//     api_key: process.env.REACT_APP_CLOUD_DOMAIN,
//     api_secret: process.env.REACT_APP_CLOUD_DOMAIN,
//     secure: true,
// });

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
    getProfileByUserId: (_id) => {
        return fetch(`${BASE_URL}/user/id/${_id}`, {
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
    createPost: (newPost) => {
        return fetch(`${BASE_URL}/post`, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        })
            .then((res) => res.json())
            .catch((err) => console.log(err));
    },
    deletePost: (_id) => {
        return fetch(`${BASE_URL}/post/${_id}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => res.json())
            .catch((err) => console.log(err));
    },
    deleteUser: (username) => {
        return fetch(`${BASE_URL}/user/${username}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => res.json())
            .catch((err) => console.log(err));
    },
};

export default apiService