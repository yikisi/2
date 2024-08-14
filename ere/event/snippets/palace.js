const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const get_palace_info = require('#/event/edu/snippets/get-palace-info');
const print_event_name = require('#/event/snippets/print-event-name');

const CharaTitles = require('#/data/chara-titles');
const { class_enum } = require('#/data/race/model/race-info');
const { race_rewards } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 */
async function palace(chara, me) {
  const { check, count, buffer } = get_palace_info(chara),
    titles = new CharaTitles(chara.id).get();
  if (
    check >= 6 ||
    (check >= 4 &&
      titles.findIndex(
        (e) =>
          e.n.endsWith('三冠') || e.n.endsWith('三宝冠') || e.n === '美国梦',
      ) !== -1) ||
    (check >= 3 &&
      titles.findIndex(
        (e) =>
          e.n.startsWith('无败三') ||
          e.n.startsWith('无败泥') ||
          e.n === '无暇美国梦',
      ) !== -1)
  ) {
    await print_event_name('登上殿堂宝座', chara);

    await era.printAndWait(
      `每年一月，URA赛${chara.get_uma_sex_title()}殿堂就会开始针对退役马娘进行票选。`,
    );
    era.println();
    await era.printAndWait(
      `而到了三月，生涯功成名就，且在严格票选中脱颖而出的赛${chara.get_uma_sex_title()}将会登上殿堂，并获得《显彰赛${chara.get_uma_sex_title()}》此一至高无上的荣誉。`,
    );
    era.println();
    await era.printAndWait([
      '而 ',
      me.get_colored_name(),
      ' 的爱马 ',
      chara.get_colored_name(),
      '——',
    ]);
    era.add(`cflag:${chara.id}:殿堂`, 1);
  } else {
    await print_event_name('殿堂宝座之下', chara);

    await era.printAndWait('很遗憾未能入选殿堂。');
    era.println();
    await era.printAndWait([
      '但 ',
      me.get_couple_title(),
      ' 也仍然为竭尽全力达到的成果感到骄傲，并且相信后来者能站在自己的肩上爬向更高的顶点。',
    ]);
  }
  era.println();
  for (const seg of buffer) {
    await era.printAndWait(seg);
  }
  era.println();
  const title = new CharaTitles(chara.id).get_colored_curr_title(),
    fame_reward =
      (count.g1 * race_rewards[class_enum.G1][1].fame) / 2 +
      (count.g2 * race_rewards[class_enum.G2][1].fame) / 2 +
      (count.g3 * race_rewards[class_enum.G3][5].fame) / 2;
  if (check >= 6) {
    await era.printAndWait([
      `随着以${chara.sex}为蓝本的铜像揭幕，`,
      ...(title ? [title, ' '] : []),
      chara.get_colored_name(),
      ` 的传奇故事将会永远留在殿堂之中……`,
    ]);
    era.println();
    sys_like_chara(302, 0, fame_reward / 5 + 20) && (await era.waitAnyKey());
    sys_like_chara(301, 0, 100) && (await era.waitAnyKey());
  } else {
    await era.printAndWait([
      ...(title ? [title, ' '] : []),
      chara.get_colored_name(),
      ` 的传奇故事将会永远被世人所传颂……`,
    ]);
    era.println();
    sys_like_chara(302, 0, fame_reward / 5) && (await era.waitAnyKey());
  }
  sys_change_fame(fame_reward);
  era.set(`cflag:${chara.id}:可再次育成`, 1);
}

module.exports = palace;
