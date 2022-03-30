import React from "react";
import Authentification from "../../composant/authentification/Authentification";
import Pager from "../../composant/pager/Pager";

export default function Home() {
	return (
		<div className="container grid">
			<Authentification />
			<Pager />
			<div className="grid-item">Filtre</div>
		</div>
	);
}
