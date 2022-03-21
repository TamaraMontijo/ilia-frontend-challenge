import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonHome } from "./pages/PokemonHome";
import { PokemonDetails } from "./pages/PokemonDetails";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonHome />} />
        <Route path="/info/:id" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
