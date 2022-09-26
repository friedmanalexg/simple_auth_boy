import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const NavButton = ({path = '/', text = "back"}) => {

    const navigate = useNavigate()

    return (

        <button onClick={ () => navigate( path ) }> {text} </button>
    )
}

export const AuthRoute = ({ children, setUser}) => {
    const nav = useNavigate()

    useEffect(() => {
        fetch('/me')
            .then(r => {
                if (r.ok) {
                    r.json().then(user => {
                        setUser(user)
                    })
                    
                } else {
                    nav('/login')
                }
            })

    },[])
    return (
        <>
            {children}
        </>
    )
        
}