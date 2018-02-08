import React, { Component } from "react";
import Image from "./image";

const data = {
  "images": [
    "mainSpan.jpg", 
    "mainSpan2.jpeg",
    "mainSpan2.jpeg"
  ]
}

class TopLeaders extends Component {
	createImage(image) {
		return <Image source={image} key={image}/>;
	}

	createImages(images){
		return images.map(this.createImage);
	}

	render(){
		return (
			<div className="container content-section text-center">
				<div className="row">
					<div className="col">
						<h1>The Friendiest of Them All</h1>
						{this.createImages(data.images)}
					</div>
				</div>
			</div>
		);
	}
}

export default TopLeaders;