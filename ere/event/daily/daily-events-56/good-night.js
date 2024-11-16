const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_custom_check } = require('#/event/check/check-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    callname = sys_get_callname(56, 0);
  era.print([
    '繁忙的一天结束了，把 ',
    kitaru.get_colored_name(),
    ' 送到了学生宿舍门口。',
  ]);
  const check = get_custom_check(56).is_want_make_love(),
    message = [];
  if (check > 0) {
    message.push(async () => {
      era.print([
        '刚想像往常一样告别，却看见 ',
        kitaru.get_colored_name(),
        ' 一反常态的握住了 ',
        me.get_colored_name(),
        ' 的手。',
      ]);
      kitaru.say('那个！因为占卜到了今天为吉，所以外宿申请什么的已经做好了……');
      era.print([
        '面色红润的 ',
        kitaru.get_colored_name(),
        ' 磨蹭着膝盖，用指尖捏着 ',
        me.get_colored_name(),
        ' 的衣服。',
      ]);
    });
    if (kitaru.sex_code - 1) {
      message.push(async () => {
        era.print([
          '刚想像往常一样告别，却看见 ',
          kitaru.get_colored_name(),
          ' 一反常态的握住了 ',
          me.get_colored_name(),
          ' 的手。',
        ]);
        kitaru.say('那个……');
        era.print([
          '面色红润的 ',
          kitaru.get_colored_name(),
          ' 拉开了运动外套的拉链，跃入眼中的两颗丰润乳球，随着',
          kitaru.sex,
          '愈发不稳的站姿害羞地摇动着。',
        ]);
        kitaru.say([callname, ' 明白的吧……？']);
      });
    }
    await get_random_entry(message)();
    era.print([
      '已经变成了爱心的星星瞳热切地看着 ',
      me.get_colored_name(),
      '。',
    ]);
    era.printButton('接受', 1);
    era.printButton('拒绝', 2);
    if ((await era.input()) === 1) {
      hook.arg = true;
    } else if (check === 2) {
      await kitaru.say_and_wait('……真的，真的不可以吗，明明正是大吉的时候呢？');
      await era.printAndWait([
        '正打算施以铁爪的右手被踮起脚尖的 ',
        kitaru.get_colored_name(),
        ' 握住了手腕，似有骨骼声响起，仍旧满脸堆笑的橙色',
        kitaru.get_uma_sex_title(),
        '强行拖着 ',
        me.get_colored_name(),
        ' 离开了学生宿舍。',
      ]);
      hook.arg = true;
    } else {
      await kitaru.say_and_wait('下次……还是先占卜一下？');
      await kitaru.say_and_wait('或者，我也学着强硬一点？');
      await era.printAndWait([
        '目送着 ',
        kitaru.get_colored_name(),
        ' 走回学生宿舍，',
        me.get_colored_name(),
        ' 听见',
        kitaru.sex,
        '如此喃喃自语着。',
      ]);
      hook.arg = false;
    }
    return;
  } else if (era.get('love:56') >= 75) {
    message.push(
      async () => {
        era.print([
          '趁 ',
          me.get_colored_name(),
          ' 不注意，',
          kitaru.get_colored_name(),
          ' 突然抱住了 ',
          me.get_colored_name(),
          '。',
        ]);
        kitaru.say('啾……');
        kitaru.say('得逞了呢！');
        era.print([
          '在 ',
          me.get_colored_name(),
          ' 反应过来之前，',
          kitaru.get_colored_name(),
          ' 已经跑进了宿舍。',
        ]);
        era.print(['唇上还留着', kitaru.sex, '的香甜气味']);
      },
      async () => {
        kitaru.say(['和 ', callname, ' 在一起的时间，总是过的这么快呢！']);
        era.print([
          '对上了满脸笑容的 ',
          kitaru.get_colored_name(),
          '，突然地向 ',
          me.get_colored_name(),
          ' 吻去',
        ]);
        era.print([
          '吸引了不少其他',
          kitaru.get_uma_sex_title(),
          '的指指点点。',
        ]);
      },
    );
  } else if (era.get('love:56') >= 50) {
    message.push(async () => {
      kitaru.say('明天见！');
      era.print([
        '在冲上来给了 ',
        me.get_colored_name(),
        ' 一个引人注目的拥抱之后，',
        kitaru.get_colored_name(),
        ' 跑进了宿舍。',
      ]);
    });
  } else {
    message.push(async () => {
      kitaru.say('今天也辛苦了！');
      era.print([
        kitaru.sex,
        '向 ',
        me.get_colored_name(),
        ' 挥了挥手，小跑进了宿舍。',
      ]);
    });
  }

  await get_random_entry(message)();
};
