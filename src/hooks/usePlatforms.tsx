import { useQuery } from "@tanstack/react-query"
import APIClient from "@/services/api-client"
import ms from "ms"
import Platform from "@/entities/Game"

const apiClient = new APIClient<Platform>("/platforms/lists/parents")

const usePlaforms = () =>
	useQuery({
		queryKey: ["platforms"],
		queryFn: apiClient.getAll,
		staleTime: ms("24h"),
	})

export default usePlaforms
