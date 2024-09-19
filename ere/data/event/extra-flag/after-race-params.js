class AfterRaceParams {
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
