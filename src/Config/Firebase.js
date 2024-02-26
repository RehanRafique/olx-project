import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDoc, getDocs, where, query, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBdZ6qViWW7waek-PQIDvVhZVK6zU7uXfk",
    authDomain: "olx-project-aece2.firebaseapp.com",
    projectId: "olx-project-aece2",
    storageBucket: "olx-project-aece2.appspot.com",
    messagingSenderId: "357606776999",
    appId: "1:357606776999:web:fa1bce1639e3f07c607b82",
    measurementId: "G-0DGHZCKFL8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
const storage = getStorage(app);

//REGISTER
export async function register(userInfo) {
    try {
        const { fullname, age, email, password, } = userInfo
        await createUserWithEmailAndPassword(auth, email, password)
        await addDoc(collection(db, "user"), {
            fullname, age, email
        });

        alert("Succesfully Registered")

    } catch (error) {
        alert(error.message);
    };
}

//LOGIN
export async function login(userInfo) {
    try {
        const { email, password } = userInfo
        await signInWithEmailAndPassword(auth, email, password)
        alert("Sucessfully Login")

    } catch (error) {
        alert(error.message)
    };
}

//POST ADD

export async function PostAddToDb(ad) {
    try {
        const { title, price, description, image } = ad
        const imageArray = Array.from(image[0])
        const arr = []
        for (let i = 0; i < imageArray.length; i++) {
            const file = imageArray[i];

            //Step 1: Storage me file/image ko  upload krna
            const storageRef = ref(storage, `ads/${file.name}`)
            await uploadBytes(storageRef, file)
            //Step 2: Us image ka url get krna
            const url = await getDownloadURL(storageRef);
            console.log(`File ${i} uploaded. Download Url:${url}`)
            arr.push(url);
        }

        //Step 3: Db ma Data add krna
        await addDoc(collection(db, "ads"), {
            title, price, description, imageUrl: arr,
        })
        alert("Succesfully Add Post")

    } catch (error) {
        alert(error.message);
    };
}

//GET ADD FROKM 
export async function getAds() {
    const querySnapshot = await getDocs(collection(db, "ads"))
    const ads = []
    querySnapshot.forEach((doc) => {
        const ad = doc.data()
        ad.id = doc.id

        ads.push(ad)
    })
    return ads
};

export async function ProfileData() {
    const querySnapshot = await getDocs(collection(db, "user"))
    const postAds = []
    querySnapshot.forEach((doc) => {
        const dat = doc.data()
        dat.id = doc.id

        postAds.push(dat)
    })
    return postAds
};
ProfileData()


//GET ID OF ADS
export const getDataid = async (addId) => {
    const docRef = doc(db, "ads", addId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const addd = docSnap.data();
        addd.id = docSnap.id;
        console.log(addd, "ad")
        return addd;

    } else {
        console.error("No such document!");
        return null;

    }

};




export async function updateUserData(e, img) {
    const userd = e[0]
    try {

        //Step 1: Storage me file/image ko  upload krna
        const storageRef = ref(storage, `user/${img.name}`)
        await uploadBytes(storageRef, img);
        //Step 2: Us image ka url get krna
        const url = await getDownloadURL(storageRef);
        //Step 3: Db ma Data add krna
        await addDoc(collection(db, "user"), {
            fullname: userd.fullname, age: userd.age, email: userd.email, imgUrl: url,
        });
        const ver = await deleteDoc(doc(db, "user", userd.id))
        console.log('ver', ver)
        alert("Succesfully Updated")

    } catch (error) {
        alert(error.message);
    };
    console.log("userd", userd)

}
