const era = require('#/era-electron');

class RaceResult {
  /** @type {number} */
  pop;
  /** @type {number} */
  race;
  /** @type {number} */
  rank;
  /** @type {number} */
  st;
  /** @type {number} */
  year;

  /**
   * @param {number} pop
   * @param {number} race
   * @param {number} rank
   * @param {number} st
   * @param {number} year
   */
  constructor(pop, race, rank, st, year) {
    this.pop = pop;
    this.race = race;
    this.rank = rank;
    this.st = st;
    this.year = year;
  }
}

class RaceHistory {
  static RaceResult = RaceResult;

  /** @param {number} chara_id */
  constructor(chara_id) {
    this.id = chara_id;
    this.obj =
      era.get(`cflag:${chara_id}:育成成绩`) ||
      era.set(`cflag:${chara_id}:育成成绩`, {});
  }

  /**
   * @param {number} edu_weeks
   * @param {RaceResult} result
   */
  add_result(edu_weeks, result) {
    this.obj[edu_weeks] = result;
  }

  check_begin() {
    return this.length() > 0;
  }

  /** @returns {Record<string,RaceResult>} */
  get() {
    return this.obj;
  }

  /** @returns {{pop:number,race:number,rank:number,st:number,weeks:number,year:number}[]} */
  get_entries() {
    return Object.entries(this.obj).map((e) =>
      Object.assign(
        { pop: 0, race: 0, rank: 0, st: 0, weeks: Number(e[0]), year: 0 },
        e[1],
      ),
    );
  }

  /**
   * @param {number} edu_weeks
   * @returns {RaceResult|undefined}
   */
  get_result(edu_weeks) {
    return this.obj[edu_weeks];
  }

  /** @returns {RaceResult[]} */
  get_values() {
    return Object.values(this.obj);
  }

  length() {
    return Object.keys(this.obj).length;
  }

  reset() {
    this.obj = era.set(`cflag:${this.id}:育成成绩`, {});
  }
}

module.exports = RaceHistory;
