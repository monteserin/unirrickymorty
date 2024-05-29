import { useEffect, useState } from "react";
import { getCharacters } from "../services/api";
import { Container, Grid } from "../components/Layout.syles";
import { Link } from "react-router-dom";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);

  return (
    <Grid>
      {characters.map((character) => (
        <Link to={"/page2/" + character.id}>
          <img src={character.image} alt="" />
          <p>{character.name}</p>
        </Link>
      ))}
    </Grid>
  );
};

export default Home;
