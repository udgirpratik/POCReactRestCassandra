import React from "react";
import ReactDOM from "react-dom";
import BoxDiv from "./components/boxdiv"
import {InputElement} from "./components/inputElement"
import {InputWithImage} from "./components/InputWithImage"
import Table from "./components/Table"

function sayHi(from='Actor1', to='Actor2'){
	return `${from} says hi to ${to}`;
}
sayHi();
const heads = ['Password', 'Email', 'Text', 'Date', 'Time', 'Search'];
const data = [{'password' : 'Password', 'email' : 'Email', 'text' : 'Text', 'date' : 'Date', 'time' : 'Time', 'search' : 'Search'},
	{'password' : 'Password1', 'email' : 'Email1', 'text' : 'Text1', 'date' : 'Date1', 'time' : 'Time1', 'search' : 'Search1'},
{'password' : 'Password2', 'email' : 'Email2', 'text' : 'Text2', 'date' : 'Date2', 'time' : 'Time2', 'search' : 'Search2'}];

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
			<Table heads={heads} data={data}/>
			</BoxDiv>, 
document.getElementById('expert'));