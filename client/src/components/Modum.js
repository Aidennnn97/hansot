import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Modum = () => {
    const modumName = "";
    const modumPrice = "";
    const modumImg = "";
    const [modumList, setModumList] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:8080/menu/modum", {
            modumName: modumName,
            modumPrice: modumPrice,
            modumImg: modumImg
        }).then((response)=>{
            setModumList(response.data);
            console.log("successful select");
        })
    },[])

    return (
        <>
        <div className="menu_main_title">모둠시리즈</div>
        <ul>
            {modumList.map((val)=>{
                return (
                    <li key={val.id}>
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
