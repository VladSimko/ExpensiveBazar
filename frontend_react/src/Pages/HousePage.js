import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../Components/Navigation";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";




const HousePage = (props) => {

    const [data, setData] = useState([]);

    useEffect(async () => {
        let result = await fetch("http://127.0.0.1:8000/api/house/" + props.match.params.id);
        result = await result.json();
        setData(result);
    })

    return (
        <>
            <Navigation />
            <br /><br />
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"http://127.0.0.1:8000/" + data.file_path} />
                            <Card.Body className="cardBody">
                                <Card.Title>House</Card.Title>
                                <hr />
                                <Card.Text>
                                    <p><b>City:</b> {data.city}</p>
                                    <p><b>Price:</b> {data.price} €</p>
                                    <p><b>Size:</b> {data.size}</p>
                                    <p><b>Contact:</b> {data.kontakt}</p>
                                    <p>{data.description}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>


        </>
    )
}

export default withRouter(HousePage);