const decreaseId = (num, offset) => {
  console.log(num);
  console.log(offset);
  console.log(num - offset);
  if (num - offset > 0) {
    return num - offset;
  }
  return 898;
};

export default decreaseId;
