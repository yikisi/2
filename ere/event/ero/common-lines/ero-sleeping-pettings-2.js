/**
 * @file 调教指令 - 睡奸爱抚系2
 *
 * @author O口口口口口
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.fuck_tit] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将沉睡的 ',
      defender.get_colored_name(),
      ' 双乳聚拢，摩擦着自己的肉棒……】',
    ]);
    await attacker.print_and_wait('不觉得很棒吗。');
    await attacker.print_and_wait([
      '这份 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ` 俯低在自己身下，用手捧起独属于${defender.get_teen_sex_title()}的柔软将滚烫的肉棒围起的姿态……`,
    ]);
    await defender.say_and_wait('唔……');
    await attacker.print_and_wait(
      '似乎有好好地传达到呢，从肉棒的龟头向上升腾起的，满载着爱欲的热腾腾白汽。',
    );
    await attacker.print_and_wait(
      '比起会遮遮掩掩的清醒时候，完全没有防备的睡颜诚实到让人兴奋。',
    );
    await attacker.print_and_wait('嗯，确实已经熏制成相当美味的表情了。');
  };

  handlers[ero_hooks.tit_job] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将双乳聚拢，摩擦着沉睡的 ',
      defender.get_colored_name(),
      ' 耸立的肉棒……】',
    ]);
    await attacker.print_and_wait(
      '明明没有听见这样的要求，却自顾自拉下上衣将欧派露出来了……',
    );
    await attacker.say_and_wait('到底要面对肉棒屈服成什么样啊我自己……', true);
    await attacker.print_and_wait(
      '而被柔软包裹着的肉棒却骄傲地挺立成了能轻易叫小穴发颤的形状。',
    );
    await attacker.print_and_wait([
      '主动地双手拥起乳球，不敢抬头的 ',
      attacker.get_colored_name(),
      ' 想象着 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 如果醒着此刻会露出的表情。',
    ]);
    await attacker.print_and_wait([
      '不知预见到了怎样的表情，静悄悄的房间里，',
      attacker.get_colored_name(),
      ' 的心咚咚地跳着。',
    ]);
  };

  handlers[ero_hooks.tit_and_blow_job] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 一边用胸部摩擦着 ',
      defender.get_colored_name(),
      ' 耸立的肉棒，一边张口吮吸着沉睡的龟头……】',
    ]);
    await attacker.print_and_wait([
      `只是让被夹在乳肉中的肉棒舒服地挺起还不足够吗……到底在平时是以一种怎样的目光看待着自己的${
        era.get(`cflag:${defender.id}:种族`) ? '担当' : '伙伴'
      }啊……`,
    ]);
    await attacker.say_and_wait('吸溜吸溜吸溜……');
    await attacker.print_and_wait([
      '乳肉被滴落在肉棒竿身上先走汁涂抹得滑腻腻亮晶晶的，但比起辛苦的欧派，最为滚烫而饱满的龟头却被 ',
      attacker.get_colored_name(),
      ' 用双手迎进了口中。',
    ]);
    await defender.say_and_wait('唔……');
    await attacker.print_and_wait(
      '舌头开始不听使唤了，但只是感受到口上的龟头感到了一点点的寂寞，簇拥着乳头侍奉讨好肉棒的动作便没法停下……',
    );
  };

  handlers[ero_hooks.suck_nipple] = async (attacker, defender) => {
    await attacker.print_and_wait([
      '完全没有让有着樱桃颜色的漂亮乳头躲开逐渐凑过来的 ',
      attacker.get_colored_name(),
      ` 的本能，浅浅起伏着的${defender.get_teen_sex_title()}的柔软乖乖地被含入了坏家伙的嘴里。`,
    ]);
    await attacker.say_and_wait('吸——');
    await attacker.print_and_wait([
      '渐渐地，在舌尖兀自发着烫的红点有了硬挺的实感，',
      attacker.get_colored_name(),
      ' 于是小心用齿间将那肉粒衔住，咻地一吸——',
    ]);
    await defender.say_and_wait('唔——');
    await attacker.print_and_wait('哈……现在才想起来要挣扎可太晚了一些ww');
  };

  handlers[ero_hooks.bite_nipple] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 轻轻啮咬着沉睡的 ',
      defender.get_colored_name(),
      ' 敏感的乳头……】',
    ]);
    await attacker.print_and_wait([
      '在用齿间将硬邦邦的乳粒衔入口上的那一刻，面前仰面躺着的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 身体一下子便僵硬了。',
    ]);
    await attacker.print_and_wait('诶……是吗……');
    await attacker.print_and_wait(
      `轻轻地活用着牙齿，绕着敏感的乳头留下一圈参差的红痕……顺便让怀中的${defender.get_teen_sex_title()}身体不住地颤抖……`,
    );
    await attacker.print_and_wait([
      '大概是明白了这边接下来的目标吧，在乳头被舌细细舔舐润滑的瞬间，',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的双腿缠上了 ',
      attacker.get_colored_name(),
      ' 的腰……',
    ]);
    await defender.say_and_wait('唔——');
    await attacker.print_and_wait('很可爱。');
    await attacker.print_and_wait([
      '不止在说怀里的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '，还有那留满了红肿痕迹的乳头。',
    ]);
  };

  handlers[ero_hooks.force_armpit_intercourse] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将沉睡的 ',
      defender.get_colored_name(),
      ' 无防备的手拉起，用肉棒摩擦着腋下……】',
    ]);
    await attacker.print_and_wait([
      '睡着的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '，无防备的手被性欲冲昏头脑的 ',
      attacker.get_colored_name(),
      ' 笔直地向上抬起',
    ]);
    await attacker.print_and_wait([
      '随后 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的腋下，便被肉棒硕大的龟头负起责任好好清洗着。',
    ]);
    await attacker.print_and_wait(
      '冒着热气的腋肉随着抽插泛出些绯色，似乎真变成了与性相关的色情器官……',
    );
    await attacker.print_and_wait([
      '并没能完全将这视为理所应当的事，',
      attacker.get_colored_name(),
      ' 的动作带着几分犹豫……',
    ]);
    await attacker.print_and_wait([
      '……犹豫地用肉棒磨蹭抽插着正背对着自己的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的腋下穴……',
    ]);
  };

  handlers[ero_hooks.foot_job] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将沉睡的 ',
      defender.get_colored_name(),
      ' 耸立的肉棒踩在脚下……】',
    ]);
    await attacker.print_and_wait(
      '因为在床上站起身的缘故，所以连在视线里变小的肉棒也变得可爱了许多。',
    );
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' 抬起足，将胀红了的肉棒踩在了脚下。',
    ]);
    await attacker.print_and_wait(
      '诶……就算是这样的厉害肉棒，被踩在足底的时候也会摇晃得这么可爱吗ww',
    );
  };

  handlers[ero_hooks.force_foot_job] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 拉过沉睡的 ',
      defender.get_colored_name(),
      ' 健康的双足，踩弄着自己的肉棒……】',
    ]);
    await attacker.print_and_wait('呼……已经完全就是所谓的变态了吧。');
    await attacker.print_and_wait([
      '把睡着的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的双足用手捧起以侍奉自己的肉棒，是知道面前无自觉的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 没法直接直截了当地投来嫌弃的眼神才拥有的勇气吗……',
    ]);
    await attacker.print_and_wait([
      '一开始，触到了陌生热感的双足怯怯地想要躲开，却被 ',
      attacker.get_colored_name(),
      ' 的双手重新揽回。',
    ]);
    await attacker.print_and_wait('随后大概是察觉到了。');
    await attacker.print_and_wait('正侵犯着自己足底的这根肉棒不是脆弱的东西。');
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      ' 踩踏着肉棒的东西变得自然了许多。',
    ]);
    await attacker.print_and_wait([
      '仿佛将 ',
      attacker.get_colored_name(),
      ' 的肉棒踩在足底是什么与生俱来的天赋般。',
    ]);
    await attacker.print_and_wait('嘶……');
    await attacker.print_and_wait([
      '只是单纯地想到了这一点，',
      attacker.get_colored_name(),
      ' 便又感到小腹热起来了。',
    ]);
  };

  handlers[ero_hooks.tail_job] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用尾巴缠弄着沉睡的 ',
      defender.get_colored_name(),
      ' 耸立的肉棒……】',
    ]);
    await attacker.print_and_wait('灵活……');
    await attacker.print_and_wait([
      '以 ',
      attacker.get_colored_name(),
      ' 都意料之外的灵敏程度，有着弯曲毛发的马尾巴缠上了肉棒。',
    ]);
    await attacker.print_and_wait([
      '于是原本肉棒浓厚到叫人头晕的气味被尾巴裹上了一层保护色，但这却也让 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的肉棒前所未有的兴奋着。',
    ]);
    await attacker.print_and_wait(
      `原来……${defender.get_uma_sex_title()}们的尾巴真的能做到这种事吗……`,
    );
    await attacker.print_and_wait([
      '……感受着这份暴涨的热度，背过身撅起屁股的 ',
      attacker.get_colored_name(),
      ' 连泛红的耳朵的动作都变得可爱起来。',
    ]);
  };
};
