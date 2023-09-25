import React,{ useState} from 'react'

const Test9 = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage("안녕하세요");
    const onClickLeave = () => setMessage("잘가!");
    const [ color,setColor] = useState('blue');
  return (
    <div className='App'>
        <button onClick={onClickEnter}>입실 (onClickEnter)</button>
        <button onClick={onClickLeave}>퇴실 (onClickLeave)</button>
        <hr></hr>
        <h1 style={{color}}>{message}</h1>
        <hr></hr>
        <button onClick={ () => setColor("gold")}>gold</button>
        <button onClick={ () => setColor("silver")}>silver</button>
        <button onClick={ () => setColor("brown")}>bronze</button>
    </div>
  )
}

export default Test9