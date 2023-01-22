import Button from "./Button";
import styles from "App.module.css";
import {useState, useEffect} from "react";
/*useEffect는 두개의 argument를 가지는 function이다.
*   첫번째 argument는 우리가 딱 한번만 실행하고 싶은 코드가
*   두번째 argument는 빈 array*/
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  // const iRunOnlyOnce = () =>{
  //     console.log("i run only once.");
  // }
  // useEffect(iRunOnlyOnce, []);
  //  좀 더 쉬운 방법으로 실습 >

    useEffect(()=>{
        console.log("I run only once.");
    },[]); /*react.js 에게 아무것도 지켜보지 않게해서 단 한번만 실행된다.*/
    useEffect(()=> {
        if(keyword !== ""){
            console.log("I ren when 'keyword' changes.");
        }
    }, [keyword]); /* 두번째 argument에 keyword를 추가하면 해당 값이 변화할때 코드를 실행할거라고  react.js에게 알려주는 것이다.
                            따라서 우리는 component가 생성되는 첫 시작점뿐아니라 무언가를 update될때 해당 코드가 실행되도록 할 수 있게 되었다.*/
    useEffect(()=>{
        console.log("I run when 'counter' changes");
    }, [counter]);
    useEffect(()=>{
        console.log("I run when keyword & counter change");
    }, [keyword,counter]); /*두개 다 지켜보게 하기*/
  /*
    가끔 이 component 내부의 몇몇코드는, 예를 들어 api를 호출한다면 state의 변화에
    의해 계속 render되지 않게 강제하고 싶을 때가 있을 것이다.
    어떻게 하면 특정 코드들이 첫번째 component render에서만 단 한번만! 실행되게 할 수 있을까?

    정답은 effect!! userEffect를 사용하자.
    useEffect function은 우리 코드가 딱 한번만 실행 될 수 있도록 보호해준다.

    자, 이제 우리는 reactJS가 우리에게 언제 코드를 실행할지 안할지 결정할 tool을 제공한다는 걸 확인하고 알았다.
    다음 시간에 공부..
  * */
  return (
      <div>
          <input
              value={keyword}
              onChange={onChange}
              type="text"
              placeholder={"Search here..."}
          />
          <h1>{counter}</h1>
          <button onClick={onClick}>click me</button>
        <h1 className={styles.title}>Welcome back!</h1>
          <Button text={"Continue"} />
      </div>
  );
}

export default App;
