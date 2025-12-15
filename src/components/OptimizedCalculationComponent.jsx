import { useState,useMemo } from "react";
export default function OptimizedCalculationComponent(){
    const [count,setCount] = useState(0)
    const [inputValue,setInputValue] = useState('')
    //useMemo 적용 -- count 변경시에만 계산하게 하기

    const result = useMemo(
        () => {
            console.log("계산 실행중...")
            let sum=0
            for(let i =0; i<count*1000000; i++){
                sum+=i
            }
            return sum
        },
        [count] //cont가 변결될 때만 재계산한다.
    )
    return (
        <div>
            <h2>count : {count}</h2>
            <button onClick={()=>setCount(count+1)}>증가</button>
            <input value={inputValue} 
                onChange={(e)=>setInputValue(e.target.value)}
                placeholder="타이핑해보세여!"
            />
            <p>계산 결과 : {result}</p>
        </div>
    )
}