/**
 * @file 东海帝王 - 调教
 *
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const get_participants_and_first_action = require('#/event/ero/snippets/get-participants-and-first-action');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_action_names, ero_hooks } = require('#/data/event/ero-hooks');

/** @type {Record<string,function(number,HookArg,*):Promise<*>>} */
const handlers = {};

[
  require('#/event/ero/ero-lines-3/ero-communications'),
  require('#/event/ero/ero-lines-3/ero-pettings'),
].forEach((f) => f(handlers));

/**
 * @param _
 * @param {{father_id:number,mother_id:number}} extra_flag
 */
handlers[ero_hooks.report_pregnant_between_weeks] = async (_, extra_flag) => {
  if (extra_flag.mother_id !== 3) {
    throw new Error();
  }
  const me = get_chara_talk(0),
    teio = get_chara_talk(3);
  if (era.get('status:3:腿伤')) {
    await era.printAndWait([
      me.get_colored_name(),
      ' 低头看着手里的报告，接受了里面显示的信息，抬头望向坐在窗前的担当。',
    ]);
    await era.printAndWait([
      '夕阳斜照入室，照在',
      teio.sex,
      '抚摸着自己小腹的手上，又打在',
      teio.sex,
      '轻轻摆动，略显无力的小腿上。',
    ]);
    await teio.say_and_wait(['训练员……训练员啊。']);
    await era.printAndWait([
      teio.sex,
      '笑了笑，指了指自己的肚子，对 ',
      me.get_colored_name(),
      ' 招招手。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 下定了决心，踩着影子走了过去。',
    ]);
    await era.printAndWait([me.get_couple_title(), '，是一家人。']);
  } else {
    await teio.say_and_wait(['训练员训练员——']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 还没反应过来发生了什么，就下意识张开双臂抱住了惊慌失措跑过来的自家担当，愣了一会才看懂',
      teio.sex,
      '捧在手里的那份文件。',
    ]);
    await era.printAndWait(['是这样吗……']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 目光下移，盯着',
      teio.sex,
      '的小腹。',
    ]);
    await me.say_and_wait(['那里就是，', teio.sex, '和我的……'], true);
    await era.printAndWait([
      me.get_colored_name(),
      ' 怀里的东西抽动了一下，',
      me.get_colored_name(),
      ' 回过神来，对上了自家担当那双眼睛。',
      teio.sex,
      '也回望着 ',
      me.get_colored_name(),
      '，神色逐渐温和成熟起来。',
    ]);
    await era.printAndWait([
      '好吧，',
      me.get_colored_name(),
      ' 想，以后要做的计划不止包括训练了。',
    ]);
  }
};

module.exports = async (hook, extra_flag) => {
  if (!handlers[hook.hook]) {
    throw new Error();
  }
  if (ero_action_names[hook.hook]) {
    const { attacker, defender } = get_participants_and_first_action(
      3,
      hook,
      extra_flag,
    );
    if (era.get('tflag:强奸') >= 0 || !sys_check_awake(defender)) {
      throw new Error();
    }
    return await handlers[hook.hook](
      get_chara_talk(attacker),
      get_chara_talk(defender),
      hook,
      extra_flag,
    );
  }
  return await handlers[hook.hook](hook, extra_flag);
};
