const era = require('#/era-electron');

const { race_enum } = require('#/data/race/race-const');
const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  set_callname() {
    era.set('callname:24:0', '托雷纳酱');
  }

  get_race_contestants() {
    switch (era.get('flag:当前赛事')) {
      case race_enum.arim_kin:
        return [
          { id: 12, buff: 1.1 },
          { id: 16, buff: 1.2 },
        ];
      case race_enum.hans_dai:
      case race_enum.tenn_spr:
        return [{ id: 16, buff: 1.2 }];
    }
    return super.get_race_contestants();
  }
};
