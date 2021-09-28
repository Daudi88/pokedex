import React, { useContext, useState } from "react";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AdvancedButton from "../advancedbutton/AdvancedButton";
import DropDownMenu from "../dropdownmenu/DropDownMenu";
import "./AdvancedSearch.css";
import scrollToPokemons from "../../shared/functions/scrollToPokemons";
import getAbilities from "../../shared/functions/getAbilities";
import { PokemonContext } from "../../shared/provider/PokemonProvider";

const AdvancedSearch = () => {
  const [allPokemons] = useContext(PokemonContext);
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [ability, setAbility] = useState("All");
  const { width } = useWindowDimensions();
  const types = [
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water",
  ];

  const expandAdvancedSearch = () => {
    setExpanded(!expanded);
  };

  const handleSearch = () => {
    scrollToPokemons();
  };

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
            {types.map((type, index) => {
              return <AdvancedButton key={index} type={type} />;
            })}
          </div>
        </div>

        <div className="advanced-search-section number-range">
          <h3 className="advanced-search-title">Number Range</h3>
          <input defaultValue={1} />
          <span>-</span>
          <input defaultValue={898} />
        </div>

        <div className="advanced-search-section ability">
          <h3 className="advanced-search-title">Ability</h3>
          <div className="ability-drop-down">
            <button
              className="btn btn-drop-down-header"
              onClick={() => setOpen(!open)}
            >
              <span>{ability}</span>
              <i class={`fas fa-chevron-${open ? "up" : "down"} fa-lg`}></i>
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

        <div className="advanced-search-section bottom-btns">
          <button className="btn-search" onClick={handleSearch}>
            <i className="fas fa-search fa-sm"></i> Search
          </button>
          <button className="btn-reset">Reset</button>
        </div>
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
