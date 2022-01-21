import { Button, Col, Container, Row } from "react-bootstrap";
import Navigation from "../Components/Navigation";
import { useEffect, useState } from "react";

const ChatPage = () => {

    const [data, setData] = useState([]);
    let user = JSON.parse(localStorage.getItem('user-info'));
    const [text, setText] = useState("");

    useEffect(async () => {
        showMess();
    }, )

    async function showMess() {
        let result = await fetch("http://localhost:8000/api/listmessages");
        result = await result.json();
        setData(result);
    }

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

    async function addMess() {

        if (checkInput(text) === false) {
            alert("* \" \' < are forbbiden charakters");
        } else {
            const formData = new FormData();
            formData.append('text', text);
            formData.append('user_name', user.name);

            if (text) {
                let result = await fetch("http://localhost:8000/api/addmessage", {
                    method: 'POST',
                    body: formData,
                });
                showMess();
            } else {
                alert("empty message");
            }
        }
    }

    return (
        <>
            <Navigation />
            <br /> <br />
            <Container>
                <Row>
                    <Col>

                        <section>

                            <div className="chatContainer">
                                <div className="chatHeader">
                                    <p>Chat bazar</p>
                                </div>
                                <div className="chatBody">
                                    {
                                        data.map((item) =>
                                            item.user_name == user.name ?
                                                <p className="message myMassage">{item.text}</p> : <p className="message "><b>{item.user_name}:</b> {item.text}</p>
                                        )
                                    }
                                </div>
                                <div>
                                </div>
                                <div className="chatFooter">
                                    <input type="text" placeholder="message text" onChange={(e) => setText(e.target.value)} ></input>
                                    <Button onClick={addMess}>send</Button>
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ChatPage;