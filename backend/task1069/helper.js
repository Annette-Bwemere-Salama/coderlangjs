export const formatNumber = (n) => {
  if (n < 1000) {
    return n.toFixed(1);
  } else {
    const suffixes = ["", "K", "M", "B", "T"];
    const suffixNum = Math.floor(("" + n).length / 3);
    let shortValue = parseFloat((suffixNum != 0 ? (n / Math.pow(1000, suffixNum)) : n).toPrecision(2));
    if (shortValue % 1 != 0) {
      shortValue = shortValue.toFixed(2);
    }
    return shortValue + suffixes[suffixNum];
  }
}

