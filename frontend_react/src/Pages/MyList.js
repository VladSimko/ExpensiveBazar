import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../Components/Navigation";






const MyList = () => {

    const [dataCar, setDataCar] = useState([]);
    const [dataHouse, setDataHouse] = useState([]);
    const [dataBoat, setDataBoat] = useState([]);
    let user = JSON.parse(localStorage.getItem('user-info'))

    useEffect( () => {
        getList();
        
    },[])
   

   

    async function getList()
    {
        try {

            let resultC = await fetch("http://127.0.0.1:8000/api/listcar");
            resultC = await resultC.json();
            setDataCar(resultC);

            let resultH = await fetch("http://127.0.0.1:8000/api/listhouse");
            resultH = await resultH.json();
            setDataHouse(resultH);

            let resultB = await fetch("http://127.0.0.1:8000/api/listboat");
            resultB = await resultB.json();
            setDataBoat(resultB);

        } catch (error) {
            alert("ERROR with fetch: " + error);
        }
    }

    async function deleteCard(apiPath)
    {
            let result = await fetch(apiPath,{
                method:'DELETE'
            });
            result = await result.json();
            getList();
    }


    return (
        <>
            <Navigation />
            <h1>My list</h1>
            <br />
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        {
                            dataCar.map((item) =>
                                item.user_id == user.id ?
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={"http://127.0.0.1:8000/" + item.file_path} />
                                        <Card.Body className="cardBody">
                                            <Card.Title>{item.name} {item.model}</Card.Title>
                                            <hr />
                                            <Card.Text>
                                                <p><b>Price:</b> {item.price} €</p>
                                                <p><b>Contact:</b> {item.kontakt}</p>
                                                <p>{item.description}</p>
                                            </Card.Text>
                                           <Link to={"updatecar/"+item.id}><Button variant="warning">Update</Button></Link>
                                            <Button variant="danger" onClick={()=>deleteCard("http://127.0.0.1:8000/api/deletecar/"+item.id)}>Delete</Button>
                                        </Card.Body>
                                    </Card> : null
                            )
                        }
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        {
                            dataHouse.map((item) =>
                                item.user_id == user.id ?
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={"http://127.0.0.1:8000/" + item.file_path} />
                                        <Card.Body className="cardBody">
                                            <Card.Title>House</Card.Title>
                                            <hr />
                                            <Card.Text>
                                                <p><b>City:</b> {item.city}</p>
                                                <p><b>Price:</b> {item.price} €</p>
                                                <p><b>Size:</b> {item.size}</p>
                                                <p><b>Contact:</b> {item.kontakt}</p>
                                                <p>{item.description}</p>
                                            </Card.Text>
                                            <Link to={"updatehouse/"+item.id}><Button variant="warning">Update</Button></Link>
                                            <Button variant="danger" onClick={()=>deleteCard("http://127.0.0.1:8000/api/deletehouse/"+item.id)}>Delete</Button>
                                        </Card.Body>
                                    </Card> : null
                            )
                        }
                    </Col>
                    <Col sm={12} lg={4}>
                        {

                            dataBoat.map((item) =>
                                item.user_id == user.id ?
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={"http://127.0.0.1:8000/" + item.file_path} />
                                        <Card.Body className="cardBody">
                                            <Card.Title>{item.name}</Card.Title>
                                            <hr />
                                            <Card.Text>
                                                <p><b>Price:</b> {item.price} €</p>
                                                <p><b>Size:</b> {item.size}</p>
                                                <p><b>Contact:</b> {item.kontakt}</p>
                                                <p>{item.description}</p>
                                            </Card.Text>
                                            <Link to={"updateboat/"+item.id}><Button variant="warning">Update</Button></Link>
                                            <Button variant="danger" onClick={()=>deleteCard("http://127.0.0.1:8000/api/deleteboat/"+item.id)}>Delete</Button>
                                        </Card.Body>
                                    </Card> : null

                            )
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MyList;