const attr_enum = {
  speed: 0,
  endurance: 0,
  strength: 0,
  toughness: 0,
  intelligence: 0,
  hp: 0,
  tp: 0,
};
Object.keys(attr_enum).forEach((k, i) => (attr_enum[k] = i));

module.exports = {
  attr_enum,
  base_attr_list: Object.values(attr_enum).slice(0, 5),
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
  pressure_border: {
    apprehension: 5000,
    depression: 7500,
    limit: 10000,
    unhappy: 2500,
  },
  time_cost: [320, 352, 368, 400, 416],
};
