import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Pokemons from "../interfaces/Pokemon.interface";

import "../styles/carousel.scss";

export function PokemonCarousel({ data }: Pokemons) {
  return (
    <div className="carousel">
      <Carousel>
        {data?.map((res) => (
          <Carousel.Item key={res.id}>
            <Link to={`/info/${res.id}`}>
              <img
                className="d-block w-100"
                src={res.images?.small}
                alt="First slide"
              />
            </Link>
            <Carousel.Caption>
              <h3>
                {res.name} / <strong>{res.id}</strong>
              </h3>
              <h2>{res.types}</h2>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
