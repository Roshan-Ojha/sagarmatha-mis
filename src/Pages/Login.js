import './Login.css'
function Login()
{
    return (
        <div className="Login">
            <div className='Sagarmatha'>
                <img src='https://sagarmatha.edu.np/assets/public/img/notice1.jpg' alt=''></img>
                &nbsp;&nbsp;
                <span>Sagarmatha MIS</span>
            </div>
            <hr className='firsthr'></hr>
            <div className='welcome'>
                Welcome to &nbsp;<span> Sagarmatha </span> &nbsp;MIS
            </div>
            <form>
                <div className='Email'>
                    <input placeholder='Email'></input>
                </div>
                <div className='Password'>
                    <input type="password" placeholder='Password'></input>
                </div>
                <div className='forgot'>Forgot password?</div>
                <div className='check'>
                    <input type ="checkbox" id="keep"></input>
                    <label for="keep">Remember Me</label>
                </div>
                <div className='submit'>
                    <input type="submit" value = "Login"></input>
                </div>
            </form>
            <hr className='secondhr'></hr>
            <div className='support'>
                Contact &nbsp;<span>MIS Support</span>
            </div>
        </div>
    );
}
export default Login;
