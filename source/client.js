import React from "react";
import ReactDOM from "react-dom";
import BoxDiv from "./components/boxdiv"
import {InputElement} from "./components/inputElement"
import {InputWithImage} from "./components/InputWithImage"

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
			<InputWithImage fieldType="password" maxlength="10"/>
			<InputWithImage fieldType="email" maxlength={10} required={true}/>
			<InputWithImage fieldType="text" maxlength={10} required={true}/>
			<InputWithImage fieldType="date" maxlength={10} required={true}/>
			<InputWithImage fieldType="time" maxlength={10} required={true}/>
			<InputWithImage fieldType="search" maxlength={10} required={true}/>
			</BoxDiv>, 
document.getElementById('expert'));