const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors } = require('#/data/color-const');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  get_status(show_train_buff) {
    const ret = [];
    if (show_train_buff) {
      // STATUSNAME:120 - 123 = 虚弱 - 必行之事
      if (era.get('status:37:120') > 0) {
        ret.push({
          ...di18n.kojo.get_titled_content(this.id, 'weak'),
          color: buff_colors[0],
        });
      }
      if (era.get('status:37:121') > 0) {
        ret.push({
          ...di18n.kojo.get_titled_content(this.id, 'derby'),
          color: get_chara_color(this.id),
        });
      }
      if (era.get('status:37:122') > 0) {
        ret.push({
          ...di18n.kojo.get_titled_content(this.id, 'distracted'),
          color: buff_colors[0],
        });
      }
      if (era.get('status:37:123') > 0) {
        ret.push({
          ...di18n.kojo.get_titled_content(this.id, 'duty'),
          color: get_chara_color(this.id),
        });
      }
    }
    return ret;
  }

  get_motivation_limit() {
    if (era.get(`status:${this.id}:120`) > 0) {
      return -1;
    }
    return 0;
  }

  get_race_contestants(info) {
    switch (era.get('flag:7')) {
      case race_enum.japa_cup:
        if (era.get('cflag:37:48') < 96) {
          return [1, 47].map((e) => new LegendUmaSelector(e, 1.1));
        }
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:37:48') < 96) {
          return [1, 5, 18, 47].map((e) => new LegendUmaSelector(e, 1.05));
        }
        break;
      case race_enum.tenn_spr:
        return [new LegendUmaSelector(25, 1.05)];
    }
    return super.get_race_contestants(info);
  }

  get_success_rate_buff() {
    return 5 * (era.get('status:37:123') - era.get('status:37:122'));
  }

  set_callname() {
    if (era.get('love:37') >= 75) {
      era.set('callname:37:0', [
        era.get('cflag:0:0') === 1 ? 'trainer_m' : 'trainer_f',
        get_chara_talk(0).sex_code === 1 ? 'Mein Lieber' : 'Mein Lieben',
      ]);
    } else if (!this.set_callname_from_src()) {
      era.set(
        'callname:37:0',
        era.get('cflag:0:0') === 1 ? 'trainer_m' : 'trainer_f',
      );
    }
  }

  set_pseudo_uma(uma) {
    if (era.get('status:37:荣耀德比') > 0) {
      uma.attr_buffs.forEach((l) =>
        l.push(['+50%', i18n().kojo[this.id].derby]),
      );
    }
  }
};
