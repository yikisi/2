const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const BrightLifeMarks = require('#/data/event/life-event-marks/life-event-marks-74');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  is_anger_for_unfaithful(partners) {
    if (
      era.get('flag:126') > 0 &&
      new BrightLifeMarks().know_us === 2 &&
      partners.every(
        (cid) =>
          cid === 13 ||
          cid === 27 ||
          cid === 59 ||
          cid === 64 ||
          cid === 71 ||
          cid === 86,
      )
    ) {
      return false;
    }
    return super.is_anger_for_unfaithful(partners);
  }

  get_race_contestants(info) {
    // FLAGNAME:7 = 当前赛事
    switch (era.get('flag:7')) {
      case race_enum.takz_kin:
        // CFLAGNAME:48 = 育成回合计时
        if (era.get(`cflag:${this.id}:48`) > 96) {
          return [new LegendUmaSelector(59, 1.1)];
        }
    }
    return super.get_race_contestants(info);
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      if (era.get(`love:${this.d}`) >= 95) {
        if (era.get('cflag:0:0') === 1) {
          era.set(`callname:${this.id}:0`, ['trainer74_2', 'dear']);
        } else {
          era.set(`callname:${this.id}:0`, 'dear');
        }
      } else {
        era.set(`callname:${this.id}:0`, 'trainer74');
      }
    }
  }
};
