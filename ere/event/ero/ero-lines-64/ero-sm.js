const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.hit_anal] = async (attacker, defender, hook) => {
    if (defender.id !== 64) {
      throw new Error();
    }
    const life_marks = new PamaEduMarks();
    if (!life_marks.hit_anal) {
      life_marks.hit_anal = 1;
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……请……轻一点。',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 趴在腿上将屁股暴露出来，',
        defender.sex,
        '的臀瓣饱满圆润，在昏暗的灯光下泛着色情的光泽。',
      ]);
      await attacker.print_and_wait([
        '每一次呼吸都让那两瓣柔软的肉随之轻微起伏，诱惑着我的手掌。',
      ]);
      await attacker.print_and_wait(['「啪！」']);
      await attacker.print_and_wait([
        '第一下掌掴落在 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 右侧臀瓣上，瞬间，一个淡红的掌印浮现在雪白的皮肤上。',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的身体猛地一颤，一声短促的惊呼被 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 按在喉咙里。',
      ]);
    } else if (era.get('love:64') >= 50) {
      if (hook.arg) {
        await attacker.print_and_wait([
          '趴在我腿上的 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 不适地扭动着，不知是因为期待还是恐惧，我抬起右手——',
        ]);
        await attacker.print_and_wait(['「啪！啪！」']);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的臀肉剧烈颤动，像是果冻般来回摇晃，原本雪白的皮肤逐渐染上了粉红。',
        ]);
        await attacker.print_and_wait([
          defender.sex,
          '的脚趾不自觉地蜷缩，脚背绷得笔直，光滑的皮肤上，细小的颗粒开始浮现。',
        ]);
        await defender.say_and_wait([
          sys_get_colored_callname(defender.id, attacker.id),
          '……呜……',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 将惊叫咽下，想喊疼却止住了，留下的是带着颤栗的泣声。',
        ]);
      } else {
        await defender.say_and_wait(['哈啊……啊……']);
        await attacker.print_and_wait([
          '随着持续的击打，',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的呼吸变得急促，',
          defender.sex,
          '的手指紧紧抓住床单。',
        ]);
        await attacker.print_and_wait([
          '掌掴的力道逐渐加重，',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的臀部已经变成了深粉色，像熟透的蜜桃般诱人。',
        ]);
        await defender.say_and_wait(['啊呜！']);
        await attacker.print_and_wait([
          defender.sex,
          '不再控制声音，伴着每一次掌掴泣叫着，臀部却微微抬高，仿佛在邀请更多的责罚。',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 股间溢出的蜜液滴在我腿上，看来已经在痛苦中寻得了快感呢。',
        ]);
      }
    } else {
      throw new Error();
    }
  };
};
