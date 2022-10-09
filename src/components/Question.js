import styled from "styled-components";
import Answer from "./Answer";

export default function Question({quiz}) {

    return (
        quiz ?
            <>
                <Title>{quiz.question}</Title>
                <Answer answer={quiz.answer} />
            </> :
            <>Merda</>
    )
}

const Title = styled.h1`
    font-size: 30px;
    color: #373737;
    text-align: center;
`