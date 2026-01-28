const { palam2juel } = require('#/data/ero/orgasm-const');

const shop_result_type_enum = { hate: 0, pleasure: 0, slave: 0, lover: 0 };
Object.keys(shop_result_type_enum).forEach(
  (k, i) => (shop_result_type_enum[k] = i + 1),
);

module.exports = {
  base_emotion_juel: 80 * palam2juel,
  base_juel_reward: 100 * palam2juel,
  base_skill_limit: 5,
  base_skill_price: 660,
  mark_prices: [0, 1000, 2000, 3500],
  shop_result_type_enum,
  // ABL -> JEWEL[]
  // <br>同等级技能总因子消耗量相同，在所有所需种类的因子中平分
  // <br>因为计算方式，在数组中因子每重复出现一次它的消耗量下降一半
  skill2jewel: {
    10: [0, 7, 0, 7],
    11: [0],
    12: [1],
    13: [2, 7],
    14: [2, 7],
    15: [2],
    16: [5],
    17: [6],
    18: [3],
    19: [7],
    20: [0],
    21: [1],
    22: [2],
    23: [4],
    24: [5],
    25: [6],
    26: [3],
    27: [8],
    30: [0],
    31: [1],
    32: [2],
    33: [4],
    34: [5],
    35: [6],
    36: [3],
    37: [8],
    40: [7, 8, 7, 8],
  },
  // TALENT -> JEWEL[]
  // <br>同阶段特性总因子消耗量相同，在所有所需种类的因子中平分
  // <br>因为计算方式，在数组中因子每重复出现一次它的消耗量下降一半
  talent2jewel: {
    32: [1],
    33: [1],
    40: [7],
    41: [8, 8],
    42: [8, 8],
    60: [0],
    61: [1],
    62: [2],
    63: [4],
    64: [5],
    65: [6],
    66: [3],
    70: [0, 8],
    71: [5, 8],
    72: [6, 8],
    73: [2, 8],
    74: [0, 10],
    75: [5, 10],
    76: [6, 10],
    77: [2, 10],
  },
  talent_button_names_and_check_dict: {
    poisoned: {
      down_delta: {
        1: -1,
      },
      max: 1,
      metrics: {
        0: 50,
      },
      min: 0,
      up_delta: {
        0: 1,
      },
    },
    sm: {
      down_delta: {
        1: -1,
      },
      max: 1,
      metrics: {
        0: 20,
      },
      min: 0,
      up_delta: {
        0: 1,
      },
    },
    trained: {
      down_delta: {
        0: -4,
        1: -1,
        2: -1,
      },
      max: 2,
      metrics: {
        0: 15,
        1: 30,
      },
      min: -4,
      up_delta: {
        '-4': 4,
        0: 1,
        1: 1,
      },
    },
  },
};
