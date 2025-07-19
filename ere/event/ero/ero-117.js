/**
 * @file 凯旋芭蕾 - 调教
 * @author ALEX
 */
const EroRapeFucking = require('#/event/ero/common/rape/fucking');
const RapeCommandLines = require('#/event/ero/common/rape/rape-common');
const CustomizedEro = require('#/event/ero/ero-common');

class VariationRapeFucking extends EroRapeFucking {
  async standing(attacker, defender, hook) {
    if (hook.arg && defender.id === 117) {
      await attacker.print_and_wait(
        '有着不错柔韧性与平衡的舞者，正在自己面前展示着躯体。',
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
