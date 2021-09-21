const formatId = (num) => {
  return num < 10 ? "#00" + num : num < 100 ? "#0" + num : "#" + num;
};

export default formatId;
