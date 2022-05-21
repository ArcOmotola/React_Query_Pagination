import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHero = ({ queryKey }) => {
    const heroId = queryKey[1];   //destructured heroId param passed as prop where queryKey[1] is the id
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const useSuperHeroData = (heroId) => {
    return useQuery(["super-hero", heroId], fetchSuperHero)
}