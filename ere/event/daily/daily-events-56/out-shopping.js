const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const callname = sys_get_callname(56, 0),
    kitaru = get_chara_talk(56),
    love = era.get('love:56'),
    me = get_chara_talk(0),
    message = [],
    temp = await select_action_in_shopping_street();
  hook.arg = temp <= 1;
  switch (temp) {
    case 0:
      if (Math.random() < 0.5) {
        message.push(async () => {
          await kitaru.say_and_wait(
            '喔喔喔！果然是大吉呢！一个玩偶上居然挂了这么多！',
          );
          await era.printAndWait([
            '就在得意忘形的 ',
            kitaru.get_colored_name(),
            ' 要撞到夹娃娃机的时候，',
            me.get_colored_name(),
            ' 眼疾手快地拉住了',
            kitaru.sex,
            '。',
          ]);
          await kitaru.say_and_wait('欸嘿～抱歉！');
          await era.printAndWait([
            '看着 ',
            kitaru.get_colored_name(),
            ' 的样子，',
            me.get_colored_name(),
            ' 不禁笑了出来。',
          ]);
        });
      } else {
        message.push(async () => {
          await kitaru.say_and_wait([
            '唔！新出的格斗游戏吗？要试试双人对战吗，',
            callname,
            '？',
          ]);
          await era.printAndWait([
            '在连着输了几个回合后，',
            kitaru.get_colored_name(),
            ' 如同未卜先知般的操作让 ',
            me.get_colored_name(),
            ' 不得不投降。',
          ]);
          await kitaru.say_and_wait('啊啦，多亏白兴大人的保佑呢！');
        });
      }
      break;
    case 1:
      message.push(async () => {
        await kitaru.say_and_wait([callname, '，那边有抽奖欸！']);
        if (love > 49 && kitaru.sex_code - 1) {
          await era.printAndWait([
            '无需多言，',
            me.get_colored_name(),
            ' 和 ',
            kitaru.get_colored_name(),
            ' 一起走到了抽奖摊位前。',
          ]);
          await kitaru.say_and_wait(['让 ', callname, ' 分我一点好运吧！']);
          await era.printAndWait([
            '而后温暖的感觉与弹性的触感一同传来，',
            kitaru.get_colored_name(),
            ' 抱住了 ',
            me.get_colored_name(),
            ' 的胳膊，一副不肯放开的样子。',
          ]);
          await kitaru.say_and_wait('欸嘿～！');
          await era.printAndWait([
            '仿佛没有察觉到自己的双乳已经和 ',
            me.get_colored_name(),
            ' 的手臂发生了挤压，',
            kitaru.get_colored_name(),
            ' 将手伸入了箱子中。',
          ]);
        } else {
          await era.printAndWait([
            '在 ',
            kitaru.get_colored_name(),
            ' 的强烈要求下，',
            me.get_colored_name(),
            ' 不得不和',
            kitaru.sex,
            '来到了摊位前。',
          ]);
          await kitaru.say_and_wait('啊啊啊！白兴大人保佑！');
          await kitaru.say_and_wait('哈！');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' 将手伸入了箱子中。',
          ]);
        }
      });
      break;
    case 2:
      if (love > 49 && kitaru.sex_code - 1) {
        message.push(async () => {
          await kitaru.say_and_wait('呼……哈！我唱的如何！');
          await era.printAndWait([
            '在接连几首歌下来之后的 ',
            kitaru.get_colored_name(),
            ' 气喘吁吁的看着 ',
            me.get_colored_name(),
            '，期冀着评价。',
          ]);
          await era.printAndWait(
            '被汗浸透的洁白衬衣，其下的丰满乳肉若隐若现。',
          );
        });
        message.push(async () => {
          await kitaru.say_and_wait('哈……哈！我唱的如何！');
          await era.printAndWait([
            '在接连几首歌下来之后的 ',
            kitaru.get_colored_name(),
            ' 气喘吁吁的看着 ',
            me.get_colored_name(),
            '，期冀着评价。',
          ]);
          await era.printAndWait(
            '裙摆到白色长筒袜之间的绝对领域，泛着被汗水浸湿的油光。',
          );
        });
      } else {
        message.push(async () => {
          await era.printAndWait([
            '对于 ',
            kitaru.get_colored_name(),
            ' 而言，卡拉OK的难度远不及神社里那些需要又唱又跳的祭祀舞蹈。',
          ]);
          await kitaru.say_and_wait([callname, '，你也来一首吧！']);
        });
      }
      break;
    case 3:
      await era.printAndWait([
        '在一阵毫无复现可能的占卜动作之后，',
        kitaru.get_colored_name(),
        ' 指向了其中的一张宣传海报。',
      ]);
      message.push(async () => {
        await era.printAndWait('主打不可名状恐怖的民俗恐怖片。');
        await era.printAndWait([
          '结束后，双腿发软的 ',
          kitaru.get_colored_name(),
          ' 煞有介事的告诉 ',
          me.get_colored_name(),
          ' 驱除怨灵的技巧',
        ]);
      });
      message.push(async () => {
        await era.printAndWait('背景发生在异星的科幻片。');
        await kitaru.say_and_wait('唔！该说男主的预言能力很让人羡慕吗？');
      });
      message.push(async () => {
        await era.printAndWait('烧脑向的推理片。');
        await kitaru.say_and_wait('……和占卜的结果一样呢？');
      });
      if (era.get('love:56') >= 50) {
        message.push(async function () {
          await era.printAndWait('甜腻的爱情喜剧');
          await kitaru.say_and_wait([
            '哈哈哈！这种事情我好像也对 ',
            callname,
            ' 做过呢！',
          ]);
        });
      }
  }
  await get_random_entry(message)();
};
