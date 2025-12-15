import React, {useEffect,useState} from "react";
function Intro(){
    const [todos,setTodos] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10") //주소 입력 -> 서버에 요청할 수있음
        .then((res) => res.json())
        .then((data) => {
            setTodos(data); //data를 setTodos에 담아온것
        })
        .catch((error) => {
            console.error("Error fetching todos: ",error);
        });
    }, []) //여기 안에서 데이터 주세요
    return(
        <ul>
            {todos.map((todo) => ( //map이라는 반복문
                <li key={todo.id}>
                    {todo.title} - {todo.completed ? "O" : "X"}
                </li>
            ))}
        </ul>
    );
}
export default Intro;