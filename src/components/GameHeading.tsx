import useGenres from "@/hooks/useGenres"
import { GameQuery } from "@/pages/Layout"
import { Heading } from "@chakra-ui/react"

interface Props {
	gameHeading: GameQuery
}

const GameHeading = ({ gameHeading }: Props) => {
	const { data } = useGenres()
	const genre = data?.results.find((g) => g.id === gameHeading.genreId)

	const heading = `${genre?.name || ""} Games`
	return (
		<Heading as='h1' pb={2}>
			{heading}
		</Heading>
	)
}

export default GameHeading
