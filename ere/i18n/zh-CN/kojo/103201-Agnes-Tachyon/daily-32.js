/**
 * @file 爱丽速子 - 日常
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {boolean} hentai 是否有变态行为（有则是身败名裂结局，否则是扫地出门）
   * @param {boolean} has_plan 是否已选择 Plan A or B
   * @param {boolean} plan_b 是否进入 Plan B
   */
  async end_talk(tachyon, callname, hentai, has_plan, plan_b) {
    if (hentai) {
      if (
        !has_plan &&
        era.get('love:32') < 75 &&
        era.get('cflag:32:育成次数') === 0
      ) {
        await tachyon.say_and_wait(
          '拘泥于下半身吗？可笑的原因……不过下次如果还打算做出点什么的话，就来找我吧，看在那双眼睛的份上。',
        );
      } else if (era.get('cflag:32:育成回合计时') < 3 * 48) {
        if (!plan_b) {
          await tachyon.say_and_wait(
            '连通往可能性彼方的梦想都无法彻底占满你的视野吗？如果不是蠢人，那么大概就是前所未有的野心家了吧。',
          );
        } else {
          await tachyon.say_and_wait([
            '梦想破灭后的自暴自弃吗？还是，只是用来摆脱前路尽失的',
            tachyon.uma_sex_title,
            '的权宜之计？',
          ]);
        }
      } else if (era.get('love:32') >= 75) {
        await tachyon.say_and_wait([
          '抱歉抱歉，',
          callname,
          '，看来我们可能稍微玩的有点太过分了……下次再谨慎点吧。',
        ]);
      } else if (era.get('cflag:32:育成次数') > 0) {
        await tachyon.say_and_wait([
          '哦呀哦呀，看来这次玩脱了啊，',
          callname,
          '……下次，记得小心点哦。',
        ]);
      }
    } else if (
      !has_plan &&
      era.get('love:32') < 75 &&
      era.get('cflag:32:育成次数') === 0
    ) {
      await tachyon.say_and_wait(
        '无趣的豚鼠……不过下次如果还打算做出点什么的话，就来找我吧，看在那双眼睛的份上。',
      );
    } else if (era.get('cflag:32:育成回合计时') < 3 * 48) {
      if (!plan_b) {
        await tachyon.say_and_wait(
          '诱惑我踏上这条路后，却独自离去吗？极限的彼方终究是独行之路啊。',
        );
      } else {
        await tachyon.say_and_wait([
          '也算给你一个教训吧。下次记得，不要再拘泥于无用之人了……至于',
          tachyon.sex,
          '的前路，我会连你的份见证下去。',
        ]);
      }
    } else if (era.get('love:32') >= 75) {
      await tachyon.say_and_wait(
        '等到这场实验结束之后，我就去找你。在那之前，就当是我给你的一场长假吧。',
      );
    } else if (era.get('cflag:32:育成次数') > 0) {
      await tachyon.say_and_wait([
        '哦呀哦呀，看来这次玩脱了啊，',
        callname,
        '……下次，记得小心点哦。',
      ]);
    }
  },
};
