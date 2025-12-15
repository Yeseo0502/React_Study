import { useState,useMemo } from "react";
export default function UserListComponent(){
    const [users, setUsers]=useState([
        {id:1, name:'Alice', age:25, active:true},
        {id:2, name:'Bob', age:30, active:false},
        {id:3, name:'Charlie', age:35, active:true},
        {id:4, name:'David', age:28, active:true}
        //... 수천명의 사용자
    ])
    const [searchTerm,setSearchTerm] = useState('')
    const [showActiveOnly, setShowActiveOnly] = useState(false)
    const [theme,setTheme] = useState('light')

    const filteredUsers = useMemo(() => {
        console.log('필터링중...')
        return users.filter(user => {
            const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesActive = showActiveOnly ? user.active : true
            return matchesSearch && matchesActive
        })
    },[users,searchTerm,showActiveOnly]) //3가지 값 바꿀 때만 쟤 필ㅌ링
    
    return(
        <div className={theme}>
            <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder="이름검색"/>
            <label>
                <input type="checkbox"
                    checked={showActiveOnly}
                    onChange={(e) => setShowActiveOnly(e.target.checked)} />
                활성 사용자만 보기
            </label>

            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                테마 변경
            </button>

            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>{user.name} ({user.age}세)</li>
                ))}
            </ul>

        </div>
    )
}

/*사용자가 값을 입력했다
->  onChange에 의해 searchTerm변수값이 바뀐다
-> useMemo가 실행된다. (의존성배열)
-> showActiveOnly의 기본값은 false이기 때문에, 이 경우에 matchesActive는 항상 true가 된다.
-> 필터링 결과, 이름에 searchTerm이 들어간 모든 사용자를 반환한다.

2. 사용자가 체크박스를 누른다
-> onChange에 의해 showActiveOnly값이 바뀐다
-> useMemo가 실행된다. (의존성배열)
-> showActiveOnly가 true이기 때문에, 이 경우에는 active가 true인 사용자만 반환된다 */