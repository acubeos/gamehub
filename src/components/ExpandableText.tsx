import { Button, Text } from "@chakra-ui/react"
import { useState } from "react"

interface Props {
	children: string
}

const ExpandableText = ({ children }: Props) => {
	const [isExpanded, setExpanded] = useState(false)
	if (!children) return null

	if (children.length < 300) return <Text>{children}</Text>

	const limit = 300
	const summary = isExpanded ? children : children.substring(0, limit) + "..."

	return (
		<Text>
			{summary}
			<Button
				size='xs'
				borderRadius={8}
				fontWeight='bold'
				onClick={() => setExpanded(!isExpanded)}
				ml='2'
				colorPalette='yellow'
			>
				{isExpanded ? "Show less" : "Show more"}
			</Button>
		</Text>
	)
}

export default ExpandableText
