import { useEffect, useState } from "react"

export const useFetch = (apiPath,queryTerm="") => {
    const [data,setData]=useState([]);
    console.log(process.env.REACT_APP_API_KEY);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

    useEffect(()=>{
        async function fetchData() {
            const response= await fetch(url);
            const json=await response.json();
            setData(json.results);
        }
        fetchData();
    },[url])
    return {data}
}
