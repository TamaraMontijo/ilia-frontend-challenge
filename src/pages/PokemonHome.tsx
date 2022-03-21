import "../styles/home.scss";

import { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import PokemonList from "../interfaces/PokemonList.interface";
import Header from "../components/Header";
import { PokemonCarousel } from "../components/Carousel";

export function PokemonHome() {
  const [pokemonList, setPokemonList] = useState<PokemonList | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    api.get("/cards").then((response) => setPokemonList(response.data));
  }, []);

  return (
    <>
      <Header />
      <PokemonCarousel cards={pokemonList?.cards} />
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
                    <strong>{name}</strong> ({id})
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <img src={imageUrl} alt="" />
                    </Card.Title>
                    <Card.Text>
                      Tipo: <strong>{types}</strong>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Link>
          ))}
        </Row>
      </div>
    </>
  );
}
