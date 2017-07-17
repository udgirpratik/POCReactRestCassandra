import React from "react";
const inputStyle = {
		  color: 'black',
		  border : 'solid green 2px',
		  margin : '1px',
		  float: 'right',
		  background : '#ffffb3',
		  height: '28px'
		  
		};


	const divStyle = {
		  color: 'blue',
		  width : '325px',
		  border : 'solid red 1px',
		  margin : '1px',
			  height: '30px'
		};

	const labelStyle = {
			  color: 'blue',
			  margin : '2px',
			  width : '200px',
			  
			};

export class InputElement extends React.Component {
	
	render (){

		var fieldName = this.props.fieldName;
		var labelName = this.props.labelName;
		return <div style= {divStyle}>
					<span style={labelStyle}>
					{labelName} :
					</span>
					<input type="text" name="{fieldName}" style={inputStyle}/>
			</div>;
	}
}