import React, {useEffect,useState} from "react";
//기초
// function homework2(){
//     const [posts,setPosts] = useState([]);
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/posts?_limit=10") //주소 입력 -> 서버에 요청할 수있음
//         .then((res) => res.json())
//         .then((data) => {
//             setPosts(data); //data를 setTodos에 담아온것
//         })
//         .catch((error) => {
//             console.error("Error fetching todos: ",error);
//         });
//     }, []); //여기 안에서 데이터 주세요
//     return(
//         <ul>
//             {posts.map((post) => ( //map이라는 반복문
//                 <li key={post.id}>
//                     <h2>{post.title}</h2>
//                     <p>{post.body}</p>
//                 </li>
//             ))}
//         </ul>
//     );
// }
//중급
function homework1(){
    const [posts,setPosts] = useState([]);
    const [btn, setBtn] = useState(0);
    // const Reset = () => {
    //     setBtn(btn+1);
    //     if(btn%1==0){
            
    //     }
    //     // setBtn((prev) => prev + 1);
    // }
    useEffect(() => {
        if(btn == 0 ){
            return;
        }
        console.log(btn);
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10") //주소 입력 -> 서버에 요청할 수있음
            .then((res) => res.json())
            .then((data) => {
                setPosts(data); //data를 setTodos에 담아온것
            })
            .catch((error) => {
                console.error("Error fetching todos: ",error);
            });
    }, [btn]) //여기 안에서 데이터 주세요
    return(
        <div>
            <button onClick={() => setBtn(btn+1)}>확인하기</button>
          <ul>
            {posts.map((post) => ( //map이라는 반복문
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))}
          </ul>
        </div>
    );
}
export default homework2;
