import { useState,useMemo } from "react";

/*제어 컴포넌트로 입력 관리(value + onChange) ok
보이는 목록은 파생상태(계산)으로 만든다
상태 불변성 지킨다.
자식 부모 통신은 콜백 props로 한다
폼 제출은 onSubmit + preventDefault를 사용한다


A. 필수
오늘 만든 앱을 기준으로, 아래 요구사항 만족하는 최소 기능 Todo
1) 검색 + 상 태필터
2) 추가폼
3) 목록 : 완료항목은 취소선
4) 요약 

⦁   value와 onChange가 모든 입력에 있다
⦁   visibleTodos 같은 계산 로직이 있다
⦁   push로 원본 배열을 직접 바꾸지 않는다
⦁   폼 제출 시 새로고침이 일어나지 않는다 */
export default function Homework4(){
    const [todos, setTodos] = useState([
        { id: 1, title: "리액트 공부하기", done: false },
        { id: 2, title: "php 공부하기", done: true },
    ])
    const [search,setSearch] = useState("")
    const[statusFilter,setStatusFilter] = useState("all")
    const[newTitle,setNewTitle] = useState("")

    const visibleTodos = useMemo(()=>{
    const keyword = search.trim().toLowerCase()
    return todos.filter((t)=>{
      const matchKeyword = keyword === ""||t.title.toLowerCase().includes(keyword)
      const mathStatus =
        statusFilter === "all"? true :
        statusFilter === "active" ? !t.done :
          t.done //"done"
          return matchKeyword && mathStatus
       }) 
    },[todos, search,statusFilter])

    const addTodo = (title) => {
      const trimmed = title.trim();
      if (!trimmed) return;
      const newItem = { id: Date.now(), title: trimmed, done: false }
      setTodos((prev) => [newItem, ...prev])
      setNewTitle("")
    }

    const toggleTodo = (id) => {
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
    }

    return(
        <>
        <div>
            <h1>TodoList</h1>
            <div>
            <input  
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
            <select
                value={statusFilter} onChange={(e)=>setStatusFilter(e.target.value)}
            >
            <option value="all">전체</option>
            <option value="active">미완료</option>
            <option value="done">완료</option>
            </select>
            
            </div>
            <form
                onSubmit={(e)=>{
                    e.preventDefault()
                    addTodo(newTitle)
                }} >
                <label htmlFor="newTodo">새 할일 </label>
                <input id="newTodo"
                    placeholder="할 일을 입력하세요"
                    value={newTitle}
                    onChange={(e)=>setNewTitle(e.target.value)}
                />
                <button type="submit" disabled={newTitle.trim().length < 1}>추가</button>
            </form>
            <TodoList items={visibleTodos} onToggle={toggleTodo}></TodoList>
            <p>
                전체 {todos.length}개 / 미완료 {todos.filter((t)=> !t.done).length}개
            </p>
        </div>
        </>
    )
}
function TodoList({items, onToggle}){
  if(items.length===0) return <p>조건에 맞는 항목이 없습니다.</p>
  return(
    <ul>
      {items.map((t)=>(
        <li key={t.id}>
          <label>
            <input type="checkbox"
            checked={t.done}
            onChange={()=> onToggle(t.id)} />
            <span>{t.title}</span>
          </label>
        </li>
      ))}
    </ul>
  )
}
/* useMemo * React 렌더링
리액트 컴포넌트 리렌더링
1. state 변경
2. props 변경
3. 부모 컴포넌트 리렌더링시
4. Contect  */