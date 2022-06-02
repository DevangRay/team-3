// import { useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";
import {Helmet} from 'react-helmet';

export default function Error() {
    // const navigate = useNavigate();

    // const goBack = () => {
    //     navigate("/");
    // }
    
    return (
        <>
            <Helmet><title>Error</title></Helmet>
            <h1>Error</h1>
            <p>Sorry there is has been an error</p>
            {/* <Button onClick={goBack}>Return to Home</Button> */}
        </>
    );
}