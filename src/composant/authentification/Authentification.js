import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import "./Authentification.scss";

export default function Authentification(props) {
	const { loginWithPopup, logout, user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return (
			<div className="grid-item loading">
				<div className="loading-ring">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		);
	}
	if (isAuthenticated) {
		return (
			<div className="grid-item connected">
				<div>
					<h1>Bonjour {user.name}</h1>
					<img src={user.picture.toString()} alt="profil" />
				</div>
				<button onClick={() => logout({ returnTo: window.location.origin })}>Se déconnecter</button>
			</div>
		);
	}

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
					<Link to="">Vous n'avez pas de compte ? Tant pis</Link>
				</div>
			</form>
			<div className="divider">
				<span>OU</span>
			</div>
			<div className="auth-login">
				<button className="google" onClick={loginWithPopup}>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
						alt="google logo"
					/>
					<p>Continuer avec Google</p>
				</button>
				<button className="facebook">
					<img src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png" alt="facebook logo" />
					<p>Continuer avec Facebook</p>
				</button>
			</div>
		</div>
	);
}
