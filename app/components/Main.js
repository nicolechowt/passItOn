import _ from "lodash";
import React, { Component } from "react";
import Nav from "./children/Nav";
import SearchBar from "./search_bar";
import GoogleMap from "./map";

require("./main.css");

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

	render() {

		const search = _.debounce((zipcode) => { this.search(zipcode) },300);
		return (
		    <div>
		   		<Nav />
				<section id="discover" className="container content-section text-center">
		            <div className="row">
		                <div className="col-lg-12 col-lg-offset-2">
		                	<h2>See how you can give back in your area.</h2>
		                	<p>Type in your ZipCode to find out!</p>
			    		</div>
			    	</div>
			   		<SearchBar onSearchChange={search} />
			    </section>

				<section id="map" className="container content-section">
			   		<GoogleMap />
		   		</section>

				<section id="about" className="container content-section text-center">
		            <div className="row">
		                <div className="col">
		                    <span className="fa fa-map-marker"></span>
		                    <p>Type in your zipcode.</p>

		                </div>

		                <div className="col">
							<span className="fa fa-arrow-circle-right"></span>
						</div>


		                <div className="col">
		                    <span className="fa fa-users"></span>
		                    <p>See who you can help.</p>
		                </div>

		                <div className="col">
							<span className="fa fa-arrow-circle-right"></span>
						</div>

		                <div className="col">
		                    <span className="fa fa-child"></span>
		                    <p>Help them and feel good!</p>
		                </div>		                

		            </div>
		        </section>
	        </div>
		);
	}
}
