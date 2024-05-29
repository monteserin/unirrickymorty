import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../services/api";
import { Row } from "../components/Layout.syles";

const Page2 = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getCharacterById(id).then(setCharacter);
  }, [id]);

  return (
    <Row>
      <div>
        <p>Name: {character.name}</p>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
      </div>
      <img src={character.image} alt="" />
    </Row>
  );
};

export default Page2;
