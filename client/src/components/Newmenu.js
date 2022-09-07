import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Newmenu = () => {
    const [newmenuName, setNewmenuName] = useState("");
    const [newmenuPrice, setNewmenuPrice] = useState("");
    const [newmenuImg, setNewmenuImg] = useState("");
    const [newmenuList, setNewmenuList] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:8080/menu/newmenu").then((response)=>{
            setNewmenuList(response.data);
        })
    },[])
    
    Axios.post("http://localhost:8080/menu/newmenu", {
            newmenuName: newmenuName,
            newmenuPrice: newmenuPrice,
            newmenuImg: newmenuImg
        }).then(()=>{
            console.log("successful select");
        })
    return (
        <>
        <div className="menu_main_title">신메뉴</div>
        <ul>
            {newmenuList.map((val)=>{
                return (
                    <li>
                        <div><img src={val.newmenuImg} /></div>
                        <p>{val.newmenuName}</p>
                        <p>{val.newmenuPrice}</p>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default Newmenu;