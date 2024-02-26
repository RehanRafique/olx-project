import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../Config/Firebase"
// import { register } from "../../config/firebase";


function Register() {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const  signup = async() => {
      await  register({ fullname, age, email, password, })
        navigate('/login')
    }
console.log("name :",fullname)
console.log("email :",email)
console.log("pass :",password)
console.log("age :",age)
    return (
        <div className="mainLogin">
            <br/>  <br/>  <br/>
            <div className="login">
            {/* <img src="https://blog.olx.com.pk/wp-content/uploads/2019/08/Blue-Logo-800x800-01.png" width={"100px"} /><br /> */}
            <h2>Register</h2>
            <input placeholder="Name" onChange={(e) => setFullname(e.target.value)} /><br/><br/>
            <input placeholder="Age" onChange={(e) => setAge(e.target.value)} /><br/><br/>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/><br/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br/><br/>

            <br />
            <button onClick={signup} className="signInBtn">Register</button><br/><br/>
            <p>
                Already you have an account<br/>
                <button onClick={() => navigate('/login')} className="regBtn"><b>Click Here</b></button>
            </p>
            </div>

        </div>
    )
}
export default Register;