import { useState } from "react"
import { Outlet } from "react-router"
import { Box } from "@chakra-ui/react"
import NavBar from "@/components/NavBar"

export interface GameQuery {
	genreId?: number
	platformId?: number
	sortOrder: string
	searchText: string
}

const Layout = () => {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
	return (
		<>
			<NavBar
				onSearchInput={(searchText) =>
					setGameQuery({ ...gameQuery, searchText })
				}
			/>
			<Box padding={2}>
				<Outlet context={{ gameQuery, setGameQuery }} />
			</Box>
		</>
	)
}

export default Layout
