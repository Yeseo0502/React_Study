import { useState } from "react";
export default function ToggleBox(){
    const[on,setOn] = useState(false)
    const toggle=()=>{
        setOn((prev) => !prev)
    }
    return(
        <div>
            <h2>토글 박스</h2>
            <button onClick={toggle}>{on ? "끄기" : "켜기"}</button>
        </div>
    )
    //삼항연산자(조건부엔딩)
    
}