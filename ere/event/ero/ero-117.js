const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroRapeFucking = require('#/event/ero/common/rape/fucking');
const RapeCommandLines = require('#/event/ero/common/rape/rape-common');
const CustomizedEro = require('#/event/ero/ero-common');

const { i18n } = require('#/i18n/selector');

class VariationRapeFucking extends EroRapeFucking {
  async standing(attacker, defender, hook) {
    if (hook.arg && defender.id === 117) {
      return i18n().kojo[134].ero.rape_standing(
        defender,
        attacker,
        sys_get_colored_callname(attacker.id, defender.id),
      );
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
  constructor(arg) {
    super(arg, { rape: true });
    this.rape = new VariationRapeLines(this);
  }
};
