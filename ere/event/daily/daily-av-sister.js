const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const DailyChild = require('#/event/daily/daily-child');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { i18n } = require('#/i18n/selector');

module.exports = class extends DailyChild {
  select() {
    if (
      !sys_check_awake(0) ||
      !sys_check_awake(this.id) ||
      // CFLAGNAME:65 = 成长阶段
      era.get(`cflag:${this.id}:65`) < 1
    ) {
      return super.select();
    }
    // CFLAGNAME:15 = 父方角色
    // CFLAGNAME:16 = 母方角色
    const father = era.get(`cflag:${this.id}:15`);
    const mother = era.get(`cflag:${this.id}:16`);
    if (father > 0 && mother > 0) {
      return super.select();
    }
    const chara = get_chara_talk(this.id);
    i18n().kojo.av_sister.daily['select']({
      CHARA: chara.name,
      COLOR: chara.color,
      DAD: !father ? i18n().name.dad : i18n().name.mom,
      ELDER_BROTHER: get_chara_talk(0).elder_sibling_sex_title,
    });
  }
};
