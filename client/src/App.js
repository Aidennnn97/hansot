import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './Router';

function App() {
  return (
    <div className="body">
      <AppRouter />
      <footer>
        <div className="inner">
          <ul className="menu">
            <li><a href="#">개인정보처리방침</a></li>
            <li><a href="#">영상정보처리기기 운영관리 방침</a></li>
            <li><a href="#">홈페이지 이용약관</a></li>
            <li><a href="#">위치정보 이용약관</a></li>
            <li><a href="#">카드 이용약관</a></li>
            <li><a href="#">윤리경영 핫라인</a></li>
          </ul>
          
          <div className="info">
            <span>사업자등록번호 201-81-21515</span>
            <span>대표이사 이영덕, 이하림</span>
            <span>TEL : 02) 3015-1100 / FAX : 02) 3015-1106</span>
            <span>개인정보 책임자 : 강기원</span>
          </div>

          <p className="copyright">
            <span className="this-year"></span> COPYRIGHT&copy;(주)한솥. All Rights Reseved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
