import { Input, InputGroup } from "@chakra-ui/react"
import { useRef } from "react"
import { LuSearch } from "react-icons/lu"
import { useNavigate } from "react-router"

interface Props {
	onSearchInput: (searchText: string) => void
}

const SearchInput = ({ onSearchInput }: Props) => {
	const navigate = useNavigate()

	const ref = useRef<HTMLInputElement>(null)
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault()
				if (ref.current) onSearchInput(ref.current.value)
				navigate("/")
			}}
		>
			<InputGroup flex='1' startElement={<LuSearch />}>
				<Input
					id='search'
					ref={ref}
					borderRadius={8}
					placeholder='Search games'
					variant='subtle'
				/>
			</InputGroup>
		</form>
	)
}

export default SearchInput
