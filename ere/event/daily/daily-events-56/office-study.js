const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

module.exports = async () => {
  const kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    sp = get_chara_talk(1),
    callname = sys_get_callname(56, 0),
    message = [];
  message.push(
    async () => {
      await kitaru.say('上次，差点就要补考了！多亏白兴大人的保佑！');
      await era.printAndWait([
        '在没收了 ',
        kitaru.get_colored_name(),
        ' 的占卜用铅笔后，',
        me.get_colored_name(),
        ' 开始帮',
        kitaru.sex,
        '规划出下次考试的重点。',
      ]);
      await era.printAndWait([
        '不过话说回来，为什么同样使用了占卜用铅笔，',
        sp.get_colored_name(),
        '就需要补考呢？',
      ]);
    },
    async () => {
      await kitaru.say('欸！我可是有书道段位的！');
      await kitaru.say_and_wait('所以这方面我还是很擅长的！');
    },
    async () => {
      await kitaru.say([callname, '！这幅怎么样？']);
      await era.printAndWait([
        '这样说着，',
        kitaru.teen_sex_title,
        '冲 ',
        me.get_colored_name(),
        ' 举起了那幅蕴含着神意般的线条艺术。',
      ]);
    },
    () =>
      kitaru.say_and_wait([
        '唔！在赛跑之外的地方，',
        callname,
        ' 也懂不少呢！',
      ]),
    async () => {
      await kitaru.say(['哦！这一本啊！']);
      await kitaru.say_and_wait(['以前躲在阁楼上的时候读到过！']);
    },
    async () => {
      await kitaru.say(['这本杂志，', callname, ' 有兴趣吗？']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 指着面前那本《The Rhode Island Journal of Astronomy》的占卜专栏。',
      ]);
    },
    async () => {
      await kitaru.say(['蓝型，绿型？……没听过的概念呢？']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 指着那本封面上有着浅蓝色五角星标志的书本询问 ',
        me.get_colored_name(),
        '。',
      ]);
    },
  );
  return get_random_entry(message)();
};
