import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question",
    );

    const changeQuestionType = () => {
        setQuestion((current) =>
            current === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    };

    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            <p>
                {question === "short_answer_question" ?
                    "Short Answer"
                :   "Multiple Choice"}
            </p>
        </div>
    );
}
