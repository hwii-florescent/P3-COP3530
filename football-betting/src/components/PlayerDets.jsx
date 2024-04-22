import React, {useEffect,useState} from "react";

import axios from 'axios';
const PlayerDets = ({filename})=>
{
    console.log('PlayerDets component rendered');
    console.log('Filename received in PlayerDets:', filename);


    const [data,setData]=useState(null);
    useEffect (()=>
{
    const fetchDat=async()=>
    {
        try
        {
            console.log(filename);
            const filenameString = filename.filename; 
            const respDat = await axios.get(`/api/${filenameString}`);
            // const jsonData = await respDat.json();
                setData(respDat.data);
                // console.log(respDat)
                // setData(respDat.default);
                // console.log(filename);
                // console.log(respDat.default);
                // const jsonData = await response.json();
                // setData(jsonData);
                console.log(respDat.data)
                

        }
        catch (error)
        {
            console.error("error in fetching data ",error)
        }
      
    }
    fetchDat();
},[filename]);
return (
    <div className="player-details">
        {data && (
        <>
          <p>{data}</p>
        </>
      )}
    </div>

)
};
export default PlayerDets;

