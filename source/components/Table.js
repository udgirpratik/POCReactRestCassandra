import React from "react";

export default class Table extends React.Component {
	constructor() {
	    super();
	    this.state = {
	    	filters : {},
	    	records : []
	    }
	  }
	
	componentDidMount() {
	    this.setState({ records : this.props.data });
	  }
	
	sort (evt){
	}
	
	filter (evt){
		var filters = Object.assign({}, this.state.filters);
		var filterkey = evt.target.id.split('_')[0].toLowerCase(); 
		filters[filterkey] = evt.target.value;
		this.setState({filters : filters});
		var data = this.props.data.filter(function (el) {
			let eligible = true;
			let filterKeys = Object.keys(filters);
			filterKeys.map(function(key, index){
				if(el[key].indexOf(filters[key]) === -1){
					eligible = false;
				}
			});
			return eligible;
		});
		this.setState({records : data});
	}
		render (){
			const headStyle = {
					width : 100
			};
			
			const sortIcon = {
					margin : '3px 0px 0px 0px'
			};
			
			const rowStyle= {
					outline : 'thin solid',
					color : 'red'
			};
			
			
			return <div>
			<table>
			<thead>
				<tr style={rowStyle}>
				 {
					 this.props.heads.map(
						function(name, index){
							return <th key={index} style={headStyle}>
									{name}
                    					<img id={name+'_up'} src="./images/upArrow.png" onClick={this.sort.bind(this)}/>
                    					<img id={name+'_down'} src="./images/downArrow.png" onClick={this.sort.bind(this)}/>
                    					<input id={name+'_filter'}type="search" style={{marginTop : 2}} onBlur={this.filter.bind(this)}/>
                    				</th>;
						}, this)
				}
				</tr>
				</thead>
				<tbody style={rowStyle}>
				{
					this.state.records.map(
							function(obj, index){
								let keys = Object.keys(obj);
								return <tr key={index} style={rowStyle}>
								{keys.map(function(key, index){
												return <td key={index+key }> { obj[key] }</td>
											},obj)}
										</tr>;
							})
				
				}
				</tbody>
			</table>
			</div>;
		}
}


