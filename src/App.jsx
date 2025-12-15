import { useMemo, useState} from 'react'
import './App.css'
import Count from './components/Counter'
import work4일 from './components/work4일차'
import Homework4 from './components/Homework4'
import ParentComponent from './components/ParentComponent'
import ExpensiveCalculationComponent from './components/ExpensiveCalculationComponent'
import UserListComponent from './components/UserListComponent'
//xormsms Rhr ekerl -<br / >
//class 대신 className 사용
//Js값은 중괄호{}안에 넣기
export default function App() { //컴포넌트 이름은 반드시 대문자로 시작
  return (
    <div>
      <UserListComponent/>
    </div>
  );
}