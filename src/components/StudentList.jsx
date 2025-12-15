//배열은 map()으로 화면에 뿌린다.
/*
리엑트에서 배열은 map()을 써서 jsx로 바꿈 --> key 가 꼭 필요하다.
왜냐하면?
    어떤 항목이 어떤DoM인지를 추적하려면 항목을 정체성이 있어야함.
*/
import { useState } from "react";
export default function StudentList(){
    const [students, setStudents] = useState([
        {id:"s1", name:"정예서", present: true},
        {id:"s2", name:"장세은", present: true},
        {id:"s3", name:"이도겸", present: true},
    ])
    //id는 어떤 사람을 가지고 올꺼야? 하는 거
    const toggle=(id)=>{
        //setStu이거 어디서 가져온거야? 상태변경 함수 const위에서 가져온거야 students
        setStudents((prev)=>
            prev.map((s)=> (s.id === id? {...s,present: !s.present}: s))
        )
    }
    return(
        <div>
            <h1>학생리스트</h1>
            <input
                value={search}
            />
            <ul style={{paddingLeft: 16}}>
                {students.map((s) => (
                    <li key={s.id} style={{marginBottom: 8}}>
                        {s.name} - {s.present? "출석" : "결석"}
                        <button onClick={() => toggle(s.id)} style={{marginLeft: 8}}>
                            {s.present ? "결석 처리" : "출석 처리"}
                        </button>
                    </li>
                    //ul은 전체적으로 감싸고 li는 (중략) 하고 안족에서는 조건부로 삼항연산자를 출시했다.
                    //ul 을 감싸고 있고 li 에서 map 순회 하면서 key 로 추척해서 출석,결석 삼항연산자 사용으로 출력햇드아
                ))}
            </ul>
        </div>
    )
}
//오늘 배운 내용 
/*
1. 조건부 렌더링(Badge.jsx)
    - if문 + early return
    조건에 맞지 않으면 컴포넌트를 리턴하지 않는다
    복잡한 분기를 JSX안에서 억지로 쓰지 않고, 잘라내서 가독성을 높임. 
    - 삼항 연산자(? :)
    짧은 조건 분기일 때 적합
    ㅌㅅㅌ, ㅅㅌㅇ 등 간단히 바꿀 때 좋다. 
    단, 조건이 많아지면 가독성이 떨어진다.-> 2~3개 까지만! 그 이상은 함수/변수로 분리
    - && 연산자
    ㅂㅈㅇㅅ를 붙이거나 뺄 때 가장 간단하다.
    조건 && JSX -> 조건이 ()일떄만 JSX 랜더링
2. 배열 렌더링(StudentList.jsx)
    - map()으로 배열을 JSX로 변환
    - key속성이 필수!
      React가 "이 항목은 이 DOM이다"라고 추적하려면
      정체성이 필요하다. 
      그래서 고유한 id를 꼭 써야한다! key를 안쓰면 경고발생
    - 상태 업데이트는 불변성 유지
    - 배열/객체는 복사 후 수정
      원본을 직접 바꿀 경우 React가 변경을 못 알아챌 수 있다...
3. 오늘의 핵심규칙! 
    조건부 UI
    - 렌더 자체를 막고싶다!! : if + return
    - 값/스타일을 짧게 바꾼다 : 삼항
    - 보조 요소만 붙떼 : &&
    
    배열 렌더링
    - map()을 써서 jsx로 변환
    - key는 필수!
    - 상태 변경시 복사 후 수정(불변성)
*/