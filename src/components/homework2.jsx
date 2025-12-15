import { useState } from "react";
export default function homework2({name = "익명", hobby = "폰하기", likeEat = "치킨"}) {
    const [like,setLike] = useState(0); //초기값 : 0
    const[on,setOn] = useState(false)
    const[text,setText] = useState("");
    const like_btn=()=>{
        setLike(like+1);
    }
    const toggle=()=>{
        setOn((prev) => !prev)
    }
    const handleChange=(e) => {
        setText(e.target.value)
    }
    return(
        <div>
            <h3>{name}</h3>
            <h4>취미 : {hobby}</h4>
            <h4>좋아하는 음식 : {likeEat}</h4>
            <p>❤️‍🔥 : {like}</p>
            <button onClick={like_btn}>좋아요</button>
            <p></p>
            <h2>비밀번호</h2>
            <input 
                value={text}
                onChange={handleChange}
                type={on? "text" : "password"}
            />
            <button onClick={toggle}>{on ? "숨기기" : "보이기"}</button>
        </div>
    )
}
// export default homework3; 