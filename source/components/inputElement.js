import React from "react";
const inputStyle = {
		  color: 'black',
		  border : 'solid green 2px',
		  background : '#ffffb3',
		  height: '28px'
		  
		};


	const divStyle = {
		  color: 'blue',
		  width : '323px',
			  height: '30px',
			  float : 'right'
		};
	
	const outerDiv = {
			  color: 'blue',
			  width : '400px',
			  margin : '1px',
				  height: '30px'
			};

	const labelStyle = {
			  color: 'blue',
			  margin : '2px',
			  width : '200px'
			  
			};
	
	const requiredStyle = {
			color : 'red',
			textAlign : 'left'
			  
			
	}

export class InputElement extends React.Component {
		
    constructor (props){
    	super(props);
    	this.state = {
    		hasData : false
    	}
    	this.onUpdateField = this.onUpdateField.bind(this);
    }	
    
    
    onUpdateField(e){
    	console.log(this , e);
    	
    	this.setState({
    		hasData : true
    	})
    }
    
    renderRequiredMessage (){
    	if(!this.state.hasData){
    		return null;
    	}
    	return <span style={requiredStyle}>Required</span>;
    }
    
	render (){

		var fieldName = this.props.fieldName;
		var labelName = this.props.labelName;
		return <div style={outerDiv}>
		<span style={labelStyle}>
		{labelName} :
		
				<div style= {divStyle}>
					
					<input ref="field" type="text" id="{fieldName}" style={inputStyle} onBlur={this.onUpdateField}/>
					{this.renderRequiredMessage()}
					</div>
					</span>			
					
					</div>
	}
}