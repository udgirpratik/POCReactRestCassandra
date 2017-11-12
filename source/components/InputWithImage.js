import React from "react";

export class InputWithImage extends React.Component {
		
	constructor() {
	    super();
	    this.state = {
	    	emailValid : false,
	    	requiredError : false,
	    	lengthError : false,
	    	hasError : false
	    }
	  }
	
	  onblur(evt) {
		this.validate(evt.target.value);
	    
	  }
	  
	  validate (value, props){
		  	  if (!value.toString().trim().length && this.props.required) {
				  this.setState({ requiredError: true,lengthError : false, hasError: true});
			      return ;
			  } else {
				  this.setState({ requiredError: false,lengthError : false, hasError: false });
			  }
			 
			  if (value.toString().trim().length > this.props.maxlength) {
				  this.setState({ lengthError : true, requiredError : false, hasError: true});
				  return;
			  }
			  this.setState({ lengthError : false, requiredError : false, hasError: false});
		  
	  }
	  
		render (){
			const imgStyle = {
				      float: 'left',
				      width: 24,
				      height: 24,
				      margin: '4px 8px'
				    };
				
			const inputElementStyle = {
				      paddingRight : 40,
				      width: '100%',
				      boxSizing : 'border-box'
				    
				    };
			
			const outerDivStyle = {
				      position: 'relative',
				      width : 250
				    };
			
			const inputImageDiv = {
				      position: 'absolute',
				      top : '50%',
				      right : 0,
				      margin : '-20px 0px 0px 0px'
		    };
			const imageStyle= {
				      float: 'left',
				      width : 20,
				      height : 20,
				      margin : '0px 8px 0px 0px'
		    };
			
			const errorStyle = {
				      color: 'red',
				      margin : '4px 8px 0px 0px'
		    };

			const inputWithImageDivStyle = {
				      height : 60
		    };
			
			
			return <div style={inputWithImageDivStyle}>
					{this.props.children}
						<div style={outerDivStyle}>
							<input type={this.props.fieldType} style={inputElementStyle} onBlur={this.onblur.bind(this)} />
							<div style={inputImageDiv}>
							{this.state.hasError?<img src="./images/error.png" style={imageStyle} /> : null}
							</div>
							{this.state.requiredError?<span style={errorStyle}> Required </span> : null}
							{this.state.lengthError? <span style={errorStyle}> Length </span> : null}
						</div>
				</div>;
		}
}