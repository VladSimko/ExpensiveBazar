import { useEffect, useState } from "react";
import Navigation from "../Components/Navigation";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



const RegistrationPage = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('/listpage')
        }
    }, [])

    async function registration() {
        let item = { name, password, email };
        let result = await fetch("http://127.0.0.1:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push("/listpage");
    }

    return (
        <>
            <Navigation />
            <div className="bodyLogin">
                <section className="bg_Color">
                    <h1>E-Bazar</h1>
                    <h3>Registration</h3>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <input type="submit" onClick={registration} value="register" />
                    <a href="loginpage" className="buttonGreen">login</a>
                </section>
            </div>

        </>

    );
}

export default RegistrationPage;