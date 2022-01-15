import { useEffect, useState } from "react";
import { Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Navigation from "../Components/Navigation";





//const UpdateCar = (props) => {
function UpdateCar(props) 
{
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [kontakt, setKontakt] = useState('');
    const [description, setDescription] = useState('');
    const [model, setModel] = useState('');
    const [file, setFile] = useState('');
    const [data, setData] = useState([]);

    useEffect(async () => {
            let result = await fetch("http://localhost:8000/api/car/" + props.match.params.id);
            result = await result.json();
            setData(result);
            setName(result.name);
            setPrice(result.price);
            setKontakt(result.kontakt);
            setDescription(result.description);
            setModel(result.model);
            setFile(result.File);
        
    },[])

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

    async function updateCar(id) {
        if (checkInput(file) === false || checkInput(price) === false || checkInput(description) === false
                        || checkInput(model) === false || checkInput(name) === false || checkInput(kontakt) === false) {
                        alert("* \" \' < are forbbiden charakters");
          } else {

        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('kontakt', kontakt);
        formData.append('description', description);
        formData.append('model', model);
        formData.append('file', file);
        let result = await fetch("http://127.0.0.1:8000/api/updatecar/" + id + "?_method=PUT", {
            method: 'POST',
            body: formData
        });
        alert("Car has been updated");
    }

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
                            <img src={"http://127.0.0.1:8000/" + data.file_path} className="ImgSelection" alt="car" />
                        </div>
                        <input type="file" defaultValue={data.file_path} onChange={(e) => setFile(e.target.files[0])} /><br /> <br />
                        <Row>
                            <Col>
                            <input type="text" className="form-control" defaultValue={data.name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                            </Col>
                            <Col>
                            <input type="text" className="form-control" defaultValue={data.model} placeholder="model" onChange={(e) => setModel(e.target.value)}/>
                            </Col>
                        </Row>
                        
                        
                        
                         <hr />
                        <input type="text" className="form-control" defaultValue={data.price} placeholder="price"
                            onChange={(e) => setPrice(e.target.value)} /> <br />
                        <input type="text" className="form-control" defaultValue={data.kontakt} placeholder="kontakt"
                            onChange={(e) => setKontakt(e.target.value)} /> <br />
                        <input type="text" className="form-control" defaultValue={data.description} placeholder="description"
                            onChange={(e) => setDescription(e.target.value)} />

                        <button onClick={() => updateCar(data.id)} className="btn btn-primary">update Car</button>
                        
                    </Col>
                    <Col></Col>
                </Row>
                <br /><br />
            </Container>

        </>
    )
}

export default withRouter(UpdateCar);