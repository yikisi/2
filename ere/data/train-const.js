const { __, i18n } = require('#/i18n/selector');

const attr_enum = {
  speed: 0,
  endurance: 0,
  strength: 0,
  toughness: 0,
  intelligence: 0,
};
Object.keys(attr_enum).forEach((k, i) => (attr_enum[k] = i));

/** @type {string[]} */
const attr_names = [];
attr_names[attr_enum.speed] = i18n().speed;
attr_names[attr_enum.endurance] = i18n().endurance;
attr_names[attr_enum.strength] = i18n().strength;
attr_names[attr_enum.toughness] = i18n().toughness;
attr_names[attr_enum.intelligence] = i18n().intelligence;

module.exports = {
  adaptability_names: [
    i18n().a_g_grass,
    i18n().a_g_dirt,
    i18n().a_d_short,
    i18n().a_d_mile,
    i18n().a_d_medium,
    i18n().a_d_long,
    i18n().a_s_nige,
    i18n().a_s_senko,
    i18n().a_s_sashi,
    i18n().a_s_okimi,
  ],
  attr_enum,
  attr_names,
  fail_sta_border: {
    intelligence: 0.3, // 30%
    other: 0.5, // 50%
  },
  fumble_border: 0.35,
  fumble_result: {
    fail: {
      attr_down: -5,
      attr_down_again: -10,
      attr_down_times: 1,
      attr_down_times_again: 1,
      like: 0,
      like_fail_again: -2,
      like_success: 4,
      motivate_down: -1,
      ratio: {
        accept_talent: 0.25,
        fail_again: 0.9,
        fail_again_talent: 0.5,
      },
    },
    fumble: {
      attr_down: -10,
      attr_down_again: -10,
      attr_down_times: 3,
      attr_down_times_again: 3,
      like: -2,
      like_fail_again: -4,
      like_success: 6,
      motivate_down: -3,
      ratio: {
        accept_talent: 0.5,
        fail_again: 0.95,
        fail_again_talent: 0.75,
      },
    },
  },
  motivation_names: new Array(5).fill(void 0).map((_, i) => __(`moti_${i}`)),
  out_of_train_type: [i18n().oot_0, i18n().oot_1],
  pressure_border: {
    apprehension: 5000,
    depression: 7500,
    limit: 10000,
    unhappy: 2500,
  },
  time_cost: [320, 352, 368, 400, 416],
  train_buff_info: [
    i18n().train_debuff,
    '',
    i18n().train_buff_1,
    i18n().train_buff_2,
  ],
};
