import React from "react";
import { AnswerObject } from "../App";

interface QuestionCardProps {
    question: string;
    answers: string[];
    callback: (e : React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;

}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions }) => {
    return (
        <div>
            <p className="number">
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map((answer) => (
                    <div key={answer}>
                        {/* !! - A way of casting a "truthy" or "falsy" value to boolean. */}
                        <button disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuestionCard;