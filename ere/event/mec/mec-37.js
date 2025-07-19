const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors } = require('#/data/color-const');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_status(show_train_buff) {
    const ret = [];
    if (show_train_buff) {
      if (era.get('status:37:荣耀德比')) {
        ret.push({
          color: get_chara_color(this.id),
          content: '荣耀德比',
          title: '参赛时属性+50%',
        });
      }
      if (era.get('status:37:必行之事')) {
        ret.push({
          color: get_chara_color(this.id),
          content: '必行之事',
          title: '训练成功率+5%。',
        });
      }
      if (era.get('status:37:虚弱')) {
        ret.push({
          color: buff_colors[0],
          content: '虚弱',
          title: '干劲上限下降一阶段。',
        });
      }
      if (era.get('status:37:分心')) {
        ret.push({
          color: buff_colors[0],
          content: '分心',
          title: '训练成功率-5%。',
        });
      }
    }
    return ret;
  }

  get_motivation_limit() {
    return -1 * era.get('status:37:虚弱');
  }

  get_race_contestants(info) {
    switch (era.get('flag:当前赛事')) {
      case race_enum.japa_cup:
        if (era.get('cflag:37:育成回合计时') < 96) {
          return [1, 47].map((e) => new LegendUmaSelector(e, 1.1));
        }
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:37:育成回合计时') < 96) {
          return [1, 5, 18, 47].map((e) => new LegendUmaSelector(e, 1.05));
        }
        break;
      case race_enum.tenn_spr:
        return [new LegendUmaSelector(25, 1.05)];
    }
    return super.get_race_contestants(info);
  }

  get_success_rate_buff() {
    return 5 * (era.get('status:37:必行之事') - era.get('status:37:分心'));
  }

  set_callname() {
    if (era.get('love:37') >= 75) {
      era.set('callname:37:0', [
        `训练员${get_chara_talk(0).get_adult_sex_title()}`,
        get_chara_talk(0).sex_code - 1 ? 'Mein Lieben' : 'Mein Lieber',
      ]);
    } else if (!this.set_callname_from_src()) {
      era.set(
        'callname:37:0',
        `训练员${get_chara_talk(0).get_adult_sex_title()}`,
      );
    }
  }

  set_pseudo_uma(uma) {
    if (era.get('status:37:荣耀德比')) {
      uma.attr_buffs.forEach((l) => l.push('+50%[荣耀德比]'));
    }
  }
};
