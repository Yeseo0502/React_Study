export default function homework3({state}){
    const label= (state === "정상") ? "제출 성공" : (state==="지각")? "늦게 제출함" : "누락됨";
    const color = state === "정상" ? "green" : state === "지각" ? "yellow" : "red";
    return(
        <span style={{background: color, color: "white", padding: "4px 8px",borderRadius: 8}}>
            {label}
        </span>
    )   
}