import useGenres from "@/hooks/useGenres"
import Genre from "@/entities/Game"
import getCroppedImgUrl from "@/services/image-url"
import { HStack, Image, Link, List } from "@chakra-ui/react"

interface Props {
	onSelectGenre: (genre: Genre) => void
	selectedGenreId?: number
}
const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
	const { data, error } = useGenres()
	if (error) return null

	return (
		<>
			{data?.results.map((genre) => (
				<List.Root key={genre.id}>
					<HStack>
						<Image
							objectFit='cover'
							boxSize='32px'
							borderRadius={8}
							src={getCroppedImgUrl(genre.background_image)}
						/>
						<List.Item as='ul' paddingY={2}>
							<Link
								onClick={() => onSelectGenre(genre)}
								variant='plain'
								fontSize='lg'
								fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
							>
								{genre.name}
							</Link>
						</List.Item>
					</HStack>
				</List.Root>
			))}
		</>
	)
}

export default GenreList
