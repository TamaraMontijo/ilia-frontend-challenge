import "../styles/pokemonDetails.scss";

import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import PokemonData from "../interfaces/PokemonData.interface";
import { api } from "../services/api";

export function PokemonDetails() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const { id } = useParams();

  useEffect(() => {
    api.get(`/cards/${id}`).then((response) => setPokemon(response.data));
  }, []);
  return (
    <>
      <Header />
      <div className="pokemon-details">
        <Card style={{ width: "18rem" }}>
          <Card.Header>
            <strong>{pokemon?.card.name}</strong> ({pokemon?.card.id})
          </Card.Header>
          <Card.Img variant="top" src={pokemon?.card.imageUrl} lang="Imagem" />
          <Card.Body>
            {pokemon?.card.resistances?.map((res) => (
              <Card.Text key={res.type}>Resistencia: {res.type}</Card.Text>
            ))}
            {pokemon?.card.weaknesses?.map((res) => (
              <Card.Text key={res.type}>Fraqueza: {res.type}</Card.Text>
            ))}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
