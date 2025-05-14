import GameGrid from "@/components/GameGrid"
import GameHeading from "@/components/GameHeading"
import GenreList from "@/components/GenreList"
import PlatformSelector from "@/components/PlatformSelector"
import SortSelector from "@/components/SortSelector"
import { Grid, GridItem, Box, HStack } from "@chakra-ui/react"
// import { useState } from "react"
import { GameQuery } from "./Layout"
import { useOutletContext } from "react-router"

interface OutletContext {
	gameQuery: GameQuery
	setGameQuery: (query: GameQuery) => void
}

const Home = () => {
	const { gameQuery, setGameQuery } = useOutletContext<OutletContext>()
	// const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
	return (
		<>
			<Grid
				templateAreas={{ base: `"main"`, lg: `"aside main"` }}
				templateColumns={{ base: "1fr", lg: "200px 1fr" }}
			>
				<GridItem
					paddingX={4}
					area='aside'
					display={{ base: "none", lg: "block" }}
				>
					<GenreList
						onSelectGenre={(genre) =>
							setGameQuery({ ...gameQuery, genreId: genre.id })
						}
						selectedGenreId={gameQuery.genreId}
					/>
				</GridItem>
				<GridItem area='main'>
					<Box paddingX={4}>
						<GameHeading gameHeading={gameQuery} />
						<HStack marginBottom={2}>
							<PlatformSelector
								onSelectPlatform={(platform) =>
									setGameQuery({ ...gameQuery, platformId: platform.id })
								}
								selectedPlatformId={gameQuery.platformId}
							/>
							<SortSelector
								onSelectSortOrder={(sortOrder) => {
									setGameQuery({ ...gameQuery, sortOrder })
								}}
								sortOrder={gameQuery.sortOrder}
							/>
						</HStack>
					</Box>
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</>
	)
}

export default Home
