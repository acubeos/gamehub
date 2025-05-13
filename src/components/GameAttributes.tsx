import { SimpleGrid, Text } from "@chakra-ui/react"
import DefinitionItem from "./DefinitionItem"
import Game from "@/entities/Game"
import MetaScore from "./MetaScore"

interface Props {
	game: Game
}

const GameAttributes = ({ game }: Props) => {
	return (
		<SimpleGrid columns={2} as='dl'>
			<DefinitionItem term='Platforms'>
				{game.parent_platforms?.map(({ platform }) => (
					<Text key={platform.id}>{platform.name}</Text>
				))}
			</DefinitionItem>
			<DefinitionItem term='Metascore'>
				<MetaScore metacritic={game.metacritic} />
			</DefinitionItem>
			<DefinitionItem term='Genres'>
				{game.genres?.map(({ name, id }) => (
					<Text key={id}>{name}</Text>
				))}
			</DefinitionItem>
			<DefinitionItem term='Publisher'>
				{game.publishers?.map(({ id, name }) => (
					<Text key={id}>{name}</Text>
				))}
			</DefinitionItem>
		</SimpleGrid>
	)
}

export default GameAttributes
