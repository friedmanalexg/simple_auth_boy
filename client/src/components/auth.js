import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavButton } from "../tools/hooks"


export function Signup () {
    const [ formData, setFormData] = useState ({})
    const navigate = useNavigate()
    
    const handleSignupSubmit = (e) => {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
            })
            .then(res => navigate("/login"))
        e.target.reset()
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        
    }


    return(
        <>
        <form onSubmit={handleSignupSubmit}>
            <input type="text" name="username" onChange={handleChange} placeholder="Hey type username here"></input>
            <input type="text" name="password" onChange={handleChange} placeholder="Hey type pwd here" ></input>
            <input type="text" name="password-confirmation" onChange={handleChange} placeholder="Hey type pwd here again, do it!" ></input>
            {/* above is convention for bcrypt */}
            <input name="submit" type="submit"></input>
        </form>
        <NavButton />
        </>
)}

export function Login () {
    const [ formData, setFormData] = useState ({})
    const navigate = useNavigate()
    
    const handleLoginSubmit = (e) => {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
            })
        .then(res => navigate("/home"))
        e.target.reset()


    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        
    }
    return(
        <>
        <form onSubmit={handleLoginSubmit}>
        <input type="text" name="username" onChange={handleChange} placeholder="Hey type username here"></input>
        <input type="text" name="password" onChange={handleChange} placeholder="Hey type pwd here" ></input>
            <input name="submit" type="submit"></input>
        </form>
        <NavButton />
        </>
)}