//구조 분할(분리)
const Test6 = (props) => {
  const {irum,age,addr} = props; //객체 구조 분할
//   const [irum,age,addr]= props; //배열 구조 분할
  return (
    <div className="App">
        <hr/>
      <h2>이름은{irum} 입니다.</h2>
      <h2>나이는 {age} </h2>
      <h2>사는 곳은 {addr}</h2>
    </div>
  )
}

export default Test6