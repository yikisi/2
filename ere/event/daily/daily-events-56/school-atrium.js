const era = require('#/era-electron');

const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  hook.arg = !(await select_action_in_atrium(56));
  const kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:56:育成回合计时'),
    message = [];
  if (hook.arg) {
    message.push(async () => {
      await kitaru.say_and_wait(
        '希望白兴大人能听到我的祈祷，让我今天的运势变得更好吧！',
      );
      if (edu_weeks > 120) {
        await kitaru.say_and_wait(
          '唔！当然要是没有的话，我也是会努力的就是啦！',
        );
      }
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 对着深不见底的枯树洞喊道。',
      ]);
    });
    if (edu_weeks > 42) {
      //判断 所谓白兴大人
      message.push(async () => {
        await kitaru.say_and_wait([
          kitaru.get_bigger_sibling_sex_title(),
          '！我一定会成为一名优秀的赛',
          kitaru.get_uma_sex_title(),
          '的！',
        ]);
        await kitaru.say_and_wait('请你……呜……你一定要好好看着啊！');
        if (era.get('love:56') >= 75) {
          await kitaru.say_and_wait('还有……我也找到了能陪我一起走下去的人！');
          await kitaru.say_and_wait('不用再担心我了！');
        }
      });
    }
  } else {
    message.push(async () => {
      await kitaru.say_and_wait('要和我拜访学校内的能量之地吗？');
      await era.printAndWait([
        '循着 ',
        kitaru.get_colored_name(),
        ' 的指引，',
        me.get_colored_name(),
        ' 和',
        kitaru.sex,
        '一起在学校内走了遍。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的目的有没有达成不知道，但是遭到了自家担当尾抱的 ',
        me.get_colored_name(),
        ' 成了今天特雷森论坛的热门话题。',
      ]);
    });
    if (era.get('love:56') >= 75) {
      message.push(async function () {
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 挽起了 ',
          me.get_colored_name(),
          ' 的手臂，经过一位又一位学生。',
        ]);
        await kitaru.say_and_wait('被许多人看着呢……');
        await era.printAndWait([
          '话是这么说，不过 ',
          me.get_colored_name(),
          ' 发现 ',
          kitaru.get_colored_name(),
          ' 的行为更为大胆了。',
        ]);
      });
    }
  }
  await get_random_entry(message)();
};
