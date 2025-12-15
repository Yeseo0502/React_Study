export default function Badge({state}){
    //if문과 early return -- 조건이 맞지 않으면 컴포넌트 자체를 렌더링하지 않는다.
    //복잡한 분기를 jsx안에서 억지로 표현하지 않음.
    //일찍 잘라내서 가독성을 높일 수 있다.

    // if(score<0 || score>100){
    //     return <span>잘못된 점수입니다.</span>
    // }

    //삼항연산자(?:)--텍스트 분기

    // const label=score>90?"우수":score>=70?"보통":"노력"
    // const color = score>=90?"pink": score>=70?"skyblue":"red"
    const label= (state === "정상") ? "제출 성공" : (state==="지각")? "늦게 제출함" : "누락됨";
    const color = state === "정상" ? "green" : state === "지각" ? "yellow" : "red";
    //짧은 조건 분기를 jsx안에서 한 줄로 표현할 수 있다.
    //간단하게 값을 바꿀 때 적합하다.

    //단점 : 가독성이 떨어진다.
    //"짧을때, 조건이 많지 않을 때"만 사용하자 - 규칙

    //조건부 ui는 단순 텍스트 뿐 아니라, 스타일 변경에도 쓸 수 있다.
    return(
        <span style={{background: color, color: "white", padding: "4px 8px",borderRadius: 8}}>
            {label}
            {/*
            3. &&연산자 -- 보조 요소 닫기
                단순히 보조 요소를 붙이거나 뺄 때 간단하기 때문이다.
                0 : falsy
                */}
            {/* {score === 100 && <span style={{marginLeft: 8}}>🥹</span>} */}
        </span>
    )
        
}