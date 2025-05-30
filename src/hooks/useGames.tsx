import APIClient, { FetchResponse } from "@/services/api-client"
import { useInfiniteQuery } from "@tanstack/react-query"
import ms from "ms"
import Game from "@/entities/Game"
import { GameQuery } from "@/pages/Layout"

const apiClient = new APIClient<Game>("/games")

const useGames = (gameQuery: GameQuery) =>
	useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: ({ pageParam }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam,
				},
			}),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined
		},
		staleTime: ms("24h"),
	})

export default useGames
