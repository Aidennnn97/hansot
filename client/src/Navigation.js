import React from 'react';
import {Link} from 'react-router-dom';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (
            <nav className="nav">
                <div className="logo"><h1><Link className='home' to='/'>Home</Link></h1></div>
                <div className="navbar dropdown">

                    <div className="dropdown">
                <button className="dropbtn">BRAND 
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                <a href="#">브랜드 스토리</a>
                <a href="#">브랜드 철학</a>
                <a href="#">브랜드 유산</a>
                </div>
                    </div> 

                    <div className="dropdown">
                <button className="dropbtn">ESG 
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                <a href="#">ESG경영이란?</a>
                <a href="#">환경보호</a>
                <a href="#">사회공헌</a>
                </div>
                    </div> 

                    <div className="dropdown">
                        <button className="dropbtn">MENU 
                        <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <Link className='menu' to='/menu'>Menu</Link>
                            <a href="#">식재료 이야기</a>
                            <a href="#">페루찬차마요커피</a>
                        </div>
                    </div> 

                    <div className="dropdown">
                        <button className="dropbtn">STORE 
                        <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                        <Link className='store' to='/store'>주변점포찾기</Link>
                        </div>
                    </div> 

                    <div className="dropdown">
                        <button className="dropbtn">EVENT 
                        <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                        <a href="#">이 달의 이벤트</a>
                        <a href="#">신규점 오픈이벤트</a>
                        </div>
                    </div> 

                    <div className="dropdown">
                        <button className="dropbtn">FRANCHISE 
                        <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                        <a href="#">Why 한솥 가맹점</a>
                        <a href="#">성공수기</a>
                        <a href="#">창업개설절차</a>
                        </div>
                    </div> 

                    <div className="dropdown">
                        <button className="dropbtn">HANSOT 
                        <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                        <a href="#">한솥의 약속</a>
                        <a href="#">한솥의 비전</a>
                        <a href="#">연혁&수상</a>
                        </div>
                    </div> 
                </div> 
            </nav>
    );
}
export default Navigation;