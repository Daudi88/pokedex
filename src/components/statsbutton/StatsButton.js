import React, { useEffect, useState } from "react";
import "./StatsButton.css";

const StatsButton = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (props.stats.includes(props.stat)) {
      props.setStats(props.stats.filter((stat) => stat !== props.stat));
    } else {
      props.setStats([...props.stats, props.stat]);
    }
  };

  useEffect(() => {
    console.log(props.stats);
    if (props.stats.includes(props.stat)) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }, [props.stats]);

  const colors = {
    background: isClicked ? "var(--clr-orange)" : "",
    color: isClicked ? "#fff" : "",
  };

  return (
    <button className="btn-stats" onClick={handleClick} style={colors}>
      {props.stat}
    </button>
  );
};

export default StatsButton;
