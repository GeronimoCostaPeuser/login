import React from 'react';
import "../App.css";

const LogininForm = () => {
	return (
		<div className="cover">
			<h1>Login</h1>
			<input type="text" placeholder="username" />
			<input type="password" placeholder="password" />

			<div className="login-btn">Login</div>

		</div>
		)
}

export default LogininForm;