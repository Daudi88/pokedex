import { useEffect, useState } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const handleRezise = () => {
    setWindowDimensions(getWindowDimensions());
  };

  useEffect(() => {
    window.addEventListener("resize", handleRezise);
    return () => {
      window.removeEventListener("resize", handleRezise);
    };
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
