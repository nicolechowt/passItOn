import _ from "lodash";
import React, { Component } from "react";
import GoogleMap from "./map";
import TopLeaders from "./top_leaders";
import Auth from "./utils/Auth";
import About from "./about";
import SearchBar from "./search_bar";
import { Parallax, Background } from 'react-parallax';
import NavLoggedIn from "./children/NavLoggedIn";
import NavLoggedOut from "./children/NavLoggedOut";
import Bridge from '../../public/img/bridge.jpeg';

require("./main.css");

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const insideStylesNav = {padding: 10, position: 'absolute', top: '5%', left: '50%', transform: 'translate(-50%,-50%)'};
const aboutStyles = {padding: 20, position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%,-50%)'};
const contentStyles = {padding: 0, position: 'absolute', top: '65%', left: '50%', transform: 'translate(-50%,-50%)'};


export default class Main extends Component {

	constructor(props){
		super(props);

		this.state ={
			// whoToHelp: [],
			// selectedToView: null,
			// userStories: []
		}
	}

	search(zipcode){
		this.setState({
			zipcode: zipcode
		});
	}

	IsUserLogeedIn(){
		Auth.authenticateUser("test2");
		// const userIsAuthenticated = Auth.isUserAuthenticated();
		// console.log("userIsAuthenticated " + userIsAuthenticated);
		let loggedInStatus = false;
		const getUserToken = Auth.getToken();
		console.log("getUserToken " + getUserToken);
			if(getUserToken==="test"){
				loggedInStatus=  true;
			} 		
		return	loggedInStatus;		
	}



	PickProperContent(){
		if (this.IsUserLogeedIn()){
			return <GoogleMap />;
		} 

	}

	ShowTopLeaders(){
		if (this.IsUserLogeedIn()){
			return 	<TopLeaders />
		}
	}

	PickProperNavBar(){
		// const isLoggedIn = false;
		
		if (this.IsUserLogeedIn()){
			return <NavLoggedIn />;
		}
		return <NavLoggedOut />;
	}



	render() {

		const search = _.debounce((zipcode) => { this.search(zipcode) },300);
		return (
		    <div className="site">
				<div style={styles}>
				<Parallax bgImage={Bridge}
					strength={500}>
					<div style={{height: 1000}}>
						<div style={insideStylesNav}>
							{this.PickProperNavBar()}
						</div>

				        <div style={aboutStyles}>
				        	<About/>
						</div>

					</div>
				</Parallax>

				<Parallax bgImage={Bridge}>
			      <div style={{height: 1500}}>
					<div style={contentStyles}>
						{this.ShowTopLeaders()}
						{this.PickProperContent()}
					</div>
			      </div>
				</Parallax>

		     </div>		

		 </div>
				
		);
	}
}
