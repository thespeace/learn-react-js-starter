import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}) {
    return <button className={styles.btn}>{text}</button>;
    /*html class에는 무작위적인 랜덤 class를 받아볼 수 있다.*/
}
export default Button; /*App.js에서 Button을 가져올 수 있게 하도록!*/

Button.propTypes = {
    text : PropTypes.string.isRequired,
}

/*
    npm이란?
        Node : Node Js / Packaged : 모듈이라고도 불리는데 패키지나 모듈은 프로그램보다는 조금 작은 단위의 기능들을 의미
        Manager : 관리자
    Node js로 만들어진 package(module)을 관리해주는 툴! 즉, Node js로 만들어진 모듈을 웹에서 받아서 설치하고 관리해주는 프로그램!
    Java와 비교하자면 메이븐과 비슷한 역할! 그리고 거기서 그치는 것이 아니라 이 모듈들을 활용했다면 이후에 그 모듈을 만든
    개발자가 업데이트를 한다면 알아서 체크해준다.

    PropTypes checking Setup! npm 활용!
    PropTypes install ( npm i prop-types ) > PropTypes import > 끝! 마음껏 사용하기
*/