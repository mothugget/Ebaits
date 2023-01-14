const BASE_URL = 'http://localhost:3001';

const apiService = {
    populateDashboard: () => {
        return fetch(`${BASE_URL}/register`, {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => res.json())
            .catch((err) => console.log(err));
    },
    getProfile: () => {

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