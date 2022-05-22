import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHero = ({ queryKey }) => {
    const heroId = queryKey[1];   //destructured heroId param passed as prop where queryKey[1] is the id
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const useSuperHeroData = (heroId) => {
    const queryClient = useQueryClient();

    return useQuery(["super-hero", heroId], fetchSuperHero, {
        initialData: () => {
            const hero = queryClient.getQueryData("super-heroes") 
            ?.data?.find((hero) => hero.id === parseInt(heroId))

            if (hero) {
                return { data: hero }
                } else {
                    return undefined
                }
            },
    })
}