import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    let answer;
    if (isVisible) {
        answer = <p>42</p>;
    }

    return (
        <div>
            <Button onClick={toggleVisibility}>Reveal Answer</Button>
            {answer}
        </div>
    );
}
