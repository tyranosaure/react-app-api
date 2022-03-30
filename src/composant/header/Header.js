import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
export default function Header() {
	return (
		<div className="header">
			<header>
				<nav>
					<ul>
						<li>
							<Link to="/">Accueil</Link>
						</li>
						<li>
							<Link to="/notFound">Page non trouvé</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
