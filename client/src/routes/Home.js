import React from 'react';
import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, Button } from 'react-bootstrap';


const Home = ()=>{ 
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="main_top_img"
                    src="img/main01.jpg"
                    alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="main_top_img"
                    src="img/main02.jpg"
                    alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="main_top_img"
                    src="img/main05.jpg"
                    alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
                
            <div className="mid">
                <Card style={{ width: '500px' }}>
                <Card.Img variant="top" src="img/main07.jpg" />
                <Card.Body>
                    <Card.Text>
                    가격 이상의 가치가 담긴 
                    </Card.Text>
                    <Card.Text>
                    다양한 메뉴를 확인해 보세요
                    </Card.Text>
                    <Button variant="link">한솥 메뉴</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '500px' }}>
                <Card.Img variant="top" src="img/main07.jpg" />
                <Card.Body>
                    <Card.Text>
                    갓 지은 한끼가 기다리고 있는
                    </Card.Text>
                    <Card.Text>
                    가까운 한솥 매장을 찾아보세요
                    </Card.Text>
                    <Button variant="link">주변점포찾기</Button>
                </Card.Body>
                </Card>
            </div>

            <div className="mid">
                <Card style={{ width: '310px' }}>
                <Card.Body>
                    <Card.Text>
                    <h2>가맹점주에게도</h2>
                    </Card.Text>
                    <Card.Text>
                    <h2>든든한 한솥입니다</h2>
                    <h1>ㅡ</h1>
                    </Card.Text>
                    <Card.Text>
                    <h6>점주님들의 꿈을 실현시켜 드리기 위해</h6>
                    <h6>가맹점주와 성공까지 동행하는 한솥!</h6>
                    <h6>상담부터 개업까지 모든 희로애락을 함께 합니다.</h6>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '310px' }}>
                <Card.Img variant="top" src="img/main07.jpg" />
                <Card.Body>
                    <Card.Text>
                    한솥은 언제나 고객과 점주님들의
                    </Card.Text>
                    <Card.Text>
                    이익을 먼저 생각합니다
                    </Card.Text>
                    <Button variant="link">Why 한솥 가맹점</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '310px' }}>
                <Card.Img variant="top" src="img/main07.jpg" />
                <Card.Body>
                    <Card.Text>
                    한솥과 함께하는 가맹점주들의
                    </Card.Text>
                    <Card.Text>
                    성공 스토리입니다
                    </Card.Text>
                    <Button variant="link">성공수기</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
    );
}
export default Home;