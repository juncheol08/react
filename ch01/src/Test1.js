//4. Test1 컴포넌트 생성 (컴포넌트의 이름은 대문자로 시작)
//5. 표현식과 if 조건 연산
function Test1() {
    const name = "백준철";
    const param = undefined
    const style = {
        backgroundColor:"pink",
        color:"white",
        fontSize:"32px",
        fontWeight:"bold",
        padding:10
    }
    /* 6. 내부 스타일링 */


  return (
    <div className="App">
        <h2 className="title">{name} 테스트 페이지</h2>
        <h3 className="item_tit">{name === '백준철' ? '천재' : '둔재'}    </h3>
        <h4 className="cate_tit">{param || <span>천재</span>}</h4> 
        { /* 5. OR || 연산 */}
        <p style={style}>이 내용은 내부 스타일 적용부입니다.</p>
        {/* 6. 내부 스타일링 */}
        <div style={{
            backgroundColor:"deepskyblue",
            color:"#fff",
            fontSize:"20px"
        }}>{name} - 인라인 스타일 입니다.</div>
        {/* 7. 인라인 스타일 */}
        <p className="comment">안녕하세요</p>
    </div>
  );
}

export default Test1;
