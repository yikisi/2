const { class_enum } = require('#/data/race/model/race-info');

const race_rewards = [];

race_rewards[class_enum.G1] = {
  1: {
    attr: [10, 10],
    fame: 50,
    pt: [60, 60],
  },
  10: {
    attr: [4, 4],
    fame: -5,
    pt: [30, 30],
  },
  20: {
    fame: -10,
  },
  5: {
    attr: [5, 8],
    fame: 25,
    pt: [50, 60],
  },
};
race_rewards[class_enum.G2] = race_rewards[class_enum.G3] = {
  1: {
    attr: [8, 8],
    fame: 25,
    pt: [50, 50],
  },
  10: {
    attr: [3, 3],
    fame: -10,
    pt: [25, 25],
  },
  20: {
    fame: -20,
  },
  5: {
    attr: [4, 6],
    fame: 10,
    pt: [40, 50],
  },
};
race_rewards[class_enum.OP] = race_rewards[class_enum['Pre-OP']] = {
  1: {
    attr: [5, 5],
    fame: 10,
    pt: [40, 40],
  },
  10: {
    attr: [0, 0],
    fame: -20,
    pt: [15, 15],
  },
  20: {
    fame: -50,
  },
  5: {
    attr: [2, 4],
    fame: 0,
    pt: [25, 40],
  },
};

race_rewards[class_enum.Spe] = {
  1: {
    attr: [5, 5],
    fame: 10,
    pt: [40, 40],
  },
  10: {
    attr: [0, 0],
    fame: 0,
    pt: [15, 15],
  },
  20: {
    fame: 0,
  },
  5: {
    attr: [2, 4],
    fame: 0,
    pt: [25, 40],
  },
};

module.exports = race_rewards;
