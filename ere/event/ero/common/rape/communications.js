/**
 * @file 调教指令 - 强奸沟通系
 * @author ALEX
 */
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroCommunications = require('#/event/ero/common/interface/ero-communications');
const EroRapedCommunications = require('#/event/ero/common/rape/raped-communications');

class EroRapeCommunications extends EroCommunications {
  /** @type {EroCommunications} */
  raped;

  constructor(root) {
    super(root);
    this.raped = new EroRapedCommunications(root);
  }

  /** @param {boolean} is_raper */
  get_this(is_raper) {
    return is_raper ? this : this.raped;
  }

  /** @author ALEX */
  async kiss(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      await defender.print_and_wait([
        '漂亮的瞳孔因惊恐而扩散，被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 双臂禁锢住的身体颤抖着。',
      ]);
      await defender.say_and_wait('呜……');
      await defender.print_and_wait(
        '裹挟着浓烈气息的舌头探入口腔，强行挤入的舌尖越过了试图阻拦的皓齿，极富侵略性地沿着牙龈的根部舔舐而过。',
      );
      await defender.print_and_wait([
        '自己被对方拿捏住的现在，能任凭唇间被磨出的啧响与涎水向外泄出。',
      ]);
    } else {
      await defender.say_and_wait(['咕呜……']);
      await defender.print_and_wait([
        '失态娇呼出声的嘴，却又立即被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的唇封住。',
      ]);
      await defender.print_and_wait([
        '自己只能无助地闭上双眼，握紧了搭在身上的手臂。',
      ]);
      await defender.print_and_wait([
        '任由对方在嘴里掠夺，发出更多唇舌互舔的低沉吻声。',
      ]);
    }
  }

  /** @author ALEX */
  async french_kiss(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      await defender.say_and_wait('哈啊……');
      await defender.print_and_wait([
        '以毫无怜惜的粗暴态度撬开了牙关，变得乱哄哄的脑子一时间没有反应过来，任由对方开始肆意妄为。',
      ]);
      await defender.print_and_wait([
        '舔遍了每一寸口腔，又含着瘫软的舌头不知道吸吮了多久……',
      ]);
      await defender.print_and_wait([
        '直到回过神来开始尝试反抗时，口腔内酥酥麻麻的残留快意，让正下意识地吞咽口水的自己差点嘤咛出声。',
      ]);
    } else {
      await defender.say_and_wait('混蛋……给我……停下……噗啾……');
      await attacker.print_and_wait([
        '舌头在 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 口腔中不断的索取，强撑着的抵抗却只是让舌头在交合推挤间发出更多粘腻的水声。',
      ]);
      await attacker.print_and_wait([
        '带着浓郁荷尔蒙气息的唾液被强硬地灌入口中，为了呼吸而不断吞咽的喉咙，不得不将这强行灌入的唾液全部喝下。',
      ]);
      await attacker.print_and_wait([
        '漫长的深吻持续着，来自 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的眼泪与嘴角溢出的晶莹唾液不断滴在地上。',
      ]);
    }
  }
}

module.exports = EroRapeCommunications;
