import styled from "styled-components";

const Card = styled.div`
  width: 180px;
  background: white;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 12px;

  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-6px);
  }
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
  margin: 0 auto;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

interface Props {
    name: string;
    img: string;
    onClick: () => void;
}

export default function PokemonCard({ name, img, onClick }: Props) {
    return (
        <Card onClick={onClick}>
            <Img src={img} alt={name} />
            <Name>{name}</Name>
        </Card>
    );
}