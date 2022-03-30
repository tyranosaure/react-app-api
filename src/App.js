import "./App.scss";
import Header from "./composant/header/Header";
import { ROUTES, RenderRoutes } from "./services/index";
function App() {
	return (
		<div className="app">
			<Header />
			<RenderRoutes routes={ROUTES} />
		</div>
	);
}

export default App;
