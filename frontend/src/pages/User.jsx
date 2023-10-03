import { useState } from "react";

export default function User(props){
    const [isRegistrating, setIsRegistrating] = useState(null)

    return (
        <div>
            <h1>Log-In/Sign-Up</h1>
            {isRegistrating ? <button onClick={() => setIsRegistrating(false)}>Login</button> : <button onClick={() => setIsRegistrating(true)}>Register</button>}
            {isRegistrating ? <h2>Register</h2> : <h2>Login</h2>}
            <form>
                <label htmlFor="username">Username</label><br/>
                <input name="username" type="text" id="username" /><br/>
                <label htmlFor="password">Password</label><br/>
                <input name="password" type="password" id="password" /><br/>
                {isRegistrating ? <><label htmlFor="password">Confirm Password</label><br/></> : null}
                {isRegistrating ? <><input name="cpassword" type="password" id="cpassword" /><br/></> : null}
                {isRegistrating ? <><label htmlFor="email">Email</label><br/></> : null}
                {isRegistrating ? <><input name="email" type="email" id="email" /><br/></> : null}
                {isRegistrating ? 
                <button>Register</button> : 
                <button>Login</button>}
            </form>
        </div>
    )
}

// useffect to fetch user data, login data validation, if okay, pass user data to layout, if not, display error message
// if user is logged in, display user's username, with arrow to dropdown menu, for settings, logout, favorites
// if user is not logged in, display login button, which will take user to login page
// show add to favorites button on recipe page, if user is logged in