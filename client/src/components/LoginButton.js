import { useAuth0 } from "@auth0/auth0-react"

export default function LoginButton(props) {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <button className="LoginButton" onClick={loginWithRedirect}>
                Sign in
            </button>
        )

    )
}

//got help from https://www.youtube.com/watch?v=pAzqscDx580