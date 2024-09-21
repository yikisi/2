const { get, printAndWait, set } = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const MeekEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-201');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * 快乐米可 - 招募
 *
 * @author 无名黑奴（临时）
 */
module.exports = {
  async run() {
    const me = get_chara_talk(0),
      meek = get_chara_talk(201);
    if (get('cflag:201:育成次数') === 0) {
      await printAndWait([
        '在 ',
        get_chara_talk(304).get_colored_name(),
        ' 的引荐下，',
        me.get_colored_name(),
        ' 和 ',
        meek.get_colored_name(),
        ' 相互认识了，并将作为搭档开始重要的三年。',
      ]);
    } else {
      await printAndWait([
        me.get_colored_name(),
        ' 和 ',
        meek.get_colored_name(),
        ' 又一次站在了一起，迎接接下来三年中的每个挑战。',
      ]);
    }
    await me.say_and_wait(
      ['带领 ', meek.get_colored_name(), ' 多多地取得G1比赛的胜利吧……'],
      true,
    );
    set('cflag:201:招募状态', recruit_flags.yes);
    set('flag:当前互动角色', 201);
    new MeekEduMarks().all_round = 0;
  },
};
