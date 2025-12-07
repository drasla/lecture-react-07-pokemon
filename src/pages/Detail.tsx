import styled from "styled-components";
import { PageContainer, PageTitle } from "../styles";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

interface DetailData {
    name: string;
    id: number;
    height: number;
    weight: number;
    sprites: { front_default: string };
}

const Info = styled.div`
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    max-width: 400px;
`;

const Img = styled.img`
    width: 160px;
    height: 160px;
`;

const BackButton = styled.button`
    margin-top: 24px;
    padding: 12px 18px;
    border: none;
    border-radius: 8px;
    background: #4b75f6;
    color: white;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background: #3a5dd1;
    }
`;

export default function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["pokemonDetail", id],
        queryFn: () => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
            .then((data:DetailData) => data)
    })

    if (isLoading) return <PageContainer>Loading...</PageContainer>
    if (isError) return <PageContainer>Error loading Pokemon...</PageContainer>

    return (
        <PageContainer>
            <PageTitle>Pokémon Detail</PageTitle>

            {data! && (
                <Info>
                    <Img src={data.sprites.front_default} alt={data.name} />

                    <h2>{data.name}</h2>
                    <div>Height: {data.height}</div>
                    <div>Weight: {data.weight}</div>
                </Info>
            )}

            <BackButton onClick={() => navigate("/")}>← Back</BackButton>
        </PageContainer>
    );
}
