function increaseId(num, offset) {
  if (num < 898 - offset) {
    return num + offset;
  }
  return 1;
}

export default increaseId;
