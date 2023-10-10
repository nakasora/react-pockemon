import { useEffect } from "react";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon";
import { useState } from "react";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      //全てのポケモンデータを取得
      const res = await getAllPokemon(initialURL);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);
  return (
    <>
      <div className="App"></div>
      {loading ? <h1>ロード中...</h1> : <h1>ポケモンデータを取得しました</h1>}
    </>
  );
}

export default App;
