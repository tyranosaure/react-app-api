import React from "react";
import "./Authentification.scss";

export default function Authentification(props) {
	return (
		<div className="grid-item authentification">
			<h2>Authentification</h2>
			<form>
				<div className="input-container">
					<span className="span-item">Login</span>
					<input className="input-item" type="login" name="login" id="login" placeholder="Login" />
				</div>
				<div className="input-container">
					<span className="span-item">Password</span>
					<input className="input-item" type="password" name="password" id="password" placeholder="Password" />
				</div>
				<div className="submit-button">
					<input className="submit" type="submit" value="Log in" />
					<a href="#">Vous n'avez pas de compte ? Tant pis</a>
				</div>
			</form>
			<div className="divider">
				<span>OU</span>
			</div>
			<div className="auth-login">
				<button className="google">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" />
					<p>Continuer avec Google</p>
				</button>
				<button className="facebook">
					<img src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png" />
					<p>Continuer avec Facebook</p>
				</button>
			</div>
		</div>
	);
}
