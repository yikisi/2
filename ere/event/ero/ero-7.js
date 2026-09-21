const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEro = require('#/event/ero/ero-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEro {
  static CHECK = false;

  async report_pregnant_between_weeks(
    gold_ship,
    me,
    callname,
    hook,
    extra_flag,
  ) {
    if (extra_flag.mother_id !== this.id) {
      return super.report_pregnant_between_weeks(
        gold_ship,
        me,
        callname,
        hook,
        extra_flag,
      );
    }
    era.drawLine();
    await i18n().kojo[this.id].ero.report_preg(
      gold_ship,
      me,
      get_chara_talk(302),
      get_chara_talk(301),
      sys_get_colored_callname(this.id, 0),
    );
    era.drawLine();
  }

  async have_baby(father, mother, child) {
    if (mother.id !== this.id || father.id > 0) {
      return await super.have_baby(father, mother, child);
    }
    era.drawLine();
    await i18n().kojo[this.id].ero.have_baby(
      mother,
      sys_get_colored_callname(this.id, 0),
    );
  }
};
