import React, { Component } from "react";
import Image from "./image";
// import API from "./utils/API";

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
// const query ={
// 	location: [{zipCode: 91113}]
// };

// API.getLeaders(query)
//     .then(function(res){
//       console.log(res.data);
//     })
//     .catch(err => console.log(err));

class TopLeaders extends Component {

	createImage(image,name) {
		return (
			<Image source={image} key={image} name={name}/>
		);
	}

	createImages(images){
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
					</div>
				</div>
			</div>
		);
	}
}

export default TopLeaders;