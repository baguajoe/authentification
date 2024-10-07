import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<button className="btn btn-primary">Login</button>
					</Link>
					<button className="btn btn-primary ml-2" onClick={handleLogout}>
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
};
