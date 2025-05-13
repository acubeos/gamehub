import { createBrowserRouter } from "react-router"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import GameDetailPage from "./pages/GameDetailPage"
import ErrorPage from "./pages/ErrorPage"

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "game/:slug", element: <GameDetailPage /> },
		],
	},
])

export default routes
