import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";


export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const navigate = useNavigate();


	const handleClick = async () => {
		if (password !== confirmPassword) {
			alert("passwords do not match");
			return;

		}
		try {
			const resp = await actions.signup(email, password);
			if (resp) {
				console.log("signup successful");
				navigate("/login")
			} else {
				console.log("signup failed")
				// alert("user already exists")
			}
		} catch (error) {
			console.error("error during signup", error)
			alert("signup failed please try again")
			
		}
	
	

		
	};

	return (
		<div className="text-center mt-5">
			<h1>Signup</h1>

			<div>
				<input
					type="text"
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="confirm password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
				/>
				<button onClick={handleClick}>Signup</button>
			</div>



		</div>
	);
};
