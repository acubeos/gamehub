import { SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import useGames from "@/hooks/useGames"
import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { GameQuery } from "@/pages/Layout"

interface Props {
	gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data, error, isLoading, fetchNextPage, hasNextPage } =
		useGames(gameQuery)
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

	if (error) return <Text>{error.message}</Text>

	const fetchedGamesCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) || 0

	return (
		<>
			<InfiniteScroll
				dataLength={fetchedGamesCount}
				hasMore={!!hasNextPage}
				next={() => fetchNextPage()}
				loader={<Spinner />}
			>
				<SimpleGrid
					padding={4}
					columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
					gap={6}
				>
					{isLoading &&
						skeletons.map((index) => (
							<GameCardContainer key={index}>
								<GameCardSkeleton />
							</GameCardContainer>
						))}
					{data?.pages.map((page, index) => (
						<React.Fragment key={index}>
							{page.results.map((game) => (
								<GameCardContainer key={game.id}>
									<GameCard game={game} />
								</GameCardContainer>
							))}
						</React.Fragment>
					))}
				</SimpleGrid>
			</InfiniteScroll>
		</>
	)
}

export default GameGrid
