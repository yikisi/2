const score_dict = require('#/data/attr-score.json');

/**
 * @param {number} attr
 * @returns {number}
 */
function calc_attr_score(attr) {
  if (attr >= 2000) {
    return score_dict.at(-1);
  }
  if (attr <= 1) {
    return score_dict[0];
  }
  return score_dict[Math.floor(attr) - 1];
}

/**
 * @param {number} score
 * @returns {number}
 */
function get_attr_by_score(score) {
  if (score <= 1) {
    return 2;
  }
  if (score >= score_dict.at(-1)) {
    return 2000;
  }
  let x = 0;
  let y = 1999;
  do {
    const m = Math.floor((x + y) / 2);
    if (score_dict[m] <= score && score_dict[m + 1] > score) {
      x = m + 1;
      break;
    }
    if (score_dict[m + 1] <= score) {
      x = m;
    } else {
      y = m;
    }
  } while (x < y - 1);
  return x + 1;
}

module.exports = { calc_attr_score, get_attr_by_score };
