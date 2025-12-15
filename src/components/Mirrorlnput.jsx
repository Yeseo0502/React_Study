import { useState } from "react";

export default function MirrorInput() {
    const[text,setText] = useState("")
    const handleChange=(e) => {
        setText(e.target.value)
    }
    const handleReset=()=>{
        setText("")
    }
    return(
        <div>
            <h2>입력한 값이 그대로 나와요!</h2>
            <input  
                value={text}
                onChange={handleChange}
                placeholder="여기에 입력해보세요."
            />
            <button onClick={handleReset}>초기화</button>
            <p>당신이 입력한 값은 <strong>{text}</strong>입니다.</p>
        </div>
    )
}