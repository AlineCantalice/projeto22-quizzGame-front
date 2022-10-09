import { useEffect, useState } from "react"
import styled from "styled-components"

export default function Answer({ answer }) {

    const [randomAnswerList, setRandomAnswerList] = useState([]);
    const [randomize, setRandomize] = useState(false);
    const [answerList, setAnswerList] = useState([]);

    useEffect(() => {
        setAnswerList(answer);
    }, [answer]);

    useEffect(() => {
        const answer = chooseQuiz(answerList);
        console.log(answer)
        setRandomAnswerList(answer);
    }, [answerList, randomize])

    function chooseQuiz(quizList) {
        if (quizList === undefined) {
            return;
        }
        const random = [];
        for (let i = 0; i < 4; i++) {
            const index = Math.floor(Math.random() * quizList.length - 1);
            const element = quizList[index];
            random.push(element);
            console.log(quizList[index])
        }
        return random;
    }

    function verifyAnswer(answer) {
        if (answer.correct) {
            console.log('Tela sucesso')
        }
    }

    return (
        <Container>
            {answer.map(a => <Card onClick={() => verifyAnswer(a)}>{a.answer}</Card>)}
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
    background-color: white;
    color: black;
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
