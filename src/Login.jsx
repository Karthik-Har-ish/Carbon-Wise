import"./login.css"
export default function Login(){
    return(
        <>
        <div className="login">
            <form action={Login}>
                <h3>Login</h3>
                <label htmlFor="username">Username :</label>
                <input type="text" name="username" id="username" placeholder="Username"/>
                <label htmlFor="password">Password :</label>
                <input type="text" name="password" id="password" />
                <input type="submit" value="Login" />
            </form>
        </div>
        </>
    )
}