import React, { Component } from "react";
import NavLoggedOut from "./children/NavLoggedOut";
import {emojify} from 'react-emojione';
require("./searchbar.css");
// import Stories from "./stories";
// import API from "./utils/api";

function UserStories(props){
	return (
		<div className="userstories">
			<p><b>James P.</b> on Main St:
			Does anyone want to walk my cat tomorrow? My cat is practically like a dog. {emojify(':wink: 😸')}</p>

			<p><b>Kay M.</b> on 5th St:
			My son needs help on his Algebra homework - due next week! {emojify(':/')} </p>

			<p><b>Bill T.</b> on Atlantic Blvd:
			Need extra pair of hands to help paint over the graffiti at St. Mary High School. {emojify('O:)')}</p>


			<div className="container content-section text-center">
				<h3> Sign up now to get started!</h3>
				<NavLoggedOut />
			</div>

		</div>
	);
}

function Blank(props){
	return <p></p>;
}

function LoadStories(props){
	const zipCodeLength = props.zipcode.length;
	if (zipCodeLength===5){
		return <UserStories />;
	}
	else {
		return <Blank />;
	}
}

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = { 
			zipcode: "",
			userStories: ""
		 };
	}

	onInputChange(zipcode){
		if (zipcode.length===6) {
			console.log(zipcode);
			loadStories(zipcode);
			// this.loadStory(zipcode);
			// const obj={
			// 	title: "help",
			// 	dateWanted: new Date(),
			// 	typeOfService: "labor",
			// 	content: "I am so broke.",
			// 	pictureURL: "www.google.com"
			// };
			// this.request(obj);
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
							<LoadStories zipcode = {this.state.zipcode} />

						</div>
					</div>
				</div>
			</div>

		);
	}


}

export default SearchBar;