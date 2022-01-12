import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner, Table } from "react-bootstrap";
import Navigation from "../Components/Navigation";
import Select from "react-select";
import { Link } from "react-router-dom";


const ListPage = () => {

    let listOfItems = [{ value: 0, label: "car" }, { value: 1, label: "house" }, { value: 2, label: "boat" }];

    const [data, setData] = useState([]);
    const [chooseItemLab, setChooseItemLab] = useState('');


    async function showData(e) {
        try{
            setChooseItemLab(e);
        if (e.value == 0) {
            setChooseItemLab('car')
            let result = await fetch("http://127.0.0.1:8000/api/listcar");
            result = await result.json();
            setData(result);
        }
        if (e.value == 1) {
            setChooseItemLab('house')
            let result = await fetch("http://127.0.0.1:8000/api/listhouse");
            result = await result.json();
            setData(result);
        }
        if (e.value == 2) {
            setChooseItemLab('boat')
            let result = await fetch("http://127.0.0.1:8000/api/listboat");
            result = await result.json();
            setData(result);
        }
        }catch(error){
            alert("ERROR with fetch: " + error);
        }
        
    }

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: 'black',
            padding: 20,
        }),
        singleValue: (provided, state) => {

            return { ...provided };
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
                    <Col sm={2} id="chooseItem"><Select styles={customStyles} options={listOfItems} onChange={(e) => showData(e)} /></Col>                          
                </Row>
                <br />



                <Table className="table">
                    <tr>
                        <td>{chooseItemLab == "house" ? "City" : "Name"}</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Image</td>
                    </tr>
                    {
                        data.map((item) =>
                            <Link to={chooseItemLab + "page/" + item.id} className='text-link'>
                                <tr id="list">
                                    <td>{chooseItemLab == "house" ? item.city : item.name}</td>
                                    <td>{item.price} €</td>
                                    <td>{item.description}</td>
                                    <td to={"carpage/" + item.id}><img style={{ width: 100 }, { height: 100 }} src={"http://localhost:8000/" + item.file_path} /></td>
                                </tr>
                            </Link>
                        )
                    }
                </Table>
            </Container>
        </>

    );

}

export default ListPage;