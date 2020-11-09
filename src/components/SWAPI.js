import React, { Component,useEffect, useState  } from 'react';
import TextoH1 from '../TextoH1';
import axios from 'axios';
const SWAPI = ()=> {
    const [swapi, setSwapi] = useState([]);
    useEffect(() => {

        
        axios.get("https://swapi.dev/api/people/")
        .then(response=>{
            console.log(response.data.results)
            setSwapi(response.data.results)
        })
        .catch(error=>{
            console.log(error)
        })

      }, []);
    return(
        <div className="App">
            <h1>Personas</h1>
            {swapi.map((data)=>(
               <div key={data.name}>
               {data.name} - {data.gender}- {data.height}
               </div> 
            ))}
        </div>
    );
};

export default SWAPI;
