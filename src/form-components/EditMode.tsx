import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const takeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function updateIsEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEdit(event.target.checked);
    }

    const getMessage = () => {
        if (isStudent) return name + " is a student";
        else return name + " is not a student";
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-check"
                label="Is Edit Mode"
                checked={isEdit}
                onChange={updateIsEdit}
            />
            {isEdit ?
                <div>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Is a Student?"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    />
                    <input
                        type="text"
                        value={name}
                        onChange={takeInput}
                        placeholder="Enter your answer: "
                    />
                </div>
            :   <p>{getMessage()}</p>}
        </div>
    );
}
