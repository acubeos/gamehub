import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/Logo.png"
import { ColorModeButton } from "./ui/color-mode"
const NavBar = () => {
	return (
		<HStack justifyContent='space-between'>
			<Image src={logo} boxSize='50px' />
			<ColorModeButton paddingRight='6' />
		</HStack>
	)
}

export default NavBar
