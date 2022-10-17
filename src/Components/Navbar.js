import React from "react"
import reactLogo from "../images/airbnb-logo.png"
import {useNavigate} from 'react-router-dom'

export default function Navbar() {
	const navigate= useNavigate();

	return (
		<nav> 
			<img 
				className="nav--logo"
				src= {reactLogo}
				alt= "airbnb-logo"/>
			<button
			className="button create-post"
			onClick={() => {
				navigate("/createPet")
			}}
			>Create a post</button>
		</nav>
	)
}


