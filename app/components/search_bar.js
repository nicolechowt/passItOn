import React, { Component } from "react";

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = { zipcode: "" };
	}

	render(){
		return (
			<div>
				<div className="search-bar">
					<input
					value={this.state.zipcode}
					onChange={event => this.onInputChange(event.target.value)} />
				</div>
			</div>

		);
	}

	onInputChange(zipcode){

		if (zipcode.length===5) {
			console.log(zipcode);
			this.value = " ";

		}

		this.setState({zipcode});
		this.props.onSearchChange(zipcode);
	}

}

export default SearchBar;