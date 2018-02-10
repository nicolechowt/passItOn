import React from "react";

require("./image.css");



const Image = props => {
	let source = "/img/" + props.source;

	let style ={
		width: '150px',
		borderRadius: 100,
		margin: '40px',
	};

	return(
			<img src={source} style={style}/>

	);
				// {props.name}
};

export default Image;