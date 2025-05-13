import usePlaforms from "@/hooks/usePlatforms"
import { Button, Menu, Portal } from "@chakra-ui/react"
import { LuChevronDown } from "react-icons/lu"

interface Props {
	onSelectSortOrder: (sortOrder: string) => void
	sortOrder: string
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
	const { error } = usePlaforms()

	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Rating" },
		{ value: "-released", label: "Release Date" },
		{ value: "-added", label: "Date Added" },
		{ value: "name", label: "Name" },
	]

	const currentSortOrder = sortOrders.find((order) => order.value === sortOrder)

	if (error) return null

	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant='outline'>
					Order by: {currentSortOrder?.label || "Relevance"}
					<LuChevronDown />
				</Button>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						{sortOrders.map((order) => (
							<Menu.Item
								key={order.value}
								value={order.value}
								onClick={() => {
									onSelectSortOrder(order.value)
								}}
							>
								{order.label}
							</Menu.Item>
						))}
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu.Root>
	)
}

export default SortSelector
