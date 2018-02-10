import React from "react"
import Calculator from "./Component"
import Gamepad from 'material-ui-icons/Gamepad'
//import Dialpad from 'material-ui-icons/Dialpad'

export default {
    Component: Calculator,
    //IconComponent: <Dialpad />,
    IconComponent: <Gamepad />,
    name: "serlo/content/calculator",
    version: "0.0.0",
    text: "Calculator",
}
