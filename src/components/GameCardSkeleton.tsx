import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
	return (
		<Card.Root overflow='hidden'>
			<Skeleton loading={true} height='200px' width='100%' />
			<Card.Body>
				<SkeletonText loading={true} noOfLines={1} />
				<HStack justifyContent='space-between' pt={4}>
					<SkeletonText loading={true} noOfLines={1} />
					<Skeleton loading={true}></Skeleton>
				</HStack>
			</Card.Body>
		</Card.Root>
	)
}

export default GameCardSkeleton
