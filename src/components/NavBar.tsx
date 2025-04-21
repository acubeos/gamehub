import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/Logo.png"
const NavBar = () => {
	return (
		<HStack>
			<Image src={logo} boxSize='50px' />
			<Text>Home</Text>
		</HStack>
	)
}

export default NavBar
