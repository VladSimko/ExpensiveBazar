import Navigation from "../Components/Navigation";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import { useState } from "react";




const ProfilPage = () => {

    const history = useHistory();
    let user = JSON.parse(localStorage.getItem('user-info'))

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function deleteUser() {
        let result = await fetch("http://127.0.0.1:8000/api/deleteuser/" + user.id, {
            method: 'DELETE'
        });
        result = await result.json();
        localStorage.clear();
        history.push("/loginpage")
    }

    async function updateUser() {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        let result = await fetch("http://127.0.0.1:8000/api/updateuser/" + user.id + "?_method=PUT", {
            method: 'POST',
            body: formData,
        });
        localStorage.clear();
        history.push("/loginpage")
        alert("User has been updated");
    }

    return (
        <>
            <Navigation />
            <div className="profilBody">
                <div className="profileCard ">
                    <div className="cardHeader">
                        <div className="avatar">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profilPic" />
                        </div>
                        <hr />
                        <input type="text" className="form-control" defaultValue={user.name} placeholder="Name"
                            onChange={(e) => setName(e.target.value)} /> <br />
                        <input type="text" className="form-control" defaultValue={user.email} placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)} /> <br />
                        <input type="text" className="form-control" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} /> <br />
                        <a onClick={updateUser} className="upgradeBtn">Upgrade</a> <br />
                        <a onClick={deleteUser} className="deleteBtn">Delete</a>

                    </div>

                </div>
            </div>

        </>
    )
}

export default ProfilPage;