import styled from "styled-components";
import { PageContainer, PageTitle } from "../styles";
import PokemonCard from "../components/PokemonCard";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";

interface Pokemon {
    name: string;
    url: string;
}

type ApiResponse = {
    results: Pokemon[];
}

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`;

const fetchPokemonList = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=50").then(res => res.json())
        .then((data:ApiResponse) => data.results);
}

export default function Home() {
    const navigate = useNavigate();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["pokemonList"],
        queryFn: fetchPokemonList,
    });

    if (isLoading) return <PageContainer>Loading...</PageContainer>
    if (isError) return <PageContainer>Error loading Pokemon...</PageContainer>

    return (
        <PageContainer>
            <PageTitle>Pokémon List</PageTitle>

            <List>
                {data!.map((p, index) => {
                    const id = index + 1;
                    return (
                        <PokemonCard
                            key={id}
                            name={p.name}
                            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                            onClick={() => navigate(`/detail/${id}`)}
                        />
                    );
                })}
            </List>
        </PageContainer>
    );
}
