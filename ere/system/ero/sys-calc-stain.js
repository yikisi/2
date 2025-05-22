const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');

const { buff_colors } = require('#/data/color-const');
const { item_enum } = require('#/data/ero/item-const');
const { part_enum, part_touch } = require('#/data/ero/part-const');
const { stain_enum, stain_names } = require('#/data/ero/stain-const');

const cache = {};

/**
 * @param {number} _stain
 * @returns {number}
 */
function count_stain(_stain) {
  let stain = _stain,
    ret = 0;
  if (!stain) {
    return 0;
  }
  do {
    stain = stain & (stain - 1);
    ret++;
  } while (stain);
  return ret;
}

module.exports = {
  /**
   * 暂时仅限牛子戴套的情况
   * @param {number} chara_id
   */
  cache_penis_stain(chara_id) {
    cache[chara_id] = era.get(`stain:${chara_id}:阴茎`);
    era.set(`stain:${chara_id}:阴茎`, 1 << stain_enum.lubricant);
  },
  /**
   * @param {number} chara_id
   * @param {number} part
   * @param {number} stain_type
   */
  check_stain(chara_id, part, stain_type) {
    return (
      (era.get(`stain:${chara_id}:${part_touch[part]}`) & (1 << stain_type)) > 0
    );
  },
  /**
   * @param {number} chara_id
   * @param {number} part
   * @param {number} kept_stains
   * @returns {number}
   */
  clean_part_stain(chara_id, part, ...kept_stains) {
    const stain = era.get(`stain:${chara_id}:${part_touch[part]}`),
      kept = kept_stains.reduce((p, c) => p + (1 << c), 0);
    era.set(`stain:${chara_id}:${part_touch[part]}`, stain & kept);
    return count_stain(stain & ~kept);
  },
  /**
   * @param {number} chara_id
   * @param {number} parts
   * @returns {number}
   */
  clean_stain: (chara_id, ...parts) =>
    parts.reduce((previous_val, part) => {
      const ret =
        previous_val +
        count_stain(era.get(`stain:${chara_id}:${part_touch[part]}`));
      era.set(`stain:${chara_id}:${part_touch[part]}`, 0);
      return ret;
    }, 0),
  /**
   * @param {number} chara_id
   * @param {number} part
   * @param {number} lower_border
   * @param {number} [_upper_border]
   * @param {function(number):number} [cb]
   * @returns {number}
   */
  count_part_stain_in_range(chara_id, part, lower_border, _upper_border, cb) {
    let ret = 0,
      stain = era.get(`stain:0:${part_touch[part]}`),
      upper_border = _upper_border;
    const cleaning_tolerance = era.get(`talent:${chara_id}:洁净重视`);
    upper_border !== undefined && (upper_border += cleaning_tolerance === 1);
    const intolerable =
      upper_border === undefined || upper_border > stain_names.length
        ? 0
        : stain >> upper_border;
    if (intolerable) {
      stain -= intolerable << upper_border;
      ret = -2 * count_stain(intolerable);
    }
    ret += Math.min(
      (cb || ((e) => e + 1))(cleaning_tolerance) -
        count_stain(stain >> lower_border),
      0,
    );
    return ret;
  },
  /**
   * @param {EroParticipant} attacker
   * @param {EroParticipant} defender
   * @param {number} [item]
   */
  merge_stain(attacker, defender, item) {
    let use_item = false;
    const stain_keys = [attacker, defender]
      .filter((e) => e.id !== -1 && e.part !== -1)
      .map((e) => {
        if (e.part === part_enum.item) {
          use_item =
            item === item_enum.anal_beads ||
            item === item_enum.butt_plug ||
            item === item_enum.dildo ||
            item === item_enum.love_eggs ||
            item === item_enum.artificial_virgin;
        } else if (e.part <= part_enum.penis) {
          return `stain:${e.id}:${part_touch[e.part]}`;
        }
      })
      .filter((e) => e !== undefined);
    if (stain_keys.length === 2) {
      const stain = era.get(stain_keys[0]) | era.get(stain_keys[1]);
      era.set(stain_keys[0], stain);
      era.set(stain_keys[1], stain);
    } else if (use_item) {
      stain_keys.forEach((key) =>
        era.set(key, era.get(key) | (1 << stain_enum.lubricant)),
      );
    }
  },
  /**
   * @param {number} chara_id
   * @param {string} part
   */
  poll_stain(chara_id, part) {
    const ret = [];
    let stain = era.get(`stain:${chara_id}:${part}`);
    if (stain > 0) {
      Object.keys(stain_enum).forEach((_, i) => {
        if (stain % 2) {
          ret.push({
            n: stain_names[i],
            c: get_gradient_color(
              undefined,
              buff_colors[3],
              i / (stain_names.length - 1),
            ),
          });
        }
        stain >>= 1;
      });
    }
    return ret.map((e) => {
      return {
        color: e.c,
        content: `<${e.n}>`,
        display: 'inline-block',
      };
    });
  },
  /** @param {number} chara_id */
  rollback_penis_stain(chara_id) {
    era.set(`stain:${chara_id}:阴茎`, cache[chara_id]);
    delete cache[chara_id];
  },
  /**
   * @param {number} chara_id
   * @param {number} part
   * @param {number} stain_type
   */
  set_stain(chara_id, part, ...stain_type) {
    let result = era.get(`stain:${chara_id}:${part_touch[part]}`);
    stain_type.forEach((type) => (result |= 1 << type));
    era.set(`stain:${chara_id}:${part_touch[part]}`, result);
  },
};
