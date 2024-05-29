import axios from "axios";

export const getCharacters = async () => {
  const response = await axios.get("https://rickandmortyapi.com/api/character");
  return response.data.results;
};

export const getCharacterById = async (id) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return response.data;
};
