import React from "react";

export default class BoxDiv extends React.Component {
	  
		render (){
			return <div>
					{this.props.children}
				</div>;
		}
}


