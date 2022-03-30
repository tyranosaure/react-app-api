import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

//Scènes
import { Home, NotFound } from "../../pages/index";

const ROUTES = [
	{
		path: "/",
		key: "ROOT",
		exact: true,
		component: <Home />,
	},
	{
		path: "/notFound",
		key: "NOTFOUND",
		exact: true,
		component: <NotFound />,
	},
];
export default ROUTES;

export function RenderRoutes({ routes }) {
	let location = useLocation();
	return (
		<Routes location={location}>
			{routes.map((route, i) => {
				return (
					<Route
						key={route.key}
						path={route.path}
						exact={route.exact}
						element={route.component}
						render={(props) => <route.component {...props} routes={route.routes} />}
					/>
				);
			})}
		</Routes>
	);
}
