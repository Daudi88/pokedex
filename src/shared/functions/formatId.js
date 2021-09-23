const formatId = (num) => {
  if (num) {
    return num < 10 ? "#00" + num : num < 100 ? "#0" + num : "#" + num;
  }
  return "";
};

export default formatId;
