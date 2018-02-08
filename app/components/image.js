import React from "react";
import logo from '../../public/img/mainSpan.jpg';


const Image = props => {
	let source = logo; //"/public/img/" + props.source;

	let style ={
		width: '300px',
		margin: '20px 5px 20px 5px'
	};

	return(
		<img src={source} style={style}/>
	);
};

export default Image;