import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState(options[0]);

    const takeAnswer = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Select value={answer} onChange={takeAnswer}>
                {options.map((currentOption, index) => (
                    <option key={index} value={currentOption}>
                        {currentOption}
                    </option>
                ))}
            </Form.Select>
            <p>{answer === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
