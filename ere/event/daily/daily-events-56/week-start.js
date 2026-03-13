const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/**
 * @param _
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async (_, __, event_object) => {
  const callname = sys_get_callname(56, 0),
    kitaru = get_chara_talk(56),
    me = get_chara_talk(0);
  await print_event_name('惩戒之后', kitaru);
  switch (event_object.arg) {
    case 'p1':
      await kitaru.say_and_wait([
        '呜啊！命定之人变成',
        kitaru.uma_sex_title,
        '了吗！',
      ]);
      await kitaru.say_and_wait(['不用担心！', callname, '，我会帮你适应的！']);
      await kitaru.say_and_wait('话说……还该叫训练员吗？');
      await kitaru.say_and_wait('姐姐怎么样？');
      break;
    case 'p2':
      await kitaru.say_and_wait('唔！姐姐想干什么？');
      await era.printAndWait([
        me.get_colored_name(),
        '想要反抗而使出来的铁爪，却被轻而易举的擒住了。',
      ]);
      await era.printAndWait([
        '之后在 ',
        kitaru.get_colored_name(),
        ' 半强迫的要求下换上了和',
        kitaru.sex,
        '如出一辙的服饰。',
      ]);
      break;
    case 'p3':
      await kitaru.say_and_wait('没有关系……');
      await kitaru.say_and_wait([
        '即使是这样，我也不会抛下 ',
        callname,
        ' 的……',
      ]);
      await kitaru.say_and_wait('毕竟是约好的事情嘛……');
      await kitaru.say_and_wait('呼……');
      await era.printAndWait([
        '伸手将 ',
        me.get_colored_name(),
        ' 刚洗完澡，湿漉漉的耳朵捋直，擦干，橙色的赛',
        kitaru.uma_sex_title,
        '将耳饰戴在了 ',
        me.get_colored_name(),
        ' 的耳朵上。',
      ]);
      await era.printAndWait([
        '耳朵似乎是过于敏感了，',
        me.get_colored_name(),
        ' 的视野中逐渐蒙上了一层水汽。',
      ]);
      await era.printAndWait([
        '尾巴认主般的缠在了 ',
        kitaru.get_colored_name(),
        ' 的腰上……',
      ]);
      await era.printAndWait([
        '难以想象，这种事情会发生在以前那个只手就能制服 ',
        kitaru.get_colored_name(),
        ' 的 ',
        callname,
        ' 身上。',
      ]);
  }
};
