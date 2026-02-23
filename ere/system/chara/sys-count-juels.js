const { get } = require('#/era-electron');

const { get_custom_check } = require('#/event/check/check-factory');

/**
 * @param {number} cid
 * @param {number} [edu_ratio]
 * @param {number[]} [attrs]
 * @param {number[]} [adapts]
 * @param {number} [aim_ratio]
 * @returns {{blue:number,pink:number,white:number}}
 */
function sys_count_juels(
  cid,
  edu_ratio,
  // BASENAME:5 - 9 = 速度 - 智力
  attrs = new Array(5).fill(0).map((_, i) => get(`base:${cid}:${5 + i}`)),
  // CFLAGNAME:30 - 39 = 草地适性 - 追马适性
  adapts = new Array(10).fill(0).map((_, i) => get(`cflag:${cid}:${30 + i}`)),
  aim_ratio = get_custom_check(cid)
    .get_edu_aims()
    .filter(({ content }) => !content)
    .reduce(
      (p, c) => {
        p[0][0] += c.check === 1;
        p[0][1]++;
        return p;
      },
      [[0, 0]],
    )
    .map((e) => e[0] / e[1] || 0)[0],
) {
  const max_adapts = Math.max(...adapts);
  const max_adapt_count = adapts.filter((e) => e === max_adapts).length;
  return {
    blue: Math.floor(
      attrs.reduce((p, c) => p + Math.floor(c / 300) + (c === 2000), 0) *
        5 *
        edu_ratio,
    ),
    pink: Math.floor(
      (max_adapts * (1 - 0.5 ** max_adapt_count) * 10 * edu_ratio) / (1 - 0.5),
    ),
    white: Math.floor(100 * aim_ratio * edu_ratio),
  };
}

module.exports = sys_count_juels;
