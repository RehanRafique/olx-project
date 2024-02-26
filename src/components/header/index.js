import "./app.css"
import { useNavigate } from 'react-router-dom';
import '../../App.css'
import { auth } from "../../Config/Firebase";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
function Header() {

  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const cart = useSelector(state => state.cartReducer.cart)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user
        setUser(uid.email);
      } else {
        setUser(null)
      }
    })
  }, []);


  const logout = async () => {
    const auth = getAuth();
    await signOut(auth)
    setUser(null)

  }



  return (
    <div className="App-header">
      <div className='header'>

        {/* <img src="https://blog.olx.com.pk/wp-content/uploads/2019/08/Blue-Logo-800x800-01.png" ></img><br/> */}
        <div className="inp">
          <img src="https://pixlok.com/wp-content/uploads/2021/04/OLX-Logo-PNG-768x768.jpg" className="img2"></img>
          <input type="text" placeholder="Pakistan" className="loc"></input>


          <input type="text" placeholder="Find Cars Mobile And More..." aria-describedby="button-addon2"></input>
          {/* <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button> */}

          {cart ?
            <div className="cart">
              <h3 className="cart-no"> {cart.length}</h3>
            </div>
            : ""}
          {user ?

            <div className='parent'>
              <img onClick={() => navigate('/profile')} className="parentImg" src='https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png'></img>
              <button onClick={() => logout()} className="logOutBtn"><u>LogOut</u></button><br></br>
              {/* <div className='child'>
                <span>{user}</span><br></br>
                <button onClick={() => navigate('/profile')}>Profile</button><br></br>
              </div> */}
            </div>
            :
            <button onClick={() => navigate('/login')} className='loginBtn'><u>Log In</u></button>
          }


          <img onClick={() => navigate('/postadd')} className='sellImg' src='https://raw.githubusercontent.com/RehanRafique/images/main/images.png'></img>
        </div>
      </div>




    </div>

  )
}

export default Header;