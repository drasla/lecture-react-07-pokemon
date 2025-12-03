import { useEffect, useState } from "react";
import styled from "styled-components";
import { PageContainer, PageTitle } from "../styles";
import PokemonCard from "../components/PokemonCard";
import { useNavigate } from "react-router";

interface Pokemon {
    name: string;
    url: string;
}

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`;

export default function Home() {
    const [list, setList] = useState<Pokemon[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
            .then(res => res.json())
            .then(data => setList(data.results));
    }, []);

    return (
        <PageContainer>
            <PageTitle>Pokémon List</PageTitle>

            <List>
                {list.map((p, index) => {
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
