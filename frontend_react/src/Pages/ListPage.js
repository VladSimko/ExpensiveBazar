import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Navigation from "../Components/Navigation";
import Select from "react-select";
import Footer from "../Components/Footer";


const ListPage = () => {

    let listOfItems = [{ value: 0, label: "Cars" }, { value: 1, label: "Houses" }, { value: 2, label: "Boats" }];

    const [data, setData] = useState([]);
    const [chooseItemLab, setChooseItemLab] = useState(listOfItems.label);
    const [chooseItemVal, setChooseItemVal] = useState(listOfItems.value);


    // useEffect(async () => {
    //     if (chooseItemVal == 0) {
    //         let result = await fetch("http://127.0.0.1:8000/api/listcar");
    //         result = await result.json();
    //         setData(result);
    //     }

    // }, [])

    async function showData(e)
    {
        setChooseItemLab(e.label);
        if (e.value == 0) {
            let result = await fetch("http://127.0.0.1:8000/api/listcar");
            result = await result.json();
            setData(result);
        }
        if (e.value == 1) {
            let result = await fetch("http://127.0.0.1:8000/api/listhouse");
            result = await result.json();
            setData(result);
        }
        if (e.value == 2) {
            let result = await fetch("http://127.0.0.1:8000/api/listboat");
            result = await result.json();
            setData(result);
        }
    }



    return (
        <>
            <Navigation />
            <br />
            <h1>E-Bazar</h1>
            <hr />
            <br /><br />
            <Container>
                <Row>
                    <Col sm={2}>Choose item: </Col>
                    <Col sm={2}><Select options={listOfItems} onChange={(e)=>showData(e)} /></Col>
                    <Col><h2>{chooseItemLab}{chooseItemVal}</h2></Col>
                </Row>
                <br />



                <Table className="table">
                    <tr>
                        <td>Name/City</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Image</td>
                    </tr>
                    {
                        data.map((item) =>
                            <tr id="list">
                                <td>{item.name}</td>
                                <td>{item.price} €</td>
                                <td>{item.description}</td>
                                <td><img style={{ width: 100 }, { height: 100 }} src={"http://localhost:8000/" + item.file_path} /></td>
                            </tr>
                        )
                    }
                </Table>
            </Container>
            <Footer />
        </>

    );

}

export default ListPage;