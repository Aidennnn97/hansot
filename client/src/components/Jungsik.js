import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Jungsik = () => {
    return (
        <>
        <div className="menu_main_title">정식시리즈</div>
        <ul>
            <li><div><img src="./img/jungsik1.jpeg" /></div></li>
            <li><div><img src="./img/jungsik2.jpeg" /></div></li>
            <li><div><img src="./img/jungsik3.jpeg" /></div></li>
            <li><div><img src="./img/jungsik4.jpeg" /></div></li>
            <li><div><img src="./img/jungsik5.jpeg" /></div></li>
        </ul>
        </>
    )
}

export default Jungsik;