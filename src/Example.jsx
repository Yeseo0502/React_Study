import { useState } from "react";

export default function Counter(){
    const [count,setCount] = useState(0); //초기값 : 0
    const handePlus=()=>{
        setCount(count+1)
    }
    const hadleMinus=()=>{
        setCount(count-1)
    }
    return(
        <div>
            <h2>카운터</h2>
            <p>현재값 : {count}</p>

            <button onClick={handePlus}>+1</button>
            <button onClick={hadleMinus}>-1</button>
        </div>
    )
}

/*state 필요성
리액트에서 화면을 그릴때 변화하는 값을 다뤄야 하는 순간

html/js let count = 0; innerText로 바꾸면되지만 React는 리렌더링 흐름을 따름

이벤트 : 사용자가 화면과 상호작용할 떄 발생하는 시간!
버튼 클릭, 입력창에 글자 입력, 마우스 움직였을 떄, 키보드를 눌렀을 때
이 사건 이 일이 생기면 이 함수를 실행해! - > 이벤트 처리

1. 코드기 짧아짐(간결한 문법)
const double = x = > x*2
const add = (a,b) => a+b
2. this를 새로 바인딩 하지 않음
3. 변수처럼 다룸
*/