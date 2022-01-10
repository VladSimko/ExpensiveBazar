import { useState } from "react"
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer"

const AddHousePage = () => {

        const [file, setFile] = useState("");
        const [price, setPrice] = useState("");
        const [description, setDescription] = useState("");
        const [city, setCity] = useState("");
        const [size, setSize] = useState("");

        let user = JSON.parse(localStorage.getItem('user-info'))

        async function addHouse() {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('price', price);
                formData.append('city', city);
                formData.append('description', description);
                formData.append('size', size);
                formData.append('user_id', user.id);

                if (!isNaN(price) && !isNaN(size)) {
                        let result = await fetch("http://localhost:8000/api/addhouse", {
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
                                        <h2>Add HOUSE</h2>
                                        <br />
                                        <div className="GreySection" >
                                                <div className="row">
                                                        <div className="col-sm-6 CenterTextGreySel">
                                                                <input type="text" className="form-control" placeholder="city"
                                                                        onChange={(e) => setCity(e.target.value)}
                                                                /> <br />
                                                                <input type="text" className="form-control" placeholder="size"
                                                                        onChange={(e) => setSize(e.target.value)}
                                                                /> <br />
                                                                <input type="file" className="form-control" placeholder="file"
                                                                        onChange={(e) => setFile(e.target.files[0])} /> <br />
                                                                <input type="text" className="form-control" placeholder="price"
                                                                        onChange={(e) => setPrice(e.target.value)} /> <br />
                                                                <input type="text" className="form-control" placeholder="description"
                                                                        onChange={(e) => setDescription(e.target.value)} />
                                                                <button onClick={addHouse} className="btn btn-primary">Add house</button>
                                                        </div>
                                                        <div class="col-sm-6">
                                                                <img src="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg" className="ImgSelection" alt="house" />
                                                        </div>
                                                </div>
                                        </div>


                                </div>
                        </section>
                        <Footer />
                </>
        )
}

export default AddHousePage;