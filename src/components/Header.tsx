import "../styles/header.scss";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="header">
      <a href="/" className="logo">
        Pokemon
      </a>
      <div className="header-right">{/* <SearchBar /> */}</div>
    </div>
  );
}
