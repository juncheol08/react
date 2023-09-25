
const Test5 = (props) => {
  return (
    <div className="App">
      <h2>이름은{props.irum} 입니다.</h2>
      <h2>나이는 {props.age} </h2>
      <h2>사는 곳은 {props.addr}</h2>
    </div>
  )
}

Test5.defaultProps = {
  irum:'백준철',
  age:28
  // addr:'경기도'
}

export default Test5