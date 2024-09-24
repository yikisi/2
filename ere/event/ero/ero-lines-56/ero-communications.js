const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { log_7 } = require('#/utils/value-utils');

const { ero_hooks } = require('#/data/event/ero-hooks');

/**
 * @author Alex
 * @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers
 */
module.exports = (handlers) => {
  handlers[ero_hooks.kiss] = async (attacker, defender, hook) => {
    if (defender.id !== 56) {
      throw new Error('unsupported hook!');
    }
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 亲吻 ',
      defender.get_colored_name(),
      ' 的嘴唇……】',
    ]);
    if (hook.arg) {
      await defender.say_and_wait('唔……');
      await attacker.print_and_wait('近的可以清楚看到对面星星眼中泛着的水雾。');
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……',
      ]);
      await attacker.print_and_wait([
        '不自觉地用手环抱住 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，尽力回应伸入',
        defender.sex,
        '口腔中的舌头。',
      ]);
      await attacker.print_and_wait([
        '双唇分离，二人的舌头之间悬起了一座银色的桥梁，又被呼出的热气吹落。',
      ]);
      await defender.say_and_wait('嗯哈……啾哈……❤️');
      await attacker.print_and_wait([
        '好不容易缓过一口气的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 又开始索吻。',
      ]);
    } else {
      await defender.say_and_wait('啾噜……嗯……噗哈……啾噜……咕嗯');
      await defender.print_and_wait([
        '分明自己是跑长距离的赛',
        defender.get_uma_sex_title(),
        '，才是应该主导的那一方啊……',
      ]);
      await defender.print_and_wait([
        '可来自命定之人的，成年人令人安心的气味，顺着交换过来的唾液与气息灌入自己的身体中的时候……',
      ]);
      await defender.print_and_wait(['……要……要融化了……']);
      await attacker.print_and_wait([
        '在偶尔唇分时的休息时间，满脸潮红的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 小口半张着不断吐出热气，眼角还含着一点泪珠。',
      ]);
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……喜欢……',
      ]);
    }
  };

  handlers[ero_hooks.french_kiss] = async (attacker, defender, hook) => {
    if (defender.id !== 56) {
      throw new Error('unsupported hook!');
    }
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 对 ',
      defender.get_colored_name(),
      ' 法式湿吻……】',
    ]);
    if (hook.arg) {
      await attacker.print_and_wait('自然不满足于浅尝辄止。');
      await attacker.print_and_wait([
        '于是进一步将舌头深深的插了进去，尽情蹂躏着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的口腔。',
      ]);
      await attacker.print_and_wait(
        '啪嗒啪嗒地，让动起来的舌头发出下流的水声。',
      );
      await defender.say_and_wait('唔！❤️');
      await attacker.print_and_wait([
        '当二人的舌头纠缠在一起时，怀中的栗毛',
        defender.get_uma_sex_title(),
        '自喉中发出了黏糊糊的应答声。',
      ]);
      await attacker.print_and_wait([
        '身体也是紧紧的贴在一起，快感随着舌头与舌头，口腔粘膜，或是牙齿的接触传递到对方身上，让尝试做出回应的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 身体止不住的颤抖起来。',
      ]);
      await attacker.print_and_wait([
        '只得享受来自于 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的，充满侵略性的吻。',
      ]);
    } else {
      await defender.say_and_wait('嗯……啾噜……咕嗯……');
      if (!era.get(`cflag:${attacker.id}:种族`)) {
        await defender.print_and_wait([
          '明明 ',
          sys_get_colored_callname(defender.id, attacker.id),
          ' 是人类但是……肺活量强的有些犯规了呀……',
        ]);
      }
      await defender.print_and_wait([
        '舌头充满仪式感的一颗颗舔过牙齿，缠绕着自己的舌头，摩挲着舌根……',
      ]);
      await defender.print_and_wait([
        '还有流入自己口腔里的，来自 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 黏糊糊的唾液……',
      ]);
      await defender.say_and_wait('咕噜……唔哈……❤️');
      await defender.print_and_wait([
        '在接吻的余韵，自己便会急促的娇喘着，让充满 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 荷尔蒙的气息流遍全身。',
      ]);
      await defender.say_and_wait('那个，总是还想继续呀……❤️', true);
    }
  };

  handlers[ero_hooks.talk] = async (attacker, defender) => {
    if (defender.id !== 56) {
      throw new Error('unsupported hook!');
    }
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      defender.get_colored_name(),
      ' 闲话家常……】',
    ]);
    if (Math.random() < 0.5) {
      await attacker.say_and_wait('福来算是犬系还是猫系的呢？');
      await defender.say_and_wait('欸！这个吗！');
      await attacker.say_and_wait('……到不如说是狐狸系？');
      attacker.print([
        '被点出自己本性的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 脸变得更红了。',
      ]);
    } else {
      await attacker.say_and_wait('这样像是在从白兴大人手中抢人呢……');
      await attacker.print_and_wait([
        '看着身上泛着樱红的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 不由得这么说到。',
      ]);
      await attacker.print_and_wait('……没有被踢……也没有收到回复');
      attacker.print('……但是脸红得很厉害。');
    }
  };

  handlers[ero_hooks.lure] = async (attacker, defender, hook) => {
    if (defender.id !== 56) {
      throw new Error('unsupported hook!');
    }
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在 ',
      defender.get_colored_name(),
      ' 的耳边说着绵绵情话……】',
    ]);
    await attacker.say_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '。',
    ]);
    await attacker.print_and_wait(
      '轻轻的，对着那对细长的耳朵，唤着面前担当的名字。',
    );
    await defender.say_and_wait([
      '那……那个，',
      sys_get_colored_callname(defender.id, attacker.id),
      '。',
    ]);
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '攀住衣服下摆，像只狐狸一样贴在胸口，用充满期待的目光回应。',
    ]);
    await attacker.print_and_wait(['是该说些什么的时候吧？']);
    if (defender.sex_code - 1) {
      await attacker.print_and_wait([
        '不过，还是很享受抱着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 柔软身体的现在呀，大手不安分的在占卜少女的身上四处游走，无论是安产型的臀肉，平日束缚在衣服里的巨乳，还是那双匀称的到好处的双腿。',
      ]);
    }
    await attacker.print_and_wait([
      '能看到 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的星星瞳，因为自己的动作闪烁着。',
    ]);
    hook.arg =
      (!defender || era.get(`love:${defender.id}`) >= 50) &&
      !era.get(`tcvar:${defender.id}:发情`) &&
      Math.random() <
        Math.log(era.get(`abl:${attacker.id}:甜言蜜语`) + 2) / log_7;
    if (hook.arg) {
      await era.printAndWait([
        defender.get_colored_name(),
        ' 变得兴奋起来了……',
      ]);
    }
  };
};
