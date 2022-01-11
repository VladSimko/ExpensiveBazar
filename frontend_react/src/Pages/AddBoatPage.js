import { useState } from "react"
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer"

const AddBoatPage = () => {

        const [file, setFile] = useState("");
        const [price, setPrice] = useState("");
        const [description, setDescription] = useState("");
        const [size, setSize] = useState("");
        const [name, setName] = useState("");
        const [kontakt, setKontakt] = useState("");

        let user = JSON.parse(localStorage.getItem('user-info'))

        async function addBoat() {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('price', price);
                formData.append('description', description);
                formData.append('size', size);
                formData.append('name', name);
                formData.append('kontakt', kontakt);
                formData.append('user_id', user.id);

                if (!isNaN(price) && !isNaN(size)) {
                        let result = await fetch("http://localhost:8000/api/addboat", {
                                method: 'POST',
                                body: formData
                        });
                        alert("Data has been saved");
                } else {
                        alert("Wrong DATA");
                }
        }

        return (
                <>
                        <Navigation />
                        <br /><br /><br />
                        <section>
                                <div className="container">
                                        <h2>Add BOAT</h2>
                                        <br />
                                        <div className="GreySection" >
                                                <div className="row">
                                                        <div className="col-sm-6 CenterTextGreySel">
                                                        <input type="text" className="form-control" placeholder="name"
                                                                        onChange={(e) => setName(e.target.value)}
                                                                /> <br />
                                                                <input type="text" className="form-control" placeholder="size"
                                                                        onChange={(e) => setSize(e.target.value)}
                                                                /> <br />
                                                                <input type="file" className="form-control" placeholder="file"
                                                                        onChange={(e) => setFile(e.target.files[0])} /> <br />
                                                                <input type="text" className="form-control" placeholder="price"
                                                                        onChange={(e) => setPrice(e.target.value)} /> <br />
                                                                        <input type="text" className="form-control" placeholder="kontakt"
                                                                        onChange={(e) => setKontakt(e.target.value)} /> <br />
                                                                <input type="text" className="form-control" placeholder="description"
                                                                        onChange={(e) => setDescription(e.target.value)} />
                                                                <button onClick={addBoat} className="btn btn-primary">Add boat</button>
                                                        </div>
                                                        <div class="col-sm-6">
                                                                <img src="https://cdn.pixabay.com/photo/2020/05/29/21/46/seascape-5236865_1280.jpg" className="ImgSelection" alt="boat" />
                                                        </div>
                                                </div>
                                        </div>


                                </div>
                        </section>
                        <Footer />
                </>
        )
}

export default AddBoatPage;