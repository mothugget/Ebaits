import { useAuth0 } from "@auth0/auth0-react"

export default function LogoutButton(props) {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button className="LogoutButton" onClick={logout}>
                Sign out
            </button>
        )

    )
}

//got help from https://www.youtube.com/watch?v=pAzqscDx580