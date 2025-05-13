import NavBar from "@/components/NavBar"
import { Box, Heading, Text } from "@chakra-ui/react"
import { useState } from "react"
import { isRouteErrorResponse, useRouteError } from "react-router"
import { GameQuery } from "./Layout"

const ErrorPage = () => {
	const error = useRouteError()
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
	return (
		<>
			<NavBar
				onSearchInput={(searchText) =>
					setGameQuery({ ...gameQuery, searchText })
				}
			/>
			<Box padding={4}>
				<Heading fontSize={42} pb={3}>
					Oops...
				</Heading>
				<Text fontSize={18}>
					{isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected error"}
				</Text>
			</Box>
		</>
	)
}

export default ErrorPage
