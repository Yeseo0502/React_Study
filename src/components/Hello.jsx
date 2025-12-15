function Hello({name = "익명", hobby = "폰하기", likeEat = "치킨"}) {
    return(
        // <h2 style={{color}}>
        //     {emoji}안녕하세요, {name}님!</h2>
        // <div>
        //     {isLogin ? <p>환영합니다.</p> : <p>로그인하세요.</p>}
        // </div>
        <div>
            <h3>{name}</h3>
            <h4>취미 : {hobby}</h4>
            <h4>좋아하는 음식 : {likeEat}</h4>
        </div>
    )
}
export default Hello; 