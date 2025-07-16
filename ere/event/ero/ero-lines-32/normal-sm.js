const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const EroNormalSm = require('#/event/ero/common/normal/sm');

module.exports = class extends EroNormalSm {
  async hit_anal(attacker, defender, hook) {
    if (defender.id !== 32) {
      return await super.hit_anal(attacker, defender, hook);
    }
    if (hook.arg) {
      if (era.get('mark:32:同心') > era.get('mark:32:反抗')) {
        await attacker.print_and_wait([
          '用力拍了 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的屁股，响起了动听的回声。',
        ]);
        await attacker.print_and_wait('白嫩的两瓣屁股上留下了淡淡的巴掌印。');
        era.println();
        await defender.say_and_wait([
          '好痛！？……',
          sys_get_colored_callname(defender.id, attacker.id),
          '……？',
        ]);
        era.println();
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 可怜兮兮的呜咽了一声，但仍将臀部翘高，似乎一点反抗的念头都没有。',
        ]);
      } else if (era.get('talent:32:喜欢痛苦') > 0) {
        await attacker.print_and_wait('真是骚货啊……');
        await attacker.print_and_wait([
          '用力拍了 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的屁股，响起了动听的回声。',
        ]);
        await attacker.print_and_wait('一瓣屁股上留下了淡淡的巴掌印。');
        era.println();
        await defender.say_and_wait('用力……请更用力一点……❤️');
        era.println();
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 发出了淫荡的娇声。',
        ]);
        await attacker.print_and_wait(
          '红润的屁股轻轻地扭着，左右摇晃，期待更进一步的蹂躏。',
        );
        await attacker.print_and_wait('忍不住用手揉捏了一阵，随后……');
        era.println();
        await attacker.print_and_wait('啪！');
        era.println();
        await defender.say_and_wait('啊～～❤️');
        era.println();
        await attacker.print_and_wait('多汁的臀浪掀起，娇嗔随之而来。');
        await attacker.print_and_wait('现在两瓣屁股都如水蜜桃一般鲜嫩欲滴了。');
      } else {
        await attacker.print_and_wait([
          '用力拍了 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的屁股，响起了动听的回声。',
        ]);
        await attacker.print_and_wait('白嫩的两瓣屁股上留下了淡淡的巴掌印。');
        era.println();
        await defender.say_and_wait([
          '好痛！？……',
          sys_get_colored_callname(defender.id, attacker.id),
          '……？',
        ]);
        era.println();
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 不由得吃痛的喊了出声。',
        ]);
        await attacker.print_and_wait(
          '虽然有些可怜，但那挺翘的屁股……要是不拍一下才会觉得暴殄天物吧？',
        );
      }
    } else {
      await attacker.print_and_wait(
        '不停拍打着速子浑翘的雪白肉臀，响起了动听的回声。',
      );
      await attacker.print_and_wait('现在上面满是鲜红的巴掌印。');
      await attacker.print_and_wait([
        '每次拍打，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 双腿间的夹缝都会忍不住喷出爱液，不知不觉也染湿了自己的双手……',
      ]);
    }
  }

  async hit_face(attacker, defender, hook) {
    if (defender.id !== 32) {
      return await super.hit_face(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '甩了 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 一个耳光。',
    ]);
    if (era.get('mark:32:同心') > era.get('mark:32:反抗')) {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的脸颊绯红，带着服从的眼神以低姿态望着自己。',
      ]);
      era.println();
      await defender.say_and_wait([
        sys_get_callname(defender.id, attacker.id)[0],
        '……不，主人还想打的话……',
      ]);
      era.println();
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 双手捧着',
        attacker.get_colored_name(),
        '的手，贴上了',
        defender.sex,
        '另一边的脸颊……',
      ]);
    } else if (era.get('talent:32:喜欢痛苦') > 0) {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的脸颊绯红，用双手捧住 ',
        attacker.get_colored_name(),
        ' 的手，轻轻舔着手指献上服从。',
      ]);
      era.println();
      await defender.say_and_wait('主人……请给母猪更多的赏赐吧……❤️');
      era.println();
      await attacker.print_and_wait(['又甩了', defender.sex, '一个耳光。']);
      await attacker.print_and_wait([
        '粉色的巴掌印瞬间在',
        defender.sex,
        '的脸庞上绽放。',
      ]);
    } else {
      await attacker.print_and_wait('被不可置信地盯着。');
      era.println();
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……为什么……',
      ]);
      era.println();
      await attacker.print_and_wait([
        '摸着自己有些发红的脸颊的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '。',
      ]);
      await attacker.print_and_wait([
        '虽然很抱歉……但，看见',
        defender.sex,
        '露出如此令人疼惜的表情还是让人忍不住兴奋啊……',
      ]);
    }
  }
};
