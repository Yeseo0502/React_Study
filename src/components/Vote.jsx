import { useState } from "react";
function Vote(props){
    const [yes,setYes] = useState(0);
    const [no,setNo] = useState(0);
    let answer = yes+no;
    return (
        <div style={{
            backgroundColor: "white",
            padding: "24px",
            margin: "20px",
            borderRadius: "10px"
        }}>
            <h3 style={{
                color: "black"
            }}>{props.question}</h3>
            <p style={{
                color: "green",
                margin: "4px"
            }}>찬성 {yes}표</p>
            <p style={{
                color: "red"
            }}>반대 {no}표</p>
            <hr />
            <p style={{
                color: "gray"
            }}>총 {answer}명 참여</p>
            <button onClick={() => setYes(yes+1)} style={{
                backgroundColor: "green",
                color: "white"
            }}>👍찬성</button>
            <button onClick={() => setNo(no+1)} style={{
                backgroundColor: "red",
                color: "white"
            }}>👎반대</button>
        </div>
    )
}
export default Vote;