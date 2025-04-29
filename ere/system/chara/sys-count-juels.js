const { get } = require('#/era-electron');

const { get_custom_check } = require('#/event/check/check-factory');

const { adaptability_names, attr_names } = require('#/data/train-const');

/**
 * @param {number} chara_id
 * @param {number} [edu_ratio]
 * @param {number[]} [attr_arr]
 * @param {number[]} [adapt_arr]
 * @param {number} [_aim_ratio]
 */
function sys_count_juels(chara_id, edu_ratio, attr_arr, adapt_arr, _aim_ratio) {
  const attrs = attr_arr || attr_names.map((e) => get(`base:${chara_id}:${e}`)),
    adapts =
      adapt_arr ||
      adaptability_names.map((e) => get(`cflag:${chara_id}:${e}适性`)),
    aim_ratio =
      _aim_ratio ??
      get_custom_check(chara_id)
        .get_edu_aims()
        .reduce(
          (p, c) => {
            p[0][0] += c.check === 1;
            p[0][1]++;
            return p;
          },
          [[0, 0]],
        )
        .map((e) => e[0] / e[1] || 0)[0];
  const max_adapts = Math.max(...adapts),
    max_adapt_count = adapts.filter((e) => e === max_adapts).length;
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
