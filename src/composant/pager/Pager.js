import React, { useState } from "react";
import CompPager from "../comp-pager/CompPager";
import "./Pager.scss";
import PagerItem from "./PagerItem";
import Data from "./data.json";
export default function Pager() {
	const data = Data;

	return (
		<div className="grid-item pager">
			<h2>Pagination</h2>
			<div className="grid-container">
				{data.map((item, index) => {
					return (
						<>
							<PagerItem key={item._id} title={item.name} />
						</>
					);
				})}
			</div>
			<CompPager />
		</div>
	);
}
