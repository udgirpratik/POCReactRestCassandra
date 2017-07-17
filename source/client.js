import React from "react";
import ReactDOM from "react-dom";
import BoxDiv from "./components/boxdiv"
import {InputElement} from "./components/inputElement"

function sayHi(from='Actor1', to='Actor2'){
	return `${from} says hi to ${to}`;
}
sayHi();

ReactDOM.render(
		<BoxDiv>
			<InputElement fieldName="name" labelName="Name"/>
			<InputElement fieldName="class" labelName="Class"/>
			<InputElement fieldName="age" labelName="Age"/>
			<InputElement fieldName="dob" labelName="DOB"/>
		</BoxDiv>, 
document.getElementById('expert'));