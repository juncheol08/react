//표현식과 내부스타일링 , 인라인 스타일링, 조건 연산자, if문을 활용하여 컴포넌트 만들기
const Test2 = () => {
    const text = "안녕하세요";
    const style = {
        color:"blue",
        fontSize:"20px",
        fontWeight:"bold",
  
    }
  return (
    <div className="App">
        <hr></hr>
        <p>{text}</p>
        <p style={style}>{text}</p>
        <p style={{backgroundColor:"gray"}}>{text}</p>
    </div>
  )
}

export default Test2