import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Newmenu = () => {
    const newmenuName = "";
    const newmenuPrice = "";
    const newmenuImg = "";
    const [newmenuList, setNewmenuList] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:8080/menu/newmenu", {
            newmenuName: newmenuName,
            newmenuPrice: newmenuPrice,
            newmenuImg: newmenuImg
        }).then((response)=>{
            setNewmenuList(response.data);
            console.log("successful select");
        })
    },[])
    
    return (
        <>
        <div className="menu_main_title">신메뉴</div>
        <ul>
            {newmenuList.map((val)=>{
                return (
                    <li key={val.id}>
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