const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedEro = require('#/event/ero/ero-common');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEro {
  async cum_in_womb(god, me, callname, hook, extra_flag) {
    if (extra_flag.father_id || !sys_check_awake(extra_flag.mother_id)) {
      return await super.cum_in_womb(god, me, callname, hook, extra_flag);
    }
    await i18n().kojo[this.id].ero.cum_in_womb({ CHARA: god.name });
  }
};
