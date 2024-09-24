const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    callname = sys_get_callname(56, 0),
    message = [];
  if ((hook.arg = !!(await select_action_around_river()))) {
    const common = () =>
      era
        .printAndWait([
          kitaru.get_colored_name(),
          ' 一边在前面走着，一边同 ',
          me.get_colored_name(),
          ' 科普一些不知从哪里听来的知识。',
        ])
        .then(() => kitaru.say_and_wait([callname, ' 有在听吗？']));
    message.push(
      () =>
        kitaru.say_and_wait('据说，流动的水能够阻拦灵体的活动！').then(common),
      () =>
        kitaru
          .say_and_wait('据说，白兴大人曾经掌管着一天里的一个时辰呢！')
          .then(common),
      () =>
        kitaru
          .say_and_wait('据说，能量之地的形成和持续不断的集体信念有关系呢！')
          .then(common),
    );
    if (era.get('love:56') >= 50) {
      message.push(async () => {
        await kitaru.say_and_wait('唔！有点凉呢！');
        await era.printAndWait([
          '褪下鞋袜的 ',
          kitaru.get_colored_name(),
          ' 将裸足伸入水中，自然地浸出细腻诱人的光泽',
        ]);
        await kitaru.say_and_wait([callname, ' 也要来试试吗！']);
      });
    }
  } else {
    message.push(
      async () => {
        await kitaru.say_and_wait('……');
        await era.printAndWait([
          me.get_colored_name(),
          ' 看着正聚集会神地盯着水面的 ',
          kitaru.get_colored_name(),
          '。',
        ]);
        await era.printAndWait([
          '难得安静下来的 ',
          kitaru.get_colored_name(),
          ' 展现出了与平时截然不同的一面。',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 甚至可以在',
          kitaru.sex,
          '庄严肃穆外表上捕捉到一丝神性',
        ]);
      },
      async () => {
        await kitaru.say_and_wait('钓鱼算是七分运气的事情呢！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 一边说着一边将鱼饵放入水中。',
        ]);
      },
      async () => {
        await kitaru.say_and_wait('会不会钓上来什么有意思的东西呢！');
        await kitaru.say_and_wait('就像是神话故事里那样！');
      },
    );
  }
  await get_random_entry(message)();
};
