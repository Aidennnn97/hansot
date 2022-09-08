import React, {useState} from 'react';
import MapContainer from '../components/MapContainer';


const Store = ()=>{ 
    const [inputText, setInputText] = useState("");
    const [place, setPlace] = useState(""); // 검색한 장소값 저장

    const onChange = e => {
        setInputText(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setPlace(inputText);
        setInputText("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='검색어를 입력하세요' onChange={onChange} value={inputText} />
                <button type='submit'>검색</button>
            </form>
            <MapContainer searchPlace={place} />
        </>
    );
}

export default Store;