import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/Logo.png"
import { ColorModeButton } from "./ui/color-mode"
const NavBar = () => {
	return (
		<HStack>
			<Image src={logo} boxSize='50px' />
			<Text>Home</Text>
			<ColorModeButton />
		</HStack>
	)
}

export default NavBar
