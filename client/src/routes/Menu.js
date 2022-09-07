import React, { useState } from 'react';
import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button } from 'react-bootstrap';
import Newmenu from "../components/Newmenu";
import Gogi from "../components/Gogi";
import Modum from "../components/Modum";
import Jungsik from "../components/Jungsik";
import Axios from 'axios';

const Menu = ()=>{
    const [content, setContent] = useState("Newmenu");

    const [gogiName, setGogiName] = useState("");
    const [gogiPrice, setGogiPrice] = useState("");
    const [gogiImg, setGogiImg] = useState("");
    const handleGogi = (e) => {
        const { name } = e.target;
        setContent(name);
        Axios.post("http://localhost:8080/menu/gogi", {
            gogiName: gogiName,
            gogiPrice: gogiPrice,
            gogiImg: gogiImg
        }).then(()=>{
            console.log("successful select");
        })
    };

    const [newmenuName, setNewmenuName] = useState("");
    const [newmenuPrice, setNewmenuPrice] = useState("");
    const [newmenuImg, setNewmenuImg] = useState("");
    const handleNewmenu = (e) => {
        const { name } = e.target;
        setContent(name);
        Axios.post("http://localhost:8080/menu/newmenu", {
            newmenuName: newmenuName,
            newmenuPrice: newmenuPrice,
            newmenuImg: newmenuImg
        }).then(()=>{
            console.log("successful select");
        })
    };

    const [modumName, setModumName] = useState("");
    const [modumPrice, setModumPrice] = useState("");
    const [modumImg, setModumImg] = useState("");
    const handleModum = (e) => {
        const { name } = e.target;
        setContent(name);
        Axios.post("http://localhost:8080/menu/modum", {
            modumName: modumName,
            modumPrice: modumPrice,
            modumImg: modumImg
        }).then(()=>{
            console.log("successful select");
        })
    };

    const [jungsikName, setJungsikName] = useState("");
    const [jungsikPrice, setJungsikPrice] = useState("");
    const [jungsikImg, setJungsikImg] = useState("");
    const handleJungsik = (e) => {
        const { name } = e.target;
        setContent(name);
        Axios.post("http://localhost:8080/menu/jungsik", {
            jungsikName: jungsikName,
            jungsikPrice: jungsikPrice,
            jungsikImg: jungsikImg
        }).then(()=>{
            console.log("successful select");
        })
    };

    const selectComponent = {
        Newmenu: <Newmenu />,
        Gogi: <Gogi />,
        Modum: <Modum />,
        Jungsik: <Jungsik />,
      };

    return (
        <div className='menu_body'>
            <div className="sidebar">
            <Accordion defaultActiveKey={['0']} >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>메뉴</Accordion.Header>
                        <Accordion.Body>
                            <Button onClick={handleNewmenu} name="Newmenu" variant="none">신메뉴</Button>
                        </Accordion.Body>
                    <Accordion.Body>
                        <Button onClick={handleGogi} name="Gogi" variant="none">고기고기</Button>
                    </Accordion.Body>
                    <Accordion.Body>
                        <Button onClick={handleModum} name="Modum" variant="none">모둠</Button>
                    </Accordion.Body>
                    <Accordion.Body>
                        <Button onClick={handleJungsik} name="Jungsik"  variant="none">정식</Button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
            <div className="menu_list">
                {content && 
                    <div className="menu">
                        {selectComponent[content]}
                    </div>
                }
                
            </div>
        </div>
    );
}

export default Menu;