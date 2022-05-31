import { Button } from "@mui/material";

export default function Login() {

    function authenticate() {
        fetch("http://localhost:9000/login")
        .then((res) => res.text())
        .then((text) => window.open(text))
        .catch((err) => console.log(err))
    }

    return(
        <>
            <Button onClick={authenticate}>Click here to Enter</Button>
            <p>You are at Login page</p>
        </>
    );
}

