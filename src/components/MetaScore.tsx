import { Badge } from "@chakra-ui/react"

interface Props {
	metacritic: number
}
const MetaScore = ({ metacritic }: Props) => {
	const color = metacritic < 50 ? "red" : metacritic < 75 ? "yellow" : "green"
	if (!metacritic) return null

	return (
		<Badge colorPalette={color} paddingx={2} fontSize='md'>
			{metacritic}
		</Badge>
	)
}

export default MetaScore
