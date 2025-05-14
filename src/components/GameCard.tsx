import { Card, Heading, HStack, Image } from "@chakra-ui/react"
import PlatformIconLists from "./PlatformIconLists"
import MetaScore from "./MetaScore"
import getCroppedImgUrl from "@/services/image-url"
import { Link } from "react-router"
import Game from "@/entities/Game"

interface Props {
	game: Game
}
const GameCard = ({ game }: Props) => {
	return (
		<Link to={"/game/" + game.slug}>
			<Card.Root overflow='hidden'>
				<Image src={getCroppedImgUrl(game.background_image)} />
				<Card.Body>
					<Heading fontSize='2xl' fontWeight='bold'>
						{game.name}
					</Heading>
					<HStack justifyContent='space-between'>
						<PlatformIconLists
							platforms={game.parent_platforms.map((p) => p.platform)}
						/>

						<MetaScore metacritic={game.metacritic} />
					</HStack>
				</Card.Body>
			</Card.Root>
		</Link>
	)
}

export default GameCard
