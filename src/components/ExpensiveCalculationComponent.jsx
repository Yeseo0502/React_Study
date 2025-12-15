import { useState } from "react";
import { useMemo } from "react";

export default function ExpensiveCalculationComponent(){
    const [count,setCount] = useState(0)
    const [inputValue, setInputValue] = useState('')

    const expensiveCalculation = () =>{
        console.log('계산 실행중...')
        let sum = 0
        for(let i=0; i<count*1000000; i++){
            sum +=i;
        }
        return sum
    }
    //문제상황 : inputValue만 변경될 때
    const result = expensiveCalculation();
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

function finbonacci(n){
  if(n<=1) return n;
  return finbonacci(n-1) + finbonacci(n-2);
}
console.log(finbonacci(40)); //매우느림

function finbonacciMemo(){
  const cache = {};
  return function fib(n){
    if(n in cache){
      return cache[n];
    }
    if(n <=1) return n;
    cache[n] = fib(n-1)+fib(n-2);
    return cache[n];
  }
}
const memoizedValue = useMemo(()=>{
    //복잡한 계산
    return computeExpensiveValue(a,b)
  },[a,b]) //첫번째 인자 : 메모제이션하고싶은 값을 변환하는 함수
          //두번째 인자 : 의존성 배열