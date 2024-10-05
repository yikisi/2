/**
 * @file 桐生院葵 - 招募
 *
 * @author 无名黑奴（临时）
 */
const {
  get,
  printAndWait,
  println,
  set,
  waitAnyKey,
} = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedRecruit = require('#/event/rec/rec-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const MeekEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-201');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');

module.exports = class extends CustomizedRecruit {
  // eslint-disable-next-line no-unused-vars
  async recruit(stage, event_object) {
    const aoi = get_chara_talk(304),
      me = get_chara_talk(0),
      meek = get_chara_talk(201);
    if (
      new RaceHistory(201)
        .get_values()
        .findIndex(
          (e) =>
            race_infos[e.race].race_class === class_enum.G1 && e.rank === 1,
        ) !== -1
    ) {
      await print_event_name('成果', aoi);
      await printAndWait([
        meek.get_colored_name(),
        ' 取得G1胜利之后，',
        aoi.get_colored_name(),
        ' 找到 ',
        me.get_colored_name(),
        '，表示 ',
        me.get_colored_name(),
        ' 取得了极佳的成果。',
      ]);
      await printAndWait([
        aoi.sex,
        '希望能同 ',
        me.get_colored_name(),
        ' 继续努力下去，不仅是 ',
        meek.get_colored_name(),
        '，也帮助更多的',
        meek.get_uma_sex_title(),
        '赢得胜利，实现愿望。',
      ]);
    } else {
      await print_event_name('「成果」', aoi);
      await printAndWait([
        meek.get_colored_name(),
        ' 的育成结束后，',
        aoi.get_colored_name(),
        ' 找到了 ',
        me.get_colored_name(),
        '。',
      ]);
      if (
        get('cflag:201:妊娠阶段') !== 1 << pregnant_stage_enum.no ||
        get('exp:201:生产次数') + get('exp:201:孩子数量') > 0
      ) {
        await printAndWait([
          aoi.get_colored_name(),
          ' 对 ',
          me.get_colored_name(),
          ' 玷污 ',
          meek.get_colored_name(),
          ' 的行为极度愤怒。',
        ]);
        await printAndWait([
          '但事已至此，为了 ',
          meek.get_colored_name(),
          '，',
          aoi.sex,
          '也只能接受事实。',
        ]);
        await printAndWait([
          '但是',
          aoi.sex,
          '绝对不会原谅 ',
          me.get_colored_name(),
          '。',
        ]);
        println();
        sys_like_chara(304, 0, -800) && (await waitAnyKey());
      } else if (get('love:201') >= 75) {
        await printAndWait([
          aoi.sex,
          '谴责了欺骗',
          meek.get_teen_sex_title(),
          '感情的 ',
          me.get_colored_name(),
          '。',
        ]);
        await printAndWait([
          '但既然 ',
          meek.get_colored_name(),
          ' 想和 ',
          me.get_colored_name(),
          ' 继续在一起，',
          aoi.sex,
          '也无话可说。',
        ]);
        await printAndWait([
          aoi.sex,
          '会继续看着 ',
          me.get_colored_name(),
          '，以防 ',
          me.get_colored_name(),
          ' 做出对不起 ',
          meek.get_colored_name(),
          ' 的事情来。',
        ]);
      } else {
        await printAndWait([
          aoi.get_colored_name(),
          ' 一本正经地表示虽然 ',
          me.get_colored_name(),
          ' 没有取得什么像样的成绩，但这三年也磨练了 ',
          me.get_colored_name(),
          '。',
        ]);
        await printAndWait([
          '所以，',
          aoi.get_colored_name(),
          ' 会继续帮助 ',
          me.get_colored_name(),
          '，直到 ',
          me.get_colored_name(),
          ' 成为一个称职训练员的一天。',
        ]);
        await printAndWait([
          '话毕，',
          aoi.get_colored_name(),
          ' 趁四下无人，在 ',
          me.get_colored_name(),
          ' 的脸颊上留下了一枚香吻。',
        ]);
      }
    }
    set('callname:304:-2', '桐生院葵');
    set('cflag:304:招募状态', recruit_flags.yes);
    new MeekEduMarks().debuff = 0;
    await this.recruit_end();
  }
};
