import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(3);
    const [rightDie, setRightDie] = useState<number>(5);

    const rollLeft = () => {
        const roll = d6();
        setLeftDie(roll);
    };

    // Function to roll the right die
    const rollRight = () => {
        const roll = d6();
        setRightDie(roll);
    };

    let message = "Roll Again";
    if (leftDie === rightDie) {
        if (leftDie === 1) {
            message = "Snake Eyes, You Lose!";
        } else {
            message = "Doubles, You Win!";
        }
    }

    return (
        <div>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            <p>
                <span data-testid="left-die"> Left Die: {leftDie} </span>
                <span data-testid="right-die"> Right Die: {rightDie} </span>
            </p>
            <p>{message}</p>
        </div>
    );
}
