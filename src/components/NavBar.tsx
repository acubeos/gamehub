import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/Logo.png"
import { ColorModeButton } from "./ui/color-mode"
import SearchInput from "./SearchInput"
import { Link } from "react-router"

interface Props {
	onSearchInput: (searchText: string) => void
}

const NavBar = ({ onSearchInput }: Props) => {
	return (
		<HStack padding={6}>
			<Link reloadDocument to={"/"}>
				<Image src={logo} boxSize='40px' borderRadius={8} objectFit='cover' />
			</Link>
			<SearchInput onSearchInput={onSearchInput} />
			<ColorModeButton />
		</HStack>
	)
}

export default NavBar
