import Answer from "./Answer";

export default function Question({quiz}) {

    return (
        quiz ?
            <>
                {quiz.question}
                <Answer answer={quiz.answer} />
            </> :
            <>Merda</>
    )
}