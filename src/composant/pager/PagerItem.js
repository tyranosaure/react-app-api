import React from "react";
import "./PagerItem.scss";
export default function PagerItem(props) {
	const { title } = props;
	return (
		<div className="grid-item pager-item">
			<p>{title}</p>
		</div>
	);
}
