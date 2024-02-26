import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "./App.css"
import "./index.css"

export default function Result(props) {
    const { search } = props;
    // const [dark, setMode] = useState(false) 
    const [city, setCity] = useState(null);
    // const [search, setSearch] = useState("karachi");
    const { Id } = useParams();
    console.log("id", Id);





    useEffect(() => {
        const fetchApi = async () => {
            const url = "https://api.openweathermap.org/data/2.5/weather?q=Pakistan&appid=46ac2283a1b407a0979c1ee2081ef26b";
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main, resJson.weather);
        
        };
        fetchApi();
    }, [Id]);
    console.log("e", search)

    return (
        <div className="resultDiv">
            {!city ? (

                <h1>load</h1>
            ) : (

                <>
                    <div className="result">
                        {/* <h1>feels_like {city.feels_like}</h1> */}
                        <h1>Humidity </h1><span>{city.humidity}</span>
                        <h1>Pressure </h1><span>{city.pressure}</span>
                        <h1>Temperature </h1><span>{city.temp}</span>
                        <h1>Max-Temperature </h1><span>{city.temp_max}</span>
                        {/* <h1>Min-Temp </h1><span>{city.temp_min}</span> */}
                    </div>
                </>
            )}
        </div>
    )
}