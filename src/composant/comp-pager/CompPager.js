import React from "react";
import { Link } from "react-router-dom";
import "./CompPager.scss";
export default function CompPager() {
	return (
		<div className="composant-pager">
			<div className="container">
				<Link to="" className="item active">
					1
				</Link>
				<Link to="" className="item">
					2
				</Link>
				<Link to="" className="item">
					3
				</Link>
				<Link to="" className="item">
					4
				</Link>
			</div>
		</div>
	);
}
