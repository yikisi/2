const attr_enum = {
  speed: 0,
  endurance: 0,
  strength: 0,
  toughness: 0,
  intelligence: 0,
};
Object.keys(attr_enum).forEach((k, i) => (attr_enum[k] = i));

const attr_names = [];
attr_names[attr_enum.speed] = '速度';
attr_names[attr_enum.endurance] = '耐力';
attr_names[attr_enum.strength] = '力量';
attr_names[attr_enum.toughness] = '根性';
attr_names[attr_enum.intelligence] = '智力';

module.exports = {
  adaptability_names: [
    '草地',
    '泥地',
    '短距离',
    '英里赛',
    '中距离',
    '长距离',
    '逃马',
    '先马',
    '差马',
    '追马',
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
  motivation_names: ['极差', '较差', '一般', '较佳', '极佳'],
  out_of_train_type: ['已育成', '殿堂'],
  pressure_border: {
    apprehension: 5000,
    depression: 7500,
    limit: 10000,
    unhappy: 2500,
  },
  time_cost: {
    player: 200,
    uma: 400,
  },
  train_buff_info: ['疏于训练', '', '精于训练', '极擅训练'],
};
