import { HStack, IconButton } from "@chakra-ui/react"
import {
	FaPlaystation,
	FaWindows,
	FaXbox,
	FaAppStoreIos,
	FaApple,
	FaAndroid,
	FaLinux,
	FaGlobe,
} from "react-icons/fa"
import { BsNintendoSwitch } from "react-icons/bs"
import { IconType } from "react-icons"
import Platform from "@/entities/Platform"

interface Props {
	platforms: Platform[]
}
const PlatformIconLists = ({ platforms }: Props) => {
	const iconMap: Record<string, IconType> = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: BsNintendoSwitch,
		ios: FaApple,
		android: FaAndroid,
		mac: FaAppStoreIos,
		linux: FaLinux,
		web: FaGlobe,
	}
	return (
		<HStack marginY={2}>
			{platforms.map((platform) => (
				<IconButton
					key={platform.id}
					as={iconMap[platform.slug]}
					color='gray.500'
					variant='ghost'
					size='2xs'
				/>
			))}
		</HStack>
	)
}

export default PlatformIconLists
