const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_status() {
    const ret = [];
    if (era.get('status:37:荣耀德比')) {
      ret.push({ color: buff_colors[1], content: '荣耀德比' });
    }
    if (era.get('status:37:必行之事')) {
      ret.push({ color: buff_colors[1], content: '必行之事' });
    }
    if (era.get('status:37:虚弱')) {
      ret.push({ color: buff_colors[0], content: '虚弱', key: '闪耀虚弱' });
    }
    if (era.get('status:37:分心')) {
      ret.push({ color: buff_colors[0], content: '分心', key: '闪耀分心' });
    }
    return ret;
  }

  get_motivation_limit() {
    return -1 * era.get('status:37:虚弱');
  }

  get_race_contestants(info) {
    switch (era.get('flag:当前赛事')) {
      case race_enum.japa_cup:
        return [1, 47].map((e) => ({ buff: 1.2, id: e }));
      case race_enum.arim_kin:
        if (era.get('cflag:37:育成回合计时') < 96) {
          return [1, 5, 18, 47].map((e) => ({ buff: 1.1, id: e }));
        }
        break;
      case race_enum.tenn_spr:
        return [{ buff: 1.1, id: 25 }];
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
    } else {
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
