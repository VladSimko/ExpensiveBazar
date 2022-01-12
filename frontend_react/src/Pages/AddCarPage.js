import { useState } from "react"
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer"

const AddCarPage = () => {

        const [name, setName] = useState("");
        const [file, setFile] = useState("");
        const [price, setPrice] = useState("");
        const [kontakt, setKontakt] = useState("");
        const [description, setDescription] = useState("");
        const [model, setModel] = useState("");
        let user = JSON.parse(localStorage.getItem('user-info'))

        async function addCar() {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('price', price);
                formData.append('name', name);
                formData.append('description', description);
                formData.append('model', model);
                formData.append('kontakt', kontakt);
                formData.append('user_id', user.id);

                if (!isNaN(price) && file && price && description && name && name && kontakt) {
                        let result = await fetch("http://localhost:8000/api/addcar", {
                                method: 'POST',
                                body: formData,
                                
                        });
                        alert("Data has been saved");
                } else {
                        alert("Wrong DATA or everything must be filled ");
                }
        }

        return (
                <>
                        <Navigation />
                        <br /><br /><br />
                        <section>
                                <div className="container">
                                        <h2>Add CAR</h2>
                                        <br />
                                        <div className="GreySection" >
                                                <div className="row">
                                                        <div className="col-sm-6 CenterTextGreySel">
                                                                <input type="text" className="form-control" placeholder="name"
                                                                        onChange={(e) => setName(e.target.value)}
                                                                /> <br />
                                                                <input type="text" className="form-control" placeholder="model"
                                                                        onChange={(e) => setModel(e.target.value)}
                                                                /> <br />
                                                                <input type="file" className="form-control" placeholder="file"
                                                                        onChange={(e) => setFile(e.target.files[0])} /> <br />
                                                                <input type="text" className="form-control" placeholder="price"
                                                                        onChange={(e) => setPrice(e.target.value)} /> <br />
                                                                <input type="text" className="form-control" placeholder="kontakt"
                                                                        onChange={(e) => setKontakt(e.target.value)} /> <br />
                                                                <input type="text" className="form-control" placeholder="description"
                                                                        onChange={(e) => setDescription(e.target.value)} />
                                                                <button onClick={addCar} className="btn btn-primary">Add Car</button>
                                                        </div>
                                                        <div class="col-sm-6">
                                                                <img src="https://cdn.pixabay.com/photo/2016/05/06/16/32/car-1376190_1280.jpg" className="ImgSelection" alt="car" />
                                                        </div>
                                                </div>
                                        </div>


                                </div>
                        </section>
                        <Footer />
                </>
        )
}

export default AddCarPage;