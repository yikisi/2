const era = require('#/era-electron');

const { ero_hooks } = require('#/data/event/ero-hooks');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

/** @type {Record<string,function(chara_id:number,hook:HookArg,extra_flag:*):Promise<*>>} */
const handlers = {};

/**
 * @param _
 * @param {{father_id:number,mother_id:number}} extra_flag
 */
handlers[ero_hooks.report_pregnant_between_weeks] = async (_, extra_flag) => {
  if (extra_flag.mother_id !== 7) {
    throw new Error('unsupported hook!');
  }
  const gold_ship = get_chara_talk(7),
    me = get_chara_talk(0);
  era.drawLine();
  await gold_ship.say_and_wait('……');
  era.println();
  await gold_ship.say_and_wait([
    gold_ship.get_colored_name(),
    ' 大咧咧地坐在马桶上，手上拿着一根棒状物，若有所思。',
  ]);
  era.println();
  await gold_ship.say_and_wait(
    '那是验孕棒，通过检测尿液内的荷尔蒙量来测试女性是否怀孕的神奇小道具。',
  );
  era.println();
  const love = era.get('love:7');
  const callname = era.get('callname:7:0');
  if (love === 100) {
    await gold_ship.say_and_wait(
      `${callname} 会不会承认呢……${
        era.get('relation:7:0') > 0
          ? '虽然是个混蛋……'
          : '不过那家伙是个正直的人……'
      }`,
    );
  } else if (love >= 75) {
    await gold_ship.say_and_wait('造出来了，我们爱情的结晶♡');
  } else if (love >= 50) {
    await gold_ship.say_and_wait('这样一来，就能绑住那家伙了吧……');
  }
  era.drawLine();
  await gold_ship.say_and_wait(`今天很好天气啊——哦对了！${callname}，我有了。`);
  era.println();
  await era.printAndWait([
    gold_ship.get_colored_name(),
    ' 站到 ',
    me.get_colored_name(),
    ' 身旁，用手指了指自己的肚子。',
  ]);

  era.printButton('「晚上才干完第二天就说有了，那有那么快的？」', 1);
  await era.input();

  await gold_ship.say_and_wait(
    '「哦～『才干完』～！不，不开玩笑。你看这根新鲜的验孕棒。」',
  );
  era.println();
  await era.printAndWait([
    gold_ship.get_colored_name(),
    ' 的脸色意外地严肃认真，',
    me.get_colored_name(),
    ' 半信半疑地接过了验孕棒——验孕棒上显示的结果是阳性，很明显，',
    me.get_colored_name(),
    ' 就是孩子她爸了了。',
  ]);
  era.println();
  await era.printAndWait([
    '让负责马娘怀孕的事不得不向特雷森高层报告，',
    sys_get_colored_callname(0, 302),
    ' 与 ',
    sys_get_colored_callname(0, 301),
    ' 难得地露出了想要杀人的眼神，但她们还是会很负责地协助 ',
    me.get_couple_title(),
    ' 应对将要来临的育儿生活——以及尽力按下一切影响声誉的丑闻。',
  ]);
  era.println();
  await era.printAndWait('当然，做不做得到又是另一回事。');

  era.drawLine();
};

/**
 * @param _
 * @param {{child_id:number}} extra_flag character id of the child
 */
handlers[ero_hooks.have_baby] = async (_, extra_flag) => {
  const father_id = era.get(`cflag:${extra_flag.child_id}:父方角色`),
    mother_id = era.get(`cflag:${extra_flag.child_id}:母方角色`);
  if (mother_id !== 7 || father_id) {
    throw new Error('unsupported hook!');
  }
  era.drawLine();
  const gold_ship = get_chara_talk(7);
  await gold_ship.say_and_wait(`${era.get('callname:7:0')}……`);
  await gold_ship.say_and_wait('虽然我平常都没有怎么好好地表达出来，但是……');
  await gold_ship.say_and_wait('现在的我很幸福哦。');
};

/**
 * @param {HookArg} hook
 * @param extra_flag
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag) => {
  if (!handlers[hook.hook]) {
    throw new Error('unsupported hook!');
  }
  return await handlers[hook.hook](hook, extra_flag);
};
