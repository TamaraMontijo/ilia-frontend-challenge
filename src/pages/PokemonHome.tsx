import { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import PokemonList from "../interfaces/Pokemon.interface";

export function PokemonHome() {
  const [pokemonList, setPokemonList] = useState<PokemonList | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    api.get("/cards").then((response) =>
      // console.log(response.data));
      setPokemonList(response.data)
    );
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`https://api.pokemontcg.io/v1/cards`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setLoading(false);
  //       setPokemonList(data);
  //     });
  // }, []);

  return (
    <div className="card-table">
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <div className=""></div>
      <Row xs={1} md={4} className="g-4">
        {pokemonList?.cards.map(({ name, imageUrl, id, types }) => (
          <Link key={id} to={`/info/${id}`}>
            <Col>
              <Card style={{ width: "18rem" }} className="mb-2">
                <Card.Header>
                  {name} / <strong>{id}</strong>
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <img src={imageUrl} alt="" />
                  </Card.Title>
                  <Card.Text>
                    Tipo Pokemon / <strong>{types}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Link>
        ))}
      </Row>
    </div>
  );
}
