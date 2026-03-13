const era = require('#/era-electron');

const typing = require('#/event/edu/edu-events-56/snippets/typing');
const { add_event } = require('#/event/queue');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} kitaru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (kitaru, me, callname, hook, event_object) => {
  if (era.get('flag:当前互动角色') !== 56) {
    add_event(hook.hook, event_object);
    return;
  }
  if (event_object?.arg !== 'hot_line') {
    return;
  }
  const love = era.get('love:56');
  await print_event_name('热线电话', kitaru);
  await era.printAndWait([
    '被兴冲冲的 ',
    kitaru.get_colored_name(),
    ' 拉着在旧校区里四处乱转。',
  ]);
  await kitaru.say_and_wait([callname, '！']);
  await kitaru.say_and_wait(
    '据说！只要拨打这个电话号码！就可以获得开运能量哦！',
  );
  await era.printAndWait([
    '看起来纤细的手臂却使出了难以抗衡的力量锁着 ',
    me.get_colored_name(),
    ' 的胳膊，杜绝了 ',
    me.get_colored_name(),
    ' 想要逃跑的念头。',
  ]);
  era.drawLine({ content: '一段时间后' });
  await kitaru.say_and_wait('呼……');
  await era.printAndWait([
    '总算是到了 ',
    kitaru.get_colored_name(),
    ' 认为合适的时候，天色已暗，窗户透出的阳光在走廊泛黄的墙壁上打出光斑。',
  ]);
  await era.printAndWait([
    '不过……完全比不上 ',
    me.get_colored_name(),
    ' 担当双瞳中因兴奋而几乎要满溢出来的光彩就是了。',
  ]);
  await kitaru.say_and_wait(['那么，', callname, '！开始拨打电话吧！']);
  await era.printAndWait([
    '站在被事先挑选好的仪式地点，也就是被老旧课桌椅围绕的教室正中，',
    kitaru.get_colored_name(),
    ' 拿起了电话。',
  ]);
  let a = true,
    b = true,
    c = true;
  do {
    era.printMultiColumns(
      [
        { c: '拨打电话', e: a },
        { c: '询问电话号码的细节', e: b },
        { c: '看一下周围的情况', e: c },
      ].map((e, i) => ({
        accelerator: i + 1,
        config: { disabled: !e.e, width: 8 },
        content: e.c,
        type: 'button',
      })),
    );
    switch (await era.input()) {
      case 1:
        a = b = c = false;
        await era.printAndWait('嘟……嘟……');
        era.drawLine({ content: '几秒钟后' });
        break;
      case 2:
        b = false;
        await kitaru.say_and_wait('嗯……我在一个论坛上看到的。');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 歪了歪头，似乎并不觉得自己的行为有什么不妥。',
        ]);
        break;
      case 3:
        c = false;
        await era.printAndWait('过于安静了，甚至窗外偶有几声鸟鸣传入。');
        await era.printAndWait('太阳要下山了……');
    }
  } while (a || b || c);

  await era.printAndWait('叮铃铃……叮铃铃……');
  await kitaru.say_and_wait('诶！？');
  await kitaru.say_and_wait(['那个……', callname, '，你听见了吗？']);
  await era.printAndWait('听起来像是座机的铃声。');
  await era.printAndWait(
    '声音应该是从隔壁教室传来的，在空荡荡的教学楼内回荡着。',
  );
  await era.printAndWait([
    me.get_colored_name(),
    ' 和 ',
    kitaru.get_colored_name(),
    ' 来到走廊上朝那间课室内看去。',
  ]);
  await kitaru.say_and_wait('真真真的假的！');
  await era.printAndWait('布满灰尘的讲台上突兀的放着一台老式电话座机。');
  await era.printAndWait(
    '红色外壳泛着树脂的光泽，本应该是拨号盘的地方却被一块黑色旋钮替代。',
  );
  await era.printAndWait(
    '这个电话似乎就凭空出现在那里，在不接任何线路的情况下响着。',
  );
  await kitaru.say_and_wait('现现现在……该怎么办？');
  await era.printAndWait(
    love >= 50
      ? [
          '橙发的',
          kitaru.teen_sex_title,
          '整个人像是树獭一样抱住了 ',
          me.get_colored_name(),
          ' 的腰，颤抖地指着那个还在不断发出响声的通讯设备。',
        ]
      : [
          '橙发的',
          kitaru.teen_sex_title,
          '颤抖地捏着 ',
          me.get_colored_name(),
          ' 的衣角，惊恐地指着那个还在不断发出响声的通讯设备。',
        ],
  );

  const bonus_list = [];
  let str;
  a = b = c = true;
  do {
    era.printMultiColumns(
      [
        { c: '接电话', e: a },
        { c: '让待兼福来接', e: b },
        { c: '离开', e: c },
      ].map((e, i) => ({
        accelerator: i + 1,
        config: { disabled: !e.e, width: 8 },
        content: e.c,
        type: 'button',
      })),
    );
    switch (await era.input()) {
      case 1:
        a = b = c = false;
        era.printButton('「喂？」', 1);
        era.printButton('「你好？」', 2);
        await era.input();
        await kitaru.say_as_unknown_and_wait('……#&A%……');
        await era.printAndWait([
          '似乎有应答声传来，不过 ',
          me.get_colored_name(),
          ' 没法确定。',
        ]);
        era.printButton('「喂？」', 1);
        era.printButton('「你好？」', 2);
        await era.input();
        await kitaru.say_as_unknown_and_wait('……@&*#……&&￥……');
        await era.printAndWait('话筒里充斥着杂音和宛如倒放磁带的撕拉声。');
        era.printButton('挂断', 1);
        era.printButton('「喂？」', 2);
        str = `照顾好待兼福来 ${me.actual_name}训练员`;
        if ((await era.input()) === 1) {
          await era.printAndWait([
            '当 ',
            me.get_colored_name(),
            ' 正打算放下话筒的时候，如同电脑合成般的声音自那一头传来……',
          ]);
        } else {
          await era.printAndWait('如同电脑合成般的声音自那一头传来……');
        }
        era.println();
        await typing(str);
        era.println();
        await era.printAndWait('嘟……嘟……');
        await era.printAndWait('被挂断了……');
        bonus_list.push(201542);
        break;
      case 2:
        a = b = c = false;
        await kitaru.say_and_wait('欸！这样吗！！！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 颤颤巍巍的握起了电话。',
        ]);
        await kitaru.say_and_wait('……欸！？');
        await era.printAndWait([
          '似乎是对电话那头出现的人有些意外，',
          kitaru.get_colored_name(),
          ' 面露惊诧。',
        ]);
        await kitaru.say_and_wait('嗯……是的…….');
        await kitaru.say_and_wait('……嗯，训练员，我的训练员也在！');
        await kitaru.say_and_wait('……我知道了。');
        await era.printAndWait([
          me.get_colored_name(),
          ' 看见 ',
          kitaru.get_colored_name(),
          ' 挂断了电话，眼眶周围有些发红',
        ]);
        await era.printAndWait([
          '之后也没能问出来电话那头是谁，',
          kitaru.sex,
          '就像完全忘了这件事一样。',
        ]);
        bonus_list.push(201222);
        break;
      case 3:
        c = false;
        await kitaru.say_and_wait('是是是……我也觉得，这有点……');
        era.drawLine({ content: '一段时间后' });
        await era.printAndWait('叮铃铃……叮铃铃……');
        await kitaru.say_and_wait('诶！？怎么又走回来了啊！！！！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 的惊呼声在走廊里回荡。',
        ]);
    }
  } while (a || b || c);
  era.println();
  get_skills_and_print_in_event(56, bonus_list) && (await era.waitAnyKey());
  return true;
};
