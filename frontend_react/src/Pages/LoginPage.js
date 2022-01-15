import Navigation from "../Components/Navigation";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";



const LoginPage = () => {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('/listpage')
        }
    }, [])

    function checkInput(p) {
        if (p.toString().includes("*")) {
            return false;
        }
        if (p.toString().includes("\"")) {
            return false;
        }
        if (p.toString().includes("\'")) {
            return false;
        }
        if (p.toString().includes("<")) {
            return false;
        }
        return true;
    }

    async function login() {
        let item = { email, password };

        if (checkInput(email) === false || checkInput(password) === false) {
            alert("* \" \' < are forbbiden charakters");
        } else {

            let result = await fetch("http://localhost:8000/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(item)
            });
            result = await result.json()
            localStorage.setItem("user-info", JSON.stringify(result))
            let user = JSON.parse(localStorage.getItem('user-info'))

            if (user.name === undefined) {
                alert("Wrong email or password")
                localStorage.clear();
            } else {
                history.push("/listpage")
            }
        }

    }

    return (
        <>
            <Navigation />
            <div className="bodyLogin">

                <section className="bg_Color">
                    <h1>E-Bazar</h1>
                    <h3>Login</h3>
                    <input type="text" name="username" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <input type="submit" onClick={login} name="submit" value="Login" />
                </section>

            </div>
        </>
    );
}

export default LoginPage;