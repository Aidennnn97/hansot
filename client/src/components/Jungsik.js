import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Jungsik = () => {
    const jungsikName = "";
    const jungsikPrice = "";
    const jungsikImg = "";
    const [jungsikList, setJungsikList] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:8080/menu/jungsik", {
            jungsikName: jungsikName,
            jungsikPrice: jungsikPrice,
            jungsikImg: jungsikImg
        }).then((response)=>{
            setJungsikList(response.data);
            console.log("successful select");
        })
    },[])
    
    return (
        <>
        <div className="menu_main_title">정식시리즈</div>
        <ul>
            {jungsikList.map((val)=>{
                return (
                    <li key={val.id}>
                        <div><img src={val.jungsikImg} /></div>
                        <p>{val.jungsikName}</p>
                        <p>{val.jungsikPrice}</p>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default Jungsik;