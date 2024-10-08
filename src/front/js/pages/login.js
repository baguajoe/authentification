import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate, Link } from "react-router-dom";


export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate=useNavigate();


	const handleClick = async() => {
	const resp= await actions.login(email, password);
		if (resp) {
			console.log("login successful");
			navigate("/private")
		} else{
			console.log("login failed")
			alert("invalid email or password please try again")
		}
	

		
	};

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			
				<div className="d-flex flex-column gap-3 w-25 justify-content-center mx-auto">
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
					<button className="btn btn-primary w-25 mx-auto mt-3" onClick={handleClick}>Login</button>
					<Link to="/signup"className="mt-4">click here to signup</Link>
				</div>
			
		</div>
	);
};
