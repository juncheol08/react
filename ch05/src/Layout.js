//useNavigate : 자바스크립트와 같은 페이지 이동 또는 URL 제어와 관련한 훅(hook)
import React from 'react'
import { Outlet,  useNavigate, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Layout = () => {
    const navigate = useNavigate();
    const goBack = () => { navigate(-1); };
    const goHome = () => { navigate('/', { replace : true }); }
    return (
        <div>
        <header>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">홈으로</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/articles">게시판</Nav.Link>

              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/about">Intro</NavDropdown.Item>
                <NavDropdown.Item href="/profile/sangmin">Developer1</NavDropdown.Item>
                <NavDropdown.Item href="/profile/yeun">Developer2</NavDropdown.Item>
                <NavDropdown.Item href="/profile/sehoon">Developer3</NavDropdown.Item>
                <NavDropdown.Item href="/dataroom">자료실</NavDropdown.Item>
              </NavDropdown>


            </Nav>
            <Nav>
              <Nav.Link href="#deets">로그인</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">마이페이지</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
      <main>
      <Container>
      <Outlet />
      </Container>
        </main>

             {/* <header style={{ background:'#ececec', padding:20, fontSize:24 }}>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goHome}>홈으로</button>
                <ul style={{ float:'right' }}>
                    <li><Link to='/articles'>게시판</Link></li>
                    <li><Link to='/login'>로그인</Link></li>
                    <li><Link to='/mypage'>마이페이지</Link></li>
                </ul>
            </header>


            <main>
                <Outlet />
            </main> */}
        </div> 
    )
}
export default Layout