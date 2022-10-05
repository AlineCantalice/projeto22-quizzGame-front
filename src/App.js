import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import GlobalStyle from './themes/GlobalStyle.js';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
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
