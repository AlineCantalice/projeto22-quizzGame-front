import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import Question from "../components/Question";
import scoreContext from "../contexts/scoreContext";
import UserContext from "../contexts/userContext";

export default function Quiz() {
    const { user, setUser } = useContext(UserContext);
    const { score, setScore } = useContext(scoreContext);
    const URL = "http://localhost:5000/quiz";
    const [quizList, setQuizList] = useState([]);
    const [quiz, setQuiz] = useState(null);
    const [randomize, setRandomize] = useState(false);

    useEffect(() => {
        const promise = axios.get(URL);
        promise.then(response => {
            setQuizList(response.data);
            setUser(sessionStorage.getItem('username'));
            setScore(sessionStorage.getItem('score'));
        });
    }, []);

    useEffect(() => {
        const quiz = chooseQuiz(quizList);
        setQuiz(quiz);
    }, [quizList, randomize]);

    function chooseQuiz(quizList) {
        if (quizList === undefined) {
            return;
        }
        const index = Math.floor(Math.random() * quizList.length - 1);
        const element = quizList[index];
        return element;
    }

    return (
        <>
            <Header>
                <p>{user}</p>
                <p>{score}</p>
            </Header>
            <Container>
                <Question quiz={quiz} />
            </Container>
        </>
    )
}

const Header = styled.header`
    box-sizing: border-box;
    width: 100vw;
    height: 70px;
    padding: 0 18px;
    background: #F4F4F4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-size: 25px;
        color: #373737;
    }
`

const Container = styled.section`
    width: 90vw;
    height: 80vh;
    position: relative;
    top: 40px;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`