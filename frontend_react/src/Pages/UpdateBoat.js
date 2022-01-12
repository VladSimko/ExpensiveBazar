import { useEffect, useState } from "react";
import { Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Navigation from "../Components/Navigation";





//const UpdateCar = (props) => {
function UpdateBoat(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [kontakt, setKontakt] = useState('');
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');
    const [file, setFile] = useState('');
    const [data, setData] = useState([]);

    useEffect(async () => {
        let result = await fetch("http://localhost:8000/api/boat/" + props.match.params.id);
        result = await result.json();
        setData(result);
        setName(result.name);
        setPrice(result.price);
        setKontakt(result.kontakt);
        setDescription(result.description);
        setSize(result.size);
        setFile(result.File);


    }, [])

    async function updateBoat(id) {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('kontakt', kontakt);
        formData.append('description', description);
        formData.append('size', size);
        formData.append('file', file);
        let result = await fetch("http://127.0.0.1:8000/api/updateboat/" + id + "?_method=PUT", {
            method: 'POST',
            body: formData
        });
        alert("Boat has been updated");
    }

    return (
        <>
            <Navigation />
            <br /><br />
            <Container>
                <Row>
                    <Col></Col>
                    <Col className="bigUpdateCard">
                        <div>
                            <br />
                            <img src={"http://127.0.0.1:8000/" + data.file_path} className="ImgSelection" alt="boat" />
                        </div>
                        <input type="file" defaultValue={data.file_path} onChange={(e) => setFile(e.target.files[0])} /><br /> <br />

                        <input type="text" className="form-control" defaultValue={data.name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        <hr />
                        <input type="text" className="form-control" defaultValue={data.size} placeholder="size" onChange={(e) => setSize(e.target.value)} />
                        <input type="text" className="form-control" defaultValue={data.price} placeholder="price"
                            onChange={(e) => setPrice(e.target.value)} /> <br />
                        <input type="text" className="form-control" defaultValue={data.kontakt} placeholder="kontakt"
                            onChange={(e) => setKontakt(e.target.value)} /> <br />
                        <input type="text" className="form-control" defaultValue={data.description} placeholder="description"
                            onChange={(e) => setDescription(e.target.value)} />

                        <button onClick={() => updateBoat(data.id)} className="btn btn-primary">update Boat</button>

                    </Col>
                    <Col></Col>
                </Row>
                <br /><br />
            </Container>

        </>
    )
}

export default withRouter(UpdateBoat);