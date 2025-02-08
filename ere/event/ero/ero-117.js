/**
 * @file 凯旋芭蕾 - 调教
 * @author ALEX
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroRapeFucking = require('#/event/ero/common-lines/rape/fucking');
const RapeCommandLines = require('#/event/ero/common-lines/rape/rape-common');
const CustomizedEro = require('#/event/ero/ero-common');

class VariationRapeFucking extends EroRapeFucking {
  async standing(attacker, defender, hook) {
    if (!hook.arg || defender.id !== 117) {
      return await super.standing(attacker, defender, hook);
    }
    await attacker.print_and_wait(
      '有着不错柔韧性与平衡的舞者，正在自己面前展示着躯体。',
    );
    await attacker.print_and_wait([
      '仅让足尖点地，大腿内侧肌肉拉伸，右腿再慢慢抬到水平位置。',
    ]);
    await attacker.print_and_wait([
      '尽力做着侧抬腿姿势的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 就这样将纤细腰肢与诱人侧臀暴露在了自己眼前。',
    ]);
    await attacker.print_and_wait([
      era.get(`cflag:${defender.id}:阴毛`) >= 1 ? '被阴毛遮掩' : '光洁可爱',
      '的小穴正随着紧绷的动作一开一合。',
    ]);
    await defender.say_and_wait('满意了吧……人渣！');
    await attacker.print_and_wait([
      '看来还没到极限，于是自觉伸手纠正动作，将保持在水平高度的右腿慢慢托起，直到垂直朝上与左腿保持在一条直线。',
    ]);
    await defender.say_and_wait('别、别碰我……');
    await attacker.print_and_wait([
      '肉茎径直插入，狭窄软柔的腔穴被强行撑开，滚烫的龟冠无视层层叠叠蠕动收绞的腔肉，撞在了花心。',
    ]);
    await defender.say_and_wait('……哦咕❤️！！');
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
