import Card from '../../components/card';
import Navbar from '../../components/navbar';
import Slider from '../../components/slider+cat/slider';
import Footer from '../../components/footer';
import { auth, ProfileData, updateUserData, getCurrentUserUID, getAds, getuser } from "../../Config/Firebase";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import './index.css'
import { useEffect } from 'react';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header';
// import Result from "./view/result";
// import "./App.css"


export default function Dashboard() {
    const nevigate = useNavigate()
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        productData()
    }, []);


    const productData = async () => {
        const Adds = await getAds()
        console.log("getData", Adds)
        setApiData(Adds)
    }
    return (

        <div className="">
            <Header />
            {<Navbar />}
            {<Slider />}

            <div className='container-fluid'>
                <div className='row'>
                    {apiData.map((item, index) => (

                        <Card title={apiData[index].title} id={apiData[index].id} price={apiData[index].price}
                            description={apiData[index].description} image={apiData[index].imageUrl} />

                    ))}

                </div>
            </div>
            <br /><br />
            {<Footer />}

        </div>
    )

};
