import { useAuth0 } from "@auth0/auth0-react"

export default function LogoutButton(props) {
    const { user, logout, isAuthenticated } = useAuth0();
   
    return (
        isAuthenticated && (
            <button className="LogoutButton" onClick={logout}>
                Sign out
            </button>
        )

    )
}