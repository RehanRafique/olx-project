import Header from '../../components/header';
import { useNavigate } from 'react-router-dom';
import '../../App.css'
import { auth, ProfileData, updateUserData, getCurrentUserUID, getuser } from "../../Config/Firebase";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import "./index.css"

function Profile() {
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [img, setImg] = useState()
  const [image, setImage] = useState()
  const [email, setEmail] = useState()
  const [description, setDescription] = useState()
  const [user, setUser] = useState()
  const [uid, setUid] = useState()
  const [userData, setUserData] = useState()
  const nevigate = useNavigate()
  // const [currentUser,setCurrentUser ] = useState()

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user;
        setUser(uid.email)
      } else {
        setUser("")
      }
    })
  }, []);



  useEffect(() => {
    FetchData();
    async function FetchData() {
      try {
        const pdata = await ProfileData();

        console.log('pdata', pdata)
        const foundItem = pdata.filter((res) => res.email === user)
        if (foundItem) {
          setUserData(foundItem)
        }

        if (userData && userData[0]) {
          setImage(userData[0].imgUrl)
        } else {
          setImage(null)
        }

        console.log("Element found ", foundItem)
        setUid(userData ? userData[0].id : "")

      } catch (error) {
        console.log("Error fetching or processing data")
      }
    }
  }, [user],)

  async function editUser() {
    await updateUserData(userData, img);
  };

  useEffect(() => {
    if (userData && userData[0]) {
      setImage(userData[0].imageUrl);
    } else {
      setImage(null);
    }
  },[userData]);

  console.log('userdata', userData)
  console.log("uid", uid)



  if (userData === undefined) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="main">
      <div className='head'>
        <Header />

      </div>

      <div className="profile">



        {/* <h1>{user}</h1> */}


        <div>
          <label>Profile</label><br />
          <img src={image ? `${image}` : "https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"} width='60px'></img>
          <input type='file' onChange={(e) => setImg(e.target.files[0])} /><br /><br />

          <label>Name</label><br />
          <input defaultValue={userData ? userData[0].fullname : ""} onChange={(e) => setName(e.target.value)} /><br /><br />
          <label>Email</label><br />

          <input defaultValue={userData ? userData[0].email : ""} onChange={(e) => setEmail(e.target.value)} /><br /><br />
          <label>Age</label><br />

          <input defaultValue={userData ? userData[0].age : ""} onChange={(e) => setAge(e.target.value)} /> <br /><br />

          <br></br>
          <button className='nav-custom-btn' onClick={editUser}>
            Update
          </button>
        </div>



        <br /><br />
      </div>



    </div>
  )
}

export default Profile;