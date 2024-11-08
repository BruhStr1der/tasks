import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { RevealAnswer } from "./components/RevealAnswer";
import { ChangeType } from "./components/ChangeType";
import { TwoDice } from "./components/TwoDice";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <style>{"body { background-color: red; }"}</style>
                UM COS420 with React Hooks and TypeScript Josh
            </header>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div style={{ background: "blue" }}>
                <h1>This is a header.</h1>
            </div>
            <img src="src\pic.jpg" alt="A picture of old architecture" />
            <ul>
                <li> First Item</li>
                <li> Second Item</li>
                <li> Third Item</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                {" "}
                Log Hello World!
            </Button>
            <div>
                <Container>
                    <Row>
                        <Col>
                            First column.
                            <div
                                style={{
                                    width: "100%",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            Second column.
                            <div
                                style={{
                                    width: "100%",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <p>
                Counter: <Counter></Counter>
            </p>
            <p>
                <RevealAnswer></RevealAnswer>
            </p>
            <p>
                <ChangeType></ChangeType>
            </p>
            <p>
                <TwoDice></TwoDice>
            </p>
        </div>
    );
}

export default App;
