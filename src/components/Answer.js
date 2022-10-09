import styled from "styled-components"

export default function Answer({ answer }) {

    function verifyAnswer(answer) {
        if(answer.correct) {
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

    :hover {
        background-color: gray;
        cursor: pointer;
    }
`
