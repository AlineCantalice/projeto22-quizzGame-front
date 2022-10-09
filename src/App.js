import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import GlobalStyle from './themes/GlobalStyle.js';
import Quiz from './pages/Quiz.js';
import UserContext from './contexts/userContext.js';
import { useState } from 'react';
import ScoreContext from './contexts/scoreContext.js';

function App() {

  const [user, setUser] = useState(null);
  const [score, setScore] = useState(0);

  return (
    <Container>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <ScoreContext.Provider value={{ score, setScore }}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/quiz' element={<Quiz />} />
            </Routes>
          </BrowserRouter>
        </ScoreContext.Provider>
      </UserContext.Provider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #C0B283;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
`
