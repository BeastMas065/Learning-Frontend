const truncateString = (stri, num) => {
  if (stri.length > num) {
    return stri.slice(0, num) + "...";
  } else {
    return stri;
  }
}
