import React, { useState } from "react";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";
import Loader from "../../components/loader/Loader";

const TestView = () => {
  const [serverData, setServerData] = useState();
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await PokemonAPIService.searchPokemon(search);
      setServerData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const displayData = () => {
    if (loading)
      return (
        <div>
          <h2>Loading pokemon...</h2>
          <Loader />
        </div>
      );
    return (
      <div>
        {" "}
        {serverData && (
          <div>
            <h2>Name: {serverData.name}</h2>
            <img
              src={serverData?.sprites?.other["official-artwork"].front_default}
              alt="image"
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="view-container">
      <h1>Test View!</h1>
      <input
        placeholder="Search for pokemon"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={fetchData}>Search</button>

      <Loader />

      <div>{displayData()}</div>
    </div>
  );
};

export default TestView;
