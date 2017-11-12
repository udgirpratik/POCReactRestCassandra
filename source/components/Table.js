import React from "react";

export default class Table extends React.Component {
	constructor() {
	    super();
	    this.state = {
	    	filters : {},
	    	records : [],
	    	sort : {},
	    	time : 1
	    }
	  }
	
	componentDidMount() {
	    this.setState({ records : this.props.data });
	    this.setState({
    		column : this.props.defaultSort.toLowerCase(),
    		order  : 'asc'
    	});
	  }
	
	sort (evt){
		let key = evt.target.id.split('_')[0].toLowerCase();
		let data = Object.assign({}, this.state.records);
		let previousSort = Object.assign({}, this.state.sort);
		let order =  this.state.sort.order;
		let newOrder =  'asc';
		if(previousSort.column === key){
			if(order === 'asc'){
				newOrder = 'desc';
			} else
			if(order === 'desc'){
				newOrder = 'asc';
			}
		} else {
			newOrder = 'asc';
		}
		let sortedRecords = Object.values(data);
		sortedRecords.sort(function(a, b) {
	        var x = a[key]; var y = b[key];
	        if(newOrder === 'asc'){
	        	console.log('asc');
	        	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	        } else {
	        	console.log('desc');
	        	return ((x < y) ? 1 : ((x > y) ? -1 : 0));
	        }
	    });
		this.setState({sort : {column : key , order : newOrder}, records : sortedRecords, time : 2})
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
									{this.state.sort.column !== name.toLowerCase() ? 
											<span><img id={name+'_up'} src="./images/upArrow.png" onClick={this.sort.bind(this)}/>
									
											<img id={name+'_down'} src="./images/downArrow.png" onClick={this.sort.bind(this)}/></span> : null}
									{console.log(this.state.sort.column === name.toLowerCase())}
									{console.log(this.state.sort.order === 'asc')}
									{console.log(this.state.time !== 1)}
									{this.state.sort.column === name.toLowerCase() && this.state.sort.order === 'asc' && this.state.time !== 1 ?
                    					<img id={name+'_up'} src="./images/upArrow.png" onClick={this.sort.bind(this)}/> : null}
									{this.state.sort.column === name.toLowerCase() && this.state.sort.order === 'desc' && this.state.time !== 1 ?
										<img id={name+'_down'} src="./images/downArrow.png" onClick={this.sort.bind(this)}/> : null}
									
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


