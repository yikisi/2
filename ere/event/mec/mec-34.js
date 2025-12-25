const { race_enum } = require('#/data/race/race-const');
const era = require('#/era-electron');
const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  get_race_finish_report(uma, race_id) {
    if (race_id === race_enum.tenn_spr) {
      return [
        {
          color: uma.color,
          content: '稻荷大神要通过了！',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: ' 用精萃至极的跑法为我们展现了天下无双的实力！',
        },
      ];
    }
    return super.get_race_finish_report(uma, race_id);
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set(`callname:${this.id}:0`, 'danna');
    }
  }
};
