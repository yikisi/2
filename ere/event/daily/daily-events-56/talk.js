const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const FukuEventMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const { attr_enum } = require('#/data/train-const');

module.exports = async () => {
  const message = [],
    kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    sex_mark = era.get('mark:56:淫纹'),
    sex_happy = era.get('mark:56:欢愉'),
    sex_love = era.get('mark:56:同心'),
    edu_marks = new FukuEventMarks(),
    callname = sys_get_callname(56, 0);
  if (sex_mark === 1) {
    message.push(async () => {
      await era.printAndWait([
        kitaru.sex,
        '对 ',
        me.get_colored_name(),
        ' 指了指自己被画上了淫纹的小腹。',
      ]);
      await kitaru.say_and_wait('那个，训练的时候总是害怕被别人看见呢……');
    });
  } else if (sex_mark >= 2) {
    message.push(async () => {
      await era.printAndWait([
        '环顾四周后，',
        kitaru.get_colored_name(),
        ' 冲 ',
        me.get_colored_name(),
        ' 拉起了衣服的下摆，露出了自己的小腹。',
      ]);
      await era.printAndWait([
        '冒着粉光的纹路，忠实的履行着自己在',
        kitaru.get_teen_sex_title(),
        '身上的职责。',
      ]);
    });
  }

  if ((sex_happy || sex_mark) === 1) {
    message.push(async () => {
      await kitaru.say_and_wait([
        '那个，',
        callname,
        ' 在训练结束之后有时间吗？',
      ]);
    });
  } else if ((sex_happy || sex_mark) === 2) {
    message.push(async () => {
      await era.printAndWait([
        '明显的绯红挂在 ',
        kitaru.get_colored_name(),
        ' 脸上，用双手隔着运动外套按压起自己的小腹。',
      ]);
      await kitaru.say_and_wait(['唔，都是 ', callname, ' 的错啦！']);
    });
  } else if ((sex_happy || sex_mark) === 3) {
    message.push(async () => {
      await era.printAndWait([
        '在 ',
        kitaru.get_colored_name(),
        ' 愈发过分的要求下给了',
        kitaru.sex,
        '一个吻。',
      ]);
      await kitaru.say_and_wait('咕……');
      await era.printAndWait([
        kitaru.sex,
        '的指尖若有若无地在 ',
        me.get_colored_name(),
        ' 的胯部附近游动。',
      ]);
    });
  }

  if (sex_love === 1) {
    message.push(async () => {
      await era.printAndWait([
        '嚷嚷着开运之类的话语，',
        kitaru.get_colored_name(),
        ' 扑到了 ',
        me.get_colored_name(),
        ' 的身上。',
      ]);
    });
  } else if (sex_love >= 2) {
    message.push(async () => {
      await kitaru.say_and_wait([
        '一心同体！',
        callname,
        '，我会永远在你身边的！',
      ]);
    });
  }

  if (era.get('base:56:体力') < era.get('maxbase:56:体力') * 0.45) {
    message.push(
      () => kitaru.say_and_wait('今日，休息为吉……'),
      async () => {
        await era.printAndWait('星星瞳变得暗淡了');
        await era.printAndWait(['是时候让', kitaru.sex, '歇一歇了']);
      },
    );
  }
  switch (era.get('cflag:56:干劲')) {
    case -2:
      message.push(async () => {
        await kitaru.say_and_wait(
          '占卜运势倒数第一……抽签又抽到大凶……还遇到黑猫横跨面前，我，我不行了！',
        );
      });
      break;
    case -1:
      message.push(async () => {
        await kitaru.say_and_wait('我抽签抽到凶了……会有噩运发生吗？');
      });
      break;
    case 0:
      message.push(async () => {
        await kitaru.say_and_wait('今天的运势也是不好不坏呢……');
        await kitaru.say_and_wait('普普通通的也不错？');
      });
      break;
    case 1:
      message.push(async () => {
        await kitaru.say_and_wait('准备工作和占卜都完成了，让我们开始吧……');
      });
      break;
    case 2:
      message.push(async () => {
        await kitaru.say_and_wait([
          callname,
          ' 听我说！我现在的运势是超越了大吉的超吉呢！',
        ]);
        await kitaru.say_and_wait('呵呵呵，现在的我是超无敌的！');
      });
  }

  await get_random_entry(message)();

  if (edu_marks.luck_train > 0) {
    era.drawLine();
    await era.printAndWait([
      '看见了 ',
      kitaru.get_colored_name(),
      ' 留在桌面上的纸条。',
    ]);
    switch (edu_marks.luck_train - 1) {
      case attr_enum.speed:
        await kitaru.used_to_say_and_wait('对了，今天似乎速度训练是吉哦！');
        break;
      case attr_enum.endurance:
        await kitaru.used_to_say_and_wait('今天的吉项是耐力训练哦！');
        break;
      case attr_enum.strength:
        await kitaru.used_to_say_and_wait('力量训练看起来不错的样子！');
        break;
      case attr_enum.toughness:
        await kitaru.used_to_say_and_wait('根性训练会不会适合一点！');
        break;
      case attr_enum.intelligence:
        await kitaru.used_to_say_and_wait('智力训练乃是大吉！');
    }
  }
};
