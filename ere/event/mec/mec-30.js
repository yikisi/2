const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const recruit_flags = require('#/data/event/recruit-flags');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_race_contestants(info) {
    switch (era.get('flag:当前赛事')) {
      case race_enum.toky_yus:
      case race_enum.kiku_sho:
        return [new LegendUmaSelector(26, 1.05)];
      case race_enum.tenn_spr:
        return [new LegendUmaSelector(13, 1.05)];
    }
    return super.get_race_contestants(info);
  }

  set_callname() {
    if (era.get('cflag:30:招募状态') !== recruit_flags.yes) {
      return super.set_callname();
    }
    if (!this.set_callname_from_src()) {
      era.set(
        'callname:30:0',
        era.get('cflag:0:0') === 1 ? 'big_brother' : 'big_sister',
      );
    }
  }

  set_my_name() {}
};
