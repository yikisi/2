const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const HelloLifeMarks = require('#/data/event/life-event-marks/life-event-marks-308');

const di18n = require('#/i18n/extended-def');

class MecChild extends CustomizedMec {
  get_race_finish_report(uma, race_id) {
    let func = super.get_race_finish_report;
    // CFLAGNAME:90 = 模版角色
    const src_chara = era.get(`cflag:${this.id}:90`);
    switch (src_chara) {
      case 3:
      case 6:
      case 17:
      case 21:
      case 25:
      case 33:
      case 34:
      case 52:
        func = CustomizedMec.get_custom_mec(src_chara).get_race_finish_report;
    }
    return func.call(this, uma, race_id);
  }

  get_talents() {
    const ret = [];
    if (era.get(`cflag:${this.id}:90`) === 308) {
      const { buff } = new HelloLifeMarks();
      ret.push({
        ...di18n.kojo.get_titled_content(
          308,
          'dreamer_junior',
          100 * (buff + 1),
        ),
        color: get_chara_color(308),
        fontWeight: buff > 0 ? 'bold' : void 0,
      });
    }
    return ret;
  }

  init_love() {
    if (
      // CFLAGNAME:15 = 父方角色
      (era.get(`cflag:${this.id}:15`) !== 0 &&
        // CFLAGNAME:16 = 母方角色
        era.get(`cflag:${this.id}:16`) !== 0) ||
      // CFLAGNAME:115 = 后代爱慕限制
      era.get('flag:115') > 0
    ) {
      return super.init_love();
    }
    era.set(`love:${this.id}`, 0);
  }

  set_callname() {
    let callname;
    if (!era.get(`cflag:${this.id}:15`)) {
      callname = 'dad';
    } else if (!era.get(`cflag:${this.id}:16`)) {
      callname = 'mom';
    } else {
      return super.set_callname();
    }
    era.set(`callname:${this.id}:0`, callname);
  }
}

module.exports = MecChild;
