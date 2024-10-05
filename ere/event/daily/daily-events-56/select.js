const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

module.exports = () => {
  const kitaru = get_chara_talk(56),
    callname = sys_get_callname(56, 0);
  const message = [];
  if (era.get('relation:56:0') > 375) {
    message.push(
      () =>
        kitaru.say([
          '果然，',
          callname,
          ' 就是我命中注定的人呢！占卜和我的心都是这么说的！',
        ]),
      () => kitaru.say(['我完全信任 ', callname, '！ 毕竟是命中注定的人嘛！']),
    );
  } else {
    message.push(
      () => kitaru.say(['只要相信占卜和 ', callname, '！一定会没问题的！']),
      () => kitaru.say([callname, ' 今天的旨意是什么呢？！']),
    );
  }
  switch (era.get('mark:56:淫纹')) {
    case 1:
      message.push(() => kitaru.say('淫纹……像是故事里那些恶堕情节一样呢……'));
      break;
    case 2:
      message.push(() =>
        kitaru.say('又发光了，是不是该多穿一件比较……哈……好热……'),
      );
      break;
    case 3:
      message.push(() =>
        kitaru.say('为参拜客们祈福的时候，淫纹偶尔会不合时宜的发热……'),
      );
  }

  switch (era.get('mark:56:欢愉') || era.get('mark:56:淫纹')) {
    case 1:
      message.push(() => kitaru.say([callname, '！那个……今天晚上怎么样？']));
      break;
    case 2:
      message.push(() =>
        kitaru.say(['该说看到 ', callname, '，身体就会起反应吗？']),
      );
      break;
    case 3:
      message.push(() => {
        kitaru.say('该换条内裤了……');
        kitaru.say(['唔……', callname, ' 又在明知故问了。']);
      });
  }

  switch (era.get('mark:56:同心')) {
    case 1:
      message.push(() =>
        kitaru.say(['每天睁开眼睛就能见到 ', callname, '，该说这就是大吉吗！']),
      );
      break;
    case 2:
      message.push(() =>
        kitaru.say([
          callname,
          '！要来一个 ',
          sys_get_callname(0, 56),
          ' 的开运拥抱吗？',
        ]),
      );
      break;
    case 3:
      message.push(() =>
        kitaru.say([
          '看见我和 ',
          callname,
          ' 这样黏在一起，白兴大人一定会很开心的！',
        ]),
      );
  }
  get_random_entry(message)();
};
