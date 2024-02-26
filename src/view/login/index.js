import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../Config/Firebase"
import "../../App.css"
import "../login/index.css"

function LogIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signIn = async () => {
        await login({ email, password })
        navigate("/")
    }

    return (
        <div className="mainLogin">
            <br/>  <br/>  <br/>

            <div className="login">

                {/* <img src="https://blog.olx.com.pk/wp-content/uploads/2019/08/Blue-Logo-800x800-01.png" width={"100px"} /><br /> */}

                <h2>Log In</h2>
                <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />

                <br/>
                <button onClick={signIn} className="signInBtn">Log In</button><br /><br />
                <p>
                    Don't you have an account<br></br>
                    <span onClick={() => navigate('/register')}><button className="regBtn">Register Now</button></span>
                </p>
            </div>

        </div>


              );
            }

export default LogIn;