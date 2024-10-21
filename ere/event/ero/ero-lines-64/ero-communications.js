const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const check_lure_success = require('#/event/ero/snippets/check-lure-success');

const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.kiss] = async (attacker, defender, hook) => {
    if (defender.id !== 64 || !hook.arg) {
      throw new Error();
    }
    const edu_marks = new PamaEduMarks();
    if (!edu_marks.kiss) {
      edu_marks.kiss = 1;
      await attacker.print_and_wait([
        '与 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 在咫尺距离对视着，拨开',
        defender.sex,
        '的侧发，将',
        defender.sex,
        '精致的脸庞捧在手里。',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '咬着下唇，眼神游离在一边，不确定接下来该如何对应。',
      ]);
      await attacker.print_and_wait([
        '忽然迎上去与',
        defender.sex,
        '两唇相触，',
        defender.sex,
        '双手拍在胸前似乎想推开，但没有用出一点力气。',
      ]);
      await attacker.print_and_wait([
        '只需轻轻触碰，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 便将舌尖迎入口中，享受着这短暂而炽热的瞬间。',
      ]);
      await attacker.print_and_wait([
        '片刻后，与我分开的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 喘着粗气，面容已经被潮红填满。',
      ]);
      await defender.say_and_wait(['抱歉……有些……太兴奋了……呼吸……']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 按住胸前想要抑止狂跳的心脏，但',
        defender.sex,
        '知道解决的方法只有一个——',
      ]);
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……可以再来一次吗？',
      ]);
    } else if (era.get('love:64') >= 50 && defender.sex_code !== 1) {
      await attacker.print_and_wait([
        '将赤裸的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 拥入怀中，娇小的肩幅和臂膀令你无法将',
        defender.sex,
        '与赛场上的英姿联系起来。',
      ]);
      await attacker.print_and_wait([
        '只是对视片刻，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 便迫不及待地迎出嘴唇，勾上肩膀与你相吻。',
      ]);
      await defender.say_and_wait(['唔……']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 那对炽热的双乳贴在前胸，房间里只剩下唇舌互相吸吮的声音。',
      ]);
    } else {
      throw new Error();
    }
  };

  handlers[ero_hooks.kiss] = async (attacker, defender, hook) => {
    if (defender.id !== 64) {
      throw new Error();
    }
    hook.arg = check_lure_success(attacker.id, defender.id);
    if (hook.arg || era.get(`tcvar:${defender.id}:发情`)) {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 与我面对面坐着，',
        defender.sex,
        '轻轻咬着下唇，目光闪烁着期待与紧张。',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '的五指在胸膛上划过，像是要将触感留在记忆里。',
      ]);
      await defender.say_and_wait(['……可以哦，哪里都可以。']);
      await attacker.print_and_wait([
        '似乎是察觉到了我的想法，',
        defender.sex,
        '向前靠近，在能感受到互相体温的距离停下。',
      ]);
      await attacker.print_and_wait([
        '但还是有些勉强吗，当我的手扫过',
        defender.sex,
        '的锁骨到达乳间时，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 闭上眼微微颤抖着。',
      ]);
    }
  };
};
