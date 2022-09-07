import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Modum = () => {
    const [modumName, setModumName] = useState("");
    const [modumPrice, setModumPrice] = useState("");
    const [modumImg, setModumImg] = useState("");
    const [modumList, setModumList] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:8080/menu/modum").then((response)=>{
            setModumList(response.data);
        })
    },[])

    Axios.post("http://localhost:8080/menu/modum", {
            modumName: modumName,
            modumPrice: modumPrice,
            modumImg: modumImg
        }).then(()=>{
            console.log("successful select");
        })
    return (
        <>
        <div className="menu_main_title">모둠시리즈</div>
        <ul>
            {modumList.map((val)=>{
                return (
                    <li>
                        <div><img src={val.modumImg} /></div>
                        <p>{val.modumName}</p>
                        <p>{val.modumPrice}</p>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default Modum;
