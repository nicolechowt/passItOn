import React, { Component } from "react";
import Image from "./image";

const data = {
  "images": [
    "leader1.jpeg", 
    "leader2.jpeg",
    "leader3.jpeg"
  ],
  "names" : [
  	"Ashley",
  	"Jon", 
  	"Em"
  ]
}

const data2 = [
	{name: "Ashley",images: "leader1.jpeg"},
	{name: "Jon",images: "leader2.jpeg"},
	{name: "Em",images: "leader3.jpeg"}
]

require("./topLeaders.css");

class TopLeaders extends Component {

	createImage(image) {
		return (
			<Image source={image} key={image}/>
		);
	}

	createImages(images,names){
		return (
			<div>
			{images.map(this.createImage)}
			</div>
		)
	}

	createName(name){
		return <p key={name}>{name}</p>;
	}

	createNames(names){
		return names.map(this.createName);
	}

	render(){

		return (
			<div className="container content-section text-center">
				<div className="row">
					<div className="col">
						<h1>The Friendiest of Them All</h1>
						{this.createImages(data.images)}
						{this.createNames(data.names)}
					</div>
				</div>
			</div>
		);
	}
}

export default TopLeaders;