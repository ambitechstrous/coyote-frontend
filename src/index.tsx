import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header } from "./components/Header"
import { Timeline } from "./components/Timeline"

ReactDOM.render(
    <div>
        <Header></Header>
        <Timeline></Timeline>
    </div>,
    document.getElementById("root")
)