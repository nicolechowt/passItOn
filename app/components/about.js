import React, { Component } from 'react';
import Auth from "./utils/Auth";


export default class About extends Component {	
	render(){
		return(
			<div>
	        	<section id="about" className="container content-section text-center">
					<h1>How can I passItOn?</h1>
				    <div className="row">
				        <div className="col">
				            <span className="fa fa-map-marker"></span>
				            <p>Type in your zipcode.</p>
				        </div>
				        <div className="col">
				            <span className="fa fa-users"></span>
				            <p>See who you can help.</p>
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
// const About = (props) => {
// 	return (
// 		<section id="about" className="container content-section text-center">
// 			<h1>How can I passItOn?</h1>
// 		    <div className="row">
// 		        <div className="col">
// 		            <span className="fa fa-map-marker"></span>
// 		            <p>Type in your zipcode.</p>
// 		        </div>
// 		        <div className="col">
// 		            <span className="fa fa-users"></span>
// 		            <p>See who you can help.</p>
// 		        </div>
// 		        <div className="col">
// 		            <span className="fa fa-child"></span>
// 		            <p>Help them and feel good!</p>
// 		        </div>		                
// 		    </div>
// 		</section>
// 	);
// };

// export default About;