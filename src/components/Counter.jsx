import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    //const[상태변수, 상태변경함수] = useState(초기값);

    return (
        <div>
            <p>현재 숫자 : {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}

export default Counter;