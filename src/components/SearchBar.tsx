import "../styles/searchBar.scss";

import React from "react";

export function SearchBar() {
  const pokemonRef: React.RefObject<HTMLInputElement> = React.createRef();

  return <input type="text" ref={pokemonRef} />;
}
