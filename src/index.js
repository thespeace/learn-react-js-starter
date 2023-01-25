import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import {App, App2, ToDo, Coin, Movie} from './App'; /*js를 쓸때는 무조건 중괄호안에 넣어야한다 { } */

const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
const todo = ReactDOM.createRoot(document.getElementById('todo'));
const coin = ReactDOM.createRoot(document.getElementById('coin'));
const movie = ReactDOM.createRoot(document.getElementById('movie'));
root.render(
  /*<React.StrictMode> 리엑트에서 제공하는 검사 도구, 개발 모드일때만 디버그하며 해당 태그로 감싸져 있는 부분은 자손까지 검사를 한다.
  </React.StrictMode> 안전하지 않은 생명주기를 가진 컴포넌트라든지, 권장되지 않는 부분이 있다든지 배포 후 문제가 될만한 이슈들을 미리 잡는 모드라고 보면 되겠다.*/
    <App />
);
root2.render(
    <App2 />
);
todo.render(
    <ToDo />
);
coin.render(
    <Coin />
);
movie.render(
    <Movie />
);

