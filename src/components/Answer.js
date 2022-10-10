import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import ScoreContext from "../contexts/scoreContext";

export default function Answer({ answer }) {

    const [randomAnswerList, setRandomAnswerList] = useState([]);
    const [randomize, setRandomize] = useState(false);
    const [answerList, setAnswerList] = useState([]);
    const [correct, setCorrect] = useState(false);
    const { score, setScore } = useContext(ScoreContext);
    const navidate = useNavigate();
    const URL = "https://project22-quizgame.herokuapp.com/user";

    useEffect(() => {
        setAnswerList(answer);
    }, [answer]);

    useEffect(() => {
        const answer = chooseQuiz(answerList);
        setRandomAnswerList(answer);
    }, [answerList, randomize])

    function chooseQuiz(quizList) {
        let i = quizList.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = quizList[i];
            quizList[i] = quizList[j];
            quizList[j] = temp;
        }
        return quizList;
    }

    function verifyAnswer(answer) {
        setCorrect(answer.correct);
        if (answer.correct) {
            let valor = score;
            setScore(++valor);
            sessionStorage.setItem('score', valor);
            alert('Você acertou!')
            window.location.reload()
        } else {            
            const username = sessionStorage.getItem('username');
            const score = sessionStorage.getItem('score');
            const promise = axios.put(URL, { username: username, score: score });
            promise.then(() => {
                sessionStorage.clear();
                navidate('/');
                alert('Você errou! :(');
            });
        }
    }

    return (
        <Container>
            {answer.map((answer, index) => <Card key={index} onClick={() => verifyAnswer(answer)}>{answer.answer}</Card>)}
        </Container>
    )
}

const Container = styled.section`
    width: 90vw;
    height: 70vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`
const Card = styled.div`
    background: #F4F4F4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: #373737;
    width: 40%;
    height: 40%;
    border-radius: 8px;
    margin: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    :hover {
        background-color: gray;
        cursor: pointer;
    }
`
