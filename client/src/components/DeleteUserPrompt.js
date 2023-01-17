import { useContext } from 'react'
import { useAuth0 } from "@auth0/auth0-react"

import { OverlayContext } from '../overlayProvider'
import { ContentContext } from '../contentProvider';

import apiService from '../apiService'


export default function DeleteUserPrompt(props) {

    const { deletePost, setDeletePost, setOverlay } = useContext(OverlayContext);
    const { currUser, setContent } = useContext(ContentContext);
    const { logout, isAuthenticated } = useAuth0();

    function confirmDeleteClick() {
        apiService.deleteUser(currUser.username)
            .then((res) => {
                logout()
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    function returnToNavbar() {
        setOverlay('Navbar')
    }

    return (
        <div className="DeleteUserPrompt Menu">
            <h3 className="title-text"> Are you sure you want to delete your account? </h3>
            <button className="confirm-delete" onClick={confirmDeleteClick}>Delete account</button>
            <button onClick={returnToNavbar}>Cancel</button>
        </div>
    )
}
