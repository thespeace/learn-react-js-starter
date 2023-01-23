import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";
/*useEffect는 react.js가 동작하는 관점에서 보면 일종의 방어막 같은 것이다.
  state를 변화시킬 때 component를 재실행시키는 것.
    두개의 argument를 가지는 function이다.
        첫번째 argument는 우리가 딱 한번만 실행하고 싶은 코드가
        두번째 argument는 dependencies(의존성, 또는 지켜보려는 것)! 즉 react.js에게 지켜보다가 해당 값이 변화하면 refresh할 수 있게 지켜볼 값을 기입해주면 된다.*/
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // const iRunOnlyOnce = () =>{
  //     console.log("i run only once.");
  // }
  // useEffect(iRunOnlyOnce, []);
  //  좀 더 쉬운 방법으로 실습 >

    useEffect(()=>{
        console.log("I run only once.");
    },[]); /*react.js가 지켜볼 대상이 없기때문에 "단 한번"만 실행된다.*/
    useEffect(()=> {
        if(keyword !== ""){
            console.log("I ren when 'keyword' changes.");
        }
    }, [keyword]); /* 두번째 argument에 keyword를 추가하면, 해당 값이 변화할때 코드를 실행할거라고 react.js에게 알려주는 것이다.
                            따라서 우리는 component가 생성되는 첫 시작점뿐아니라 무언가를 update될때 해당 코드가 실행되도록 할 수 있게 되었다.*/
    useEffect(()=>{
        console.log("I run when 'counter' changes");
    }, [counter]);
    /*useEffect(()=>{
        console.log("I run when keyword & counter change");
    }, [keyword,counter]); /!*두개 다 지켜보게 하기*!/*/
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
          <button text={"click me"} onClick={onClick}>click me</button>
        <h1 className={styles.title}>Welcome back!</h1>
          <Button text={"Continue"} />
      </div>
  );
}

/* cleanup function!
component의 생성과 삭제를 이용하여 해당 데이터를 수집할 수 있다. 예를들어 ga라던지.. 분석이 가능하다는 것! useEffect를 사용하면 가능하다.*/

function Hello(){
    /*useEffect(()=>{
        console.log("created :)");
        return () => console.log("destroyed :(");
    },[]);
    evolution ==> */

    /*const byFn=()=>{
        console.log("bye : (")
    }
    const hiFn = ()=>{
        console.log("created :)");
        return byFn; /!*React.js가 hiFn을 실행할 거고, component가 파괴될 때는 react.js는 hiFn이 return한 function(byFn)을 실행.*!/
    }
    useEffect(hiFn,[]);
    evolution ==>  */

    useEffect(()=>{
        console.log("hi :>");
        return ()=> console.log("bye :(");
    },[]);

    return <h1>Hello</h1>;
}

function App2() {
    const [showing, setShowing] = useState(false);
    const onClick =() => setShowing( (prev) => !prev);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

function ToDo() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === ""){
            return;
        }
        setToDo("");
        setToDos(currentArray => [toDo, ...toDos]) /*직전을 값(previous state || current state)을 받아 array에 넣기
                    1.값을 직접적으로 수정하는 방법
                    2.함수를 이용하여 값 받기 */
    };

    console.log(toDos);
    return(
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Writer your to do ...."
                />
                <button>Add To Do</button>
            </form>
        </div>
    )
}


// export default App;
export {App , App2, ToDo};