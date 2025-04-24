const { class_enum } = require('#/data/race/model/race-info');

/**
 * @typedef RankReward
 * @property {[number,number]} [attr]
 * @property {number} fame
 * @property {[number,number]} [pt]
 */

/** @type {{r01:RankReward,r05:RankReward,r10:RankReward,r20:RankReward}[]} */
const race_rewards = [];

race_rewards[class_enum.G1] = {
  r01: {
    attr: [10, 10],
    fame: 50,
    pt: [60, 60],
  },
  r05: {
    attr: [5, 8],
    fame: 25,
    pt: [50, 60],
  },
  r10: {
    attr: [4, 4],
    fame: -5,
    pt: [30, 30],
  },
  r20: {
    fame: -10,
  },
};
race_rewards[class_enum.G2] = race_rewards[class_enum.G3] = {
  r01: {
    attr: [8, 8],
    fame: 25,
    pt: [50, 50],
  },
  r05: {
    attr: [4, 6],
    fame: 10,
    pt: [40, 50],
  },
  r10: {
    attr: [3, 3],
    fame: -10,
    pt: [25, 25],
  },
  r20: {
    fame: -20,
  },
};
race_rewards[class_enum.OP] = race_rewards[class_enum['Pre-OP']] = {
  r01: {
    attr: [5, 5],
    fame: 10,
    pt: [40, 40],
  },
  r05: {
    attr: [2, 4],
    fame: 0,
    pt: [25, 40],
  },
  r10: {
    attr: [0, 0],
    fame: -20,
    pt: [15, 15],
  },
  r20: {
    fame: -50,
  },
};

race_rewards[class_enum.Spe] = {
  r01: {
    attr: [5, 5],
    fame: 10,
    pt: [40, 40],
  },
  r05: {
    attr: [2, 4],
    fame: 0,
    pt: [25, 40],
  },
  r10: {
    attr: [0, 0],
    fame: 0,
    pt: [15, 15],
  },
  r20: {
    fame: 0,
  },
};

module.exports = race_rewards;
