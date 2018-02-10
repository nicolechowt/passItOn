import React, { Component } from "react";
// import API from "./utils/api";

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = { 
			zipcode: "",
			userStories: ""
		 };
	}

	onInputChange(zipcode){
		if (zipcode.length===5) {
			console.log(zipcode);
			// this.loadStory(zipcode);
			const obj={
				title: "help",
				dateWanted: new Date(),
				typeOfService: "labor",
				content: "I am so broke.",
				pictureURL: "www.google.com"
			};
			this.request(obj);
		};

		this.setState({zipcode: zipcode});
		this.props.onSearchChange(zipcode);
	};

	request(query){
	};

	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="search-bar">
						<h2>See how you can give back in your area.</h2>
		                	<p>Type in your ZipCode to find out!</p>
							<input
							value={this.state.zipcode}
							onChange={event => this.onInputChange(event.target.value)} />
						</div>
					</div>
				</div>
			</div>

		);
	}


}

export default SearchBar;