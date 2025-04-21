import { Grid, GridItem, Show } from "@chakra-ui/react"

function App() {
	return (
		<Grid
			templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
		>
			<GridItem bg='coral' area={"nav"}>
				Nav
			</GridItem>
			<Show above='lg'>
				<GridItem bg='green' area={"aside"}>
					Asides
				</GridItem>
			</Show>
			<GridItem bg='blue' area='main'>
				Content
			</GridItem>
		</Grid>
	)
}

export default App
