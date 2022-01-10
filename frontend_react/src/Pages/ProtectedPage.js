import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const ProtectedPage = (prop) =>{

    let Cmp = prop.Cmp
    const history = useHistory();

    useEffect(()=>{
        if(!localStorage.getItem('user-info')) {
            history.push("/registerpage")
        }
    });

    return(
        <>
        <Cmp />
        </>
    );
}

export default ProtectedPage;