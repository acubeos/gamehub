import Platform from "@/entities/Platform"
import usePlaforms from "@/hooks/usePlatforms"
import { Button, Menu, Portal } from "@chakra-ui/react"
import { LuChevronDown } from "react-icons/lu"

interface Props {
	onSelectPlatform: (platform: Platform) => void
	selectedPlatformId?: number
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
	const { data, error } = usePlaforms()
	const selectedPlatform = data?.results.find(
		(platform) => platform.id === selectedPlatformId
	)

	if (error) return null

	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant='outline'>
					{selectedPlatform?.name || "Select Platform"}
					<LuChevronDown />
				</Button>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						{data?.results.map((platform) => (
							<Menu.Item
								key={platform.id}
								value={platform.name}
								onClick={() => onSelectPlatform(platform)}
							>
								{platform.name}
							</Menu.Item>
						))}
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu.Root>
	)
}

export default PlatformSelector
