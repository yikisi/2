const ExtraFlagsParams = require('#/data/event/extra-flag/common');

class AfterRaceParams extends ExtraFlagsParams {
  /**
   * 是否为目标赛事
   * @type {boolean}
   */
  aim_race;
  /**
   * 参赛选手列表
   * @type {PseudoUma[]}
   */
  contestants;
  /**
   * 角色育成回合计时
   * @type {number}
   */
  edu_weeks;
  /**
   * 角色人气
   * @type {number}
   */
  pop;
  /**
   * 比赛ID
   * @type {number}
   */
  race;
  /**
   * 比赛名次
   * @type {number}
   */
  rank;
  /**
   * 参赛策略
   * @type {number}
   */
  st;
  /**
   * @param {boolean} aim_race
   * @param {PseudoUma[]} contestants
   * @param {number} edu_weeks
   * @param {number} pop
   * @param {number} race
   * @param {number} rank
   * @param {number} st
   */
  constructor(aim_race, contestants, edu_weeks, pop, race, rank, st) {
    super();
    this.aim_race = aim_race;
    this.contestants = contestants;
    this.edu_weeks = edu_weeks;
    this.pop = pop;
    this.race = race;
    this.rank = rank;
    this.st = st;
  }
}

module.exports = AfterRaceParams;
