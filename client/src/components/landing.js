import { NavButton } from "../tools/hooks"

export function Home () {

    return(
        <>
            <h1>Welcome Home!</h1>
        </>
)}

export function Root () {

    return(
    <>
        <h1>This is your root page.</h1>
        <div>
            <NavButton path="/signup" text="signup" />
            <NavButton path="/login" text="login" />
        </div>
    </>
)}

export const NotFound = () => {
    return (
        <>
            <h1>404 not found</h1>
            <NavButton />
        </>
    )
}