import React from "react";
import {InputElement} from "./inputElement"

export default class BoxDiv extends React.Component {
		
		render (){
			return <div>
					{this.props.children}
				</div>;
		}
}