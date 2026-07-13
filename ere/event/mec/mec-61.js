const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');
const HaloEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-61');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');

module.exports = class extends CustomizedMec {
  get_motivation_limit() {
    const { give_up } = new HaloEduMarks();
    if (give_up > 0) {
      return -1 - give_up;
    }
    return 0;
  }

  get_race_contestants(info) {
    switch (era.get('flag:当前赛事')) {
      case race_enum.sats_sho:
        return [new LegendUmaSelector(20, 1.05)];
      case race_enum.toky_yus:
        return [new LegendUmaSelector(1, 1.05)];
      case race_enum.tenn_sho:
        if (era.get(`cflag:${this.id}:育成回合计时`) > 96) {
          return [
            new LegendUmaSelector(1, 1.05),
            new LegendUmaSelector(20, 1.05),
          ];
        }
        break;
      case race_enum.arim_kin:
        if (era.get(`cflag:${this.id}:育成回合计时`) > 96) {
          return [
            new LegendUmaSelector(1, 1.05),
            new LegendUmaSelector(11, 1.05),
            new LegendUmaSelector(14, 1.05),
            new LegendUmaSelector(20, 1.05),
          ];
        }
    }
    return super.get_race_contestants(info);
  }

  get_status(show_train_buff) {
    if (show_train_buff) {
      switch (new HaloEduMarks().give_up) {
        case 1:
          return [
            {
              ...di18n.kojo.get_titled_content(this.id, 'gu_mild'),
              color: buff_colors[0],
            },
          ];
        case 2:
          return [
            {
              ...di18n.kojo.get_titled_content(this.id, 'gu_moderate'),
              color: buff_colors[0],
              fontWeight: 'bold',
            },
          ];
        case 3:
          return [
            {
              ...di18n.kojo.get_titled_content(this.id, 'gu_serve'),
              color: buff_colors[3],
              fontWeight: 'bold',
            },
          ];
        default:
          return [];
      }
    }
    return super.get_status(show_train_buff);
  }

  is_anger_for_unfaithful(partners) {
    return !(partners.includes(52) && era.get('love:52') >= 75);
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:61:0', 'trainer');
    }
  }
};
