# 한솥 메인, 메뉴, 가게찾기 페이지 구현

<img width="80%" src="./client/public/img/han.gif"/>

- HTML, CSS, React.js, Node.js, MySql
- html을 서버가 만들면 server-side rendering
- html을 react가 만들면 client-side rendering
- Axios: Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리 아다.
- 쉽게 말해서 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 Ajax와 더불어 사용한다.
- 이미 자바스크립트에는 fetch api가 있지만, 프레임워크에서 ajax를 구현할땐 axios를 쓰는 편이라고 보면 된다.
- npm install axios
axios({
  url: 'https://test/api/cafe/list/today', // 통신할 웹문서
  method: 'get', // 통신할 방식
  data: { // 인자로 보낼 데이터
    foo: 'diary'
  }
});
- npm install react-kakao-maps-sdk
  
# 참고
- https://apis.map.kakao.com/web/sample/keywordList/
- https://react-kakao-maps-sdk.jaeseokim.dev/