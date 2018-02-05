import _ from "lodash";
import React, { Component } from "react";
import Nav from "./children/Nav";
import SearchBar from "./search_bar";

require("./main.css");

export default class Main extends Component {

	constructor(props){
		super(props);

		this.state ={
			whoToHelp: [],
			selectedToView: null,
			userStories: []
		}
	}

	search(zipcode){
		this.setState({
			zipcode: zipcode
		});
	}

	render() {

		const search = _.debounce((zipcode) => { this.search(zipcode) },300);
		return (
		  <div>
		    <Nav />
		    <p>Type in your 5 digit zipcode to see how you can passItOn in your neighborhood</p>
		   	<SearchBar onSearchChange={search} />
		  </div>
		);
	}
}
