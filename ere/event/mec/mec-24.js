const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:24:0', '训练员酱');
    }
  }

  get_race_contestants(info) {
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
    return super.get_race_contestants(info);
  }
};
