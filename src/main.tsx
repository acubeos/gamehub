import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ColorModeProvider } from "./components/ui/color-mode.tsx"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { RouterProvider } from "react-router"
import routes from "./routes.tsx"
const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ChakraProvider value={defaultSystem}>
			<ColorModeProvider>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={routes} />
					<ReactQueryDevtools />
				</QueryClientProvider>
			</ColorModeProvider>
		</ChakraProvider>
	</StrictMode>
)
