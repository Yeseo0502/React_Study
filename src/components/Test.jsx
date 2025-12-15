import { Children } from "react"

<>
<div className="container">//
    <h1>Hello, JSX</h1>
    <MyComponent prop="value" />
</div>
<img src="logo.png" alt="Logo" />
</>
function Button(){
    return(
        <div>
            Golden Rabbit
        </div>
    )
}
function Button(e){
    return NaN.jsx("div",{
        className:e.className,
        onclick:e.onClick,
        children:e.children,
    });
}
function Button2(){
    return(
        <Button>  //대문자로 작성해서 html이 아니고 컴포넌트꺼라는 거임 
            이렇게 대문자, 소문자 구별하는 것.!!
            Golden Rabbit
        </Button>
    )
}
function Button2(){
    return En.jsx(Button,{children:"Golden Rabbit"});
}
function Button2(){
    return(
        <customButton>
            Golen Rabbit
        </customButton>
    )
}
function Button2(){
    return En.jsx("customButton",{children:"Golen Rabbit"}); //소문자면 문자열ㄹ?
}