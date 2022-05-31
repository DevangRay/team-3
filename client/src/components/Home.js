import axios from 'axios'
import { useState, useEffect } from 'react';

export default function Home() {
    const [data, setData] = useState();
    var url = window.location.href;
    url = url.replace("http://localhost:3000/home?code=", "")
    var index  = url.indexOf("state")
    var state = url.slice(index + 6);
    var code = url.slice(0, index);

    useEffect ( () => {
        axios.post("http://localhost:9000/callback", {
            state:state,
            code:code
          })
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((err) => {console.log(err)})
    }, [code])
    return(
        <>
            <p>You are home!</p>
            <p>Code: {code}</p>
            <p>State: {state}</p>
        </>
    );
}