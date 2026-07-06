const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedEro = require('#/event/ero/ero-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEro {
  static CHECK = false;

  async ero_start(h) {
    // STATUSNAME:38 = 超马跳Z
    if (!sys_check_awake(this.id) || era.get(`status:${this.id}:38`) > 0) {
      return super.ero_start(h);
    }
    await i18n().kojo[this.id].ero['ero_start'](
      generate_dictionary(this.id, { call: !0 }),
    );
  }
};
