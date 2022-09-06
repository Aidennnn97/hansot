import React, { useState } from 'react';
import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button } from 'react-bootstrap';
import Newmenu from "../components/Newmenu";
import Gogi from "../components/Gogi";
import Modum from "../components/Modum";
import Jungsik from "../components/Jungsik";


const Menu = ()=>{

    const [content, setContent] = useState("Newmenu");

    const handleClickButton = (e) => {
        const { name } = e.target;
        setContent(name);
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
                            <Button onClick={handleClickButton} name="Newmenu" variant="none">신메뉴</Button>
                        </Accordion.Body>
                    <Accordion.Body>
                        <Button onClick={handleClickButton} name="Gogi" variant="none">고기고기</Button>
                    </Accordion.Body>
                    <Accordion.Body>
                        <Button onClick={handleClickButton} name="Modum"  variant="none">모둠</Button>
                    </Accordion.Body>
                    <Accordion.Body>
                        <Button onClick={handleClickButton} name="Jungsik"  variant="none">정식</Button>
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