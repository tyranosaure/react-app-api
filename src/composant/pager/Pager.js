import React from "react";
import CompPager from "../comp-pager/CompPager";
import "./Pager.scss";
import PagerItem from "./PagerItem";
export default function Pager() {
	return (
		<div className="grid-item pager">
			<h2>Pagination</h2>
			<div className="grid-container">
				<PagerItem title="Pipi" />
				<PagerItem title="Caca" />
				<PagerItem title="Prout" />
				<PagerItem title="Hello" />
				<PagerItem title="World" />
				<PagerItem title="Yo" />
				<PagerItem title="Shesh" />
				<PagerItem title="Dorian" />
				<PagerItem title="Dorian" />
				<PagerItem title="Dorian" />
				<PagerItem title="Dorian" />
				<PagerItem title="Dorian" />
			</div>
			<CompPager />
		</div>
	);
}
