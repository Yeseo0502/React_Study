import { useState } from "react";
export default function homework2_1(){
    const[text,setText] = useState("");
    const Feeling=(i) => {
        setText(i.target.value)
    }
    return(
        <div>
        <h2>오늘의 기분은?</h2>
            <input
                value={text}
                onChange={Feeling}
                type="text" 
             />
             <p>오늘의 기분은 :
                {text === "happy"? "😂" : text === "sad"? "🥹" : text === "angry"? "😠" : "🔍"}
            </p>
        </div>
    )
}