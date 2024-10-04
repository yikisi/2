const { palam2juel } = require('#/data/ero/orgasm-const');

const shop_result_type_enum = { hate: 0, pleasure: 0, slave: 0, lover: 0 };
Object.keys(shop_result_type_enum).forEach(
  (k, i) => (shop_result_type_enum[k] = i + 1),
);

module.exports = {
  base_emotion_juel: 80 * palam2juel,
  base_juel_reward: 100 * palam2juel,
  base_skill_price: 500,
  mark_prices: [0, 1000, 2000, 3500],
  shop_list: [
    '口腔快感',
    '胸部快感',
    '身体快感',
    '阴茎快感',
    '外阴快感',
    '阴道快感',
    '肛门快感',
    '施虐快感',
    '受虐快感',
  ],
  shop_result_type_enum,
  talent_button_names_and_check_dict: {
    poisoned: {
      down: '消除特性',
      down_delta: {
        1: -1,
      },
      max: 1,
      metrics: {
        0: 50,
      },
      min: 0,
      up: '获取特性',
      up_delta: {
        0: 1,
      },
    },
    sm: {
      down: '消除特性',
      down_delta: {
        1: -1,
      },
      max: 1,
      metrics: {
        0: 20,
      },
      min: 0,
      up: '获取特性',
      up_delta: {
        0: 1,
      },
    },
    trained: {
      down: '降低感度',
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
      up: '提升感度',
      up_delta: {
        '-4': 4,
        0: 1,
        1: 1,
      },
    },
  },
};
