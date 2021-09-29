import React from "react";
import capitalize from "../../shared/functions/capitalize";
import "./SearchOption.css";

const SearchOption = (props) => {
  const handleClick = () => {
    props.setValues(props.defaultValues);
    props.setSearch(true);
  };

  return (
    <button className="search-option" onClick={handleClick}>
      <h4>{props.type}:</h4>
      <p>
        {props.values.length > 1
          ? `${props.values.length} Selected`
          : capitalize(props.values[0])}
      </p>
      <span>
        <i className="fas fa-times fa-lg"></i>
      </span>
    </button>
  );
};

export default SearchOption;
