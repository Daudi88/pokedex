import React, { useContext, useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AdvancedButton from "../advancedbutton/AdvancedButton";
import DropDownMenu from "../dropdownmenu/DropDownMenu";
import getAbilities from "../../shared/functions/getAbilities";
import { PokemonContext } from "../../shared/provider/PokemonProvider";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";
import "./AdvancedSearch.css";
import SearchOption from "../searchoption/SearchOption";
import StatsButton from "../statsbutton/StatsButton";
// import useWindowDimensions from "../../shared/hooks/useWindowDimensions";

const AdvancedSearch = (props) => {
  const lowestNumber = 1;
  const highestNumber = 898;
  const [allPokemons] = useContext(PokemonContext);
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [ability, setAbility] = useState("All");
  const [numberRange, setNumberRange] = useState({
    lowestNumber: lowestNumber,
    highestNumber: highestNumber,
  });
  const [types, setTypes] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]);
  const [isReset, setIsReset] = useState(false);
  const [typeTitles, setTypeTitles] = useState([]);
  const [search, setSearch] = useState(false);

  const [heightStats, setHeightStats] = useState([]);
  const [weightStats, setWeightStats] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const { data } = await PokemonAPIService.getTypes();
        setTypeTitles(data.results.map((result) => result.name).sort());
      } catch (error) {
        console.log(error);
      }
    };

    fetchTypes();
  }, []);

  const expandAdvancedSearch = () => {
    setExpanded(!expanded);
  };

  const handleSearch = () => {
    setSearch(false);
    props.setAdvancedSearch({
      search: true,
      numberRange: {
        lowestNumber: numberRange.lowestNumber,
        highestNumber: numberRange.highestNumber,
      },
      types: types,
      ability: ability,
      // weaknesses: weaknesses,
    });
  };

  useEffect(() => {
    if (!expanded || search) {
      handleSearch();
    }
  }, [expanded, search]);

  useEffect(() => {
    setNumberRange({
      lowestNumber: lowestNumber,
      highestNumber: highestNumber,
    });
    setAbility("All");
    setTypes([]);
    setWeaknesses([]);
    setHeightStats([]);
    setWeightStats([]);
    setSearch(false);
    setIsReset(false);
  }, [isReset]);

  return (
    <div className="advanced-search">
      <div
        className="advanced-search-content"
        style={{ maxHeight: expanded ? "100em" : 0 }}
      >
        <div className="advanced-search-section type-and-weakness">
          <h3 className="advanced-search-title">Type & Weakness</h3>
          <p>
            <span className="types-info">
              <strong>T</strong> = Type
            </span>
            <span className="types-info">
              {" "}
              <strong>W</strong> = Weakness
            </span>
          </p>
          <div className="types">
            {typeTitles?.map((typeTitle, index) => {
              if (typeTitle !== "shadow" && typeTitle !== "unknown") {
                return (
                  <AdvancedButton
                    key={index}
                    typeTitle={typeTitle}
                    types={types}
                    setTypes={setTypes}
                    weaknesses={weaknesses}
                    setWeaknesses={setWeaknesses}
                    isReset={isReset}
                  />
                );
              }
            })}
          </div>
        </div>

        <div className="advanced-search-section number-range">
          <h3 className="advanced-search-title">Number Range</h3>
          <input
            value={numberRange.lowestNumber}
            onChange={(event) =>
              setNumberRange({
                lowestNumber: event.target.value,
                highestNumber: numberRange.highestNumber,
              })
            }
          />
          <span>-</span>
          <input
            value={numberRange.highestNumber}
            onChange={(event) =>
              setNumberRange({
                lowestNumber: numberRange.lowestNumber,
                highestNumber: event.target.value,
              })
            }
          />
        </div>

        <div className="advanced-search-section ability">
          <h3 className="advanced-search-title">Ability</h3>
          <div className="ability-drop-down">
            <button
              className="btn btn-drop-down-header"
              onClick={() => setOpen(!open)}
            >
              <span>{ability}</span>
              <i className={`fas fa-chevron-${open ? "up" : "down"} fa-lg`}></i>
            </button>
            <DropDownMenu
              open={open}
              setOpen={setOpen}
              setDropDownTitle={setAbility}
              options={getAbilities(allPokemons)}
              className="ability"
            />
          </div>
        </div>

        <div className="advanced-search-section height">
          <h3 className="advanced-search-title">Height</h3>
          <StatsButton
            stat="Small"
            stats={heightStats}
            setStats={setHeightStats}
          />
          <StatsButton
            stat="Medium"
            stats={heightStats}
            setStats={setHeightStats}
          />
          <StatsButton
            stat="Large"
            stats={heightStats}
            setStats={setHeightStats}
          />
        </div>

        <div className="advanced-search-section weight">
          <h3 className="advanced-search-title">Weight</h3>
          <StatsButton
            stat="Light"
            stats={weightStats}
            setStats={setWeightStats}
          />
          <StatsButton
            stat="Normal"
            stats={weightStats}
            setStats={setWeightStats}
          />
          <StatsButton
            stat="Heavy"
            stats={weightStats}
            setStats={setWeightStats}
          />
        </div>

        <div className="advanced-search-section bottom-btns">
          <button className="btn-search" onClick={handleSearch}>
            <i className="fas fa-search fa-sm"></i> Search
          </button>
          <button className="btn-reset" onClick={() => setIsReset(true)}>
            Reset
          </button>
        </div>
      </div>

      <div
        className="advanced-search-options"
        style={{ display: expanded ? "none" : "" }}
      >
        {types?.length > 0 && (
          <SearchOption
            type="Type"
            values={types}
            setValues={setTypes}
            defaultValues={[]}
            setSearch={setSearch}
          />
        )}
        {weaknesses?.length > 0 && (
          <SearchOption
            type="Weakness"
            values={weaknesses}
            setValues={setWeaknesses}
            defaultValues={[]}
            setSearch={setSearch}
          />
        )}
        {ability !== "All" && (
          <SearchOption
            type="Ability"
            values={[ability]}
            setValues={setAbility}
            defaultValues={"All"}
            setSearch={setSearch}
          />
        )}
        {(numberRange.lowestNumber > 1 || numberRange.highestNumber < 898) && (
          <SearchOption
            type="Number Range"
            values={[
              `${numberRange.lowestNumber}-${numberRange.highestNumber}`,
            ]}
            setValues={setNumberRange}
            defaultValues={{
              lowestNumber: lowestNumber,
              highestNumber: highestNumber,
            }}
            setSearch={setSearch}
          />
        )}

        {/* <SearchOption type="Height" values={["short"]} /> */}
      </div>

      <div className="advanced-search-notch">
        <div className="btn-advanced-search" onClick={expandAdvancedSearch}>
          {expanded ? "Hide Advanced Search" : "Show Advanced Search"}
          <span className="circle-arrow">
            {expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;
