import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Gogi = () => {
    const gogiName = "";
    const gogiPrice = "";
    const gogiImg = "";
    const [gogiList, setGogiList] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:8080/menu/gogi", {
            gogiName: gogiName,
            gogiPrice: gogiPrice,
            gogiImg: gogiImg
        }).then((response)=>{
            setGogiList(response.data);
            console.log("successful select");
        })
    },[])

    return (
        <>
        <div className="menu_main_title">고기고기시리즈</div>
        <ul>
            {gogiList.map((val)=>{
                return (
                    <li key={val.id}>
                        <div><img src={val.gogiImg} /></div>
                        <p>{val.gogiName}</p>
                        <p>{val.gogiPrice}</p>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default Gogi;
