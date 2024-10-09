const koeffi = [
  0.5, 0.8, 1, 1.3, 1.6, 1.8, 2.1, 2.4, 2.6, 2.8, 2.9, 3, 3.1, 3.3, 3.4, 3.5,
  3.9, 4.1, 4.2, 4.3, 5.2, 5.5, 6.6, 6.8, 6.9,
];
const ovk = [
  7.888, 8, 8.1, 8.3, 8.4, 8.5, 8.6, 8.8, 8.9, 9, 9.2, 9.3, 9.4, 9.6, 9.7, 9.8,
  10, 10.1, 10.2, 10.3, 10.5, 10.6, 10.7, 10.9, 11, 11.1, 11.3, 11.4, 11.5,
  11.7, 11.8, 11.9, 12.1, 12.2, 12.3, 12.4, 12.6, 12.7, 12.8, 13, 13.1, 13.2,
  13.4, 13.5, 13.6, 13.8, 13.9, 14, 14.1, 14.3, 14.4, 14.5, 14.7, 14.8, 14.9,
  15.1, 15.2, 15.3, 15.5, 15.6, 15.7, 15.9, 16, 16.1, 16.2, 16.4, 16.5, 16.6,
  16.8, 16.9, 17, 17.2, 17.3, 17.4, 17.6, 17.7, 17.8, 17.9, 18.1, 18.2, 18.3,
];

function calc_attr_score(attr) {
  let oval = attr - 1200;
  if (attr > 1200) {
    attr = 1200;
  }
  let result = 0;

  if (oval >= 10) {
    result = 3912;
    oval += 1;
    let j = 1;
    while (j < Math.floor(oval / 10)) {
      result += Math.ceil(10 * ovk[j++]);
    }
    result += Math.ceil((oval % 10) * ovk[j]);
  } else {
    attr += 1;
    let i = 0;
    while (i < Math.floor(attr / 50)) {
      result += 50 * koeffi[i++];
    }
    result += (attr % 50) * koeffi[i];
    if (oval > 0) {
      let j = 0;
      while (j < Math.floor(oval / 10)) {
        result += 10 * ovk[j++];
      }
      result += (oval % 10) * ovk[j];
    }
  }

  return Math.floor(result);
}

module.exports = calc_attr_score;
