import { Box } from "@chakra-ui/react"
import React from "react"

interface Props {
	children: React.ReactNode
}
const GameCardContainer = ({ children }: Props) => {
	return (
		<Box
			borderRadius='lg'
			_hover={{
				transform: "scale(1.03)",
				transition: "transform 0.13s ease-in",
			}}
		>
			{children}
		</Box>
	)
}

export default GameCardContainer
