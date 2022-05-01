import React from "react";
import { AnswerObject } from "../App";
import { ButtonWrapper } from "./QuestionCard.styles";
import { Wrapper } from '../App.style';

interface QuestionCardProps {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;

}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions }) => {
    return (
        <Wrapper>
            <p className="number">
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map((answer) => (
                    <ButtonWrapper correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer} key={answer}>
                        {/* !! - A way of casting a "truthy" or "falsy" value to boolean. */}
                        <button disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>   );
}

export default QuestionCard;