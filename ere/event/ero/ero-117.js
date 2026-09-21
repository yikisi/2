const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const EroRapeFucking = require('#/event/ero/common/rape/fucking');
const RapeCommandLines = require('#/event/ero/common/rape/rape-common');
const CustomizedEro = require('#/event/ero/ero-common');

const { i18n } = require('#/i18n/selector');

class VariationRapeFucking extends EroRapeFucking {
  async standing(attacker, defender, hook) {
    if (hook.arg && defender.id === this.id) {
      return i18n().kojo[defender.id].ero['rape_standing']({
        CALL_117: sys_get_callname(defender.id, attacker.id),
        CHARA: defender.name,
        COLOR: defender.color,
        UMA: defender.uma_sex_title,
      });
    }
    return await super.standing(attacker, defender, hook);
  }
}

class VariationRapeLines extends RapeCommandLines {
  constructor(root) {
    super(root, { fucking: true });
    this.fucking = new VariationRapeFucking(root);
  }
}

module.exports = class extends CustomizedEro {
  static CHECK = false;

  constructor(arg) {
    super(arg, { rape: true });
    this.rape = new VariationRapeLines(this);
  }
};
