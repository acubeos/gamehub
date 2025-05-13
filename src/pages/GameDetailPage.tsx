import ExpandableText from "@/components/ExpandableText"
import GameAttributes from "@/components/GameAttributes"
import GameScreenshots from "@/components/GameScreenshots"
import useGame from "@/hooks/useGame"
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams } from "react-router"

const GameDetailPage = () => {
	const { slug } = useParams()
	const { data, isLoading, error } = useGame(slug!)

	if (isLoading) return <Spinner />
	if (error || !data) throw error

	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
			<GridItem>
				<Heading>{data.name}</Heading>
				<ExpandableText>{data.description_raw}</ExpandableText>
				<GameAttributes game={data} />
			</GridItem>
			<GridItem>
				<GameScreenshots gameId={data.id} />
			</GridItem>
		</SimpleGrid>
	)
}

export default GameDetailPage
