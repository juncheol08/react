import React,{ useContext} from "react";
import { AgeContext } from "./AgeContext";
import { NameContext } from "./NameContext";

const Header = () => {
    const age = useContext(AgeContext)
    const user = useContext(NameContext)
    console.log('user : '+user)
    console.log('age : '+age)
  return (
    <div>
        <p>안녕하세요 {user}</p>
        <p>나이는 {age}입니다</p>
    </div>
  )
}

export default Header