import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();



	const handleLogout = () => {

		sessionStorage.removeItem("token");
		alert("You've been logged out successfully");
		navigate("/");
	};

	const isLoggedIn = !!sessionStorage.getItem("token");

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{isLoggedIn ? (
						<button className="btn btn-primary ms-2" onClick={handleLogout}>
							Logout
						</button>
					) : (
						<Link to="/login">
							<button className="btn btn-primary">Login</button>
						</Link>
					)}


				</div>

				
			</div>
		</nav>
	);
};
