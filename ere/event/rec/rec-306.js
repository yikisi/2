/**
 * @file 㭴本理子 - 招募
 *
 * @author 无名黑奴（临时）
 */
const {
  add,
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
const GlasseEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-202');
const CoconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-203');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const riko = get_chara_talk(306),
      me = get_chara_talk(0),
      glasse = get_chara_talk(202),
      cocon = get_chara_talk(203),
      temp = get('cflag:306:招募状态');
    if (temp instanceof Array && temp[0] >= 3 && temp[1] >= 3) {
      await print_event_name('成果', riko);
      await printAndWait([
        glasse.get_colored_name(),
        ' 和 ',
        cocon.get_colored_name(),
        ' 都取得一定的成绩后，',
        riko.get_colored_name(),
        ' 找到 ',
        me.get_colored_name(),
        '，称赞 ',
        me.get_couple_title(),
        ' 取得的成果。',
      ]);
      await printAndWait([
        riko.get_colored_name(),
        ' 邀请 ',
        me.get_colored_name(),
        ' 共同组成一个团队，把',
        riko.sex,
        '的管理主义理念继续发扬下去。',
      ]);
    } else {
      await print_event_name('「成果」', riko);
      await printAndWait([
        glasse.get_colored_name(),
        ' 和 ',
        cocon.get_colored_name(),
        ' 的育成结束后，',
        riko.get_colored_name(),
        ' 找到了 ',
        me.get_colored_name(),
        '。',
      ]);
      if (get('love:306') < 75) {
        const hentai_check = [202, 203].map(
          (e) =>
            get(`love:${e}`) >= 75 ||
            get(`cflag:${e}:妊娠阶段`) !== 1 << pregnant_stage_enum.no ||
            get(`exp:${e}:生产次数`) + get(`exp:${e}:孩子数量`) > 0,
        );
        await printAndWait([
          riko.get_colored_name(),
          ' 表示不会原谅 ',
          me.get_colored_name(),
          ' 对 ',
          ...(hentai_check[0] && hentai_check[1]
            ? [glasse.sex, '们']
            : [(hentai_check[0] ? glasse : cocon).get_colored_name()]),
          ' 的所作所为。',
        ]);
        await printAndWait([
          riko.sex,
          '作为代理理事长，对 ',
          me.get_colored_name(),
          ' 做出的处罚只是一个开始。',
        ]);
        await printAndWait([
          '为保护被 ',
          me.get_colored_name(),
          ' 欺辱的担当，',
          riko.sex,
          '不惜以身犯险。',
        ]);
        println();
        sys_like_chara(306, 0, -800) && (await waitAnyKey());
        add('flag:当前声望', -100 - hentai_check.filter((e) => e).length * 100);
        set('flag:变态行为', true);
      } else {
        await printAndWait([
          riko.get_colored_name(),
          ' 表示 ',
          me.get_colored_name(),
          ' 虽然没有取得什么像样的成绩，但也证明了潜力，所以……',
        ]);
        await printAndWait([
          riko.get_colored_name(),
          ' 突然卡壳了，憋红了脸，才吞吞吐吐地邀请 ',
          me.get_colored_name(),
          ' 加入',
          riko.sex,
          '的团队，把管理主义理念继续发扬光大，同时……',
        ]);
        await printAndWait([
          '在 ',
          me.get_colored_name(),
          ' 答应以后，',
          riko.get_colored_name(),
          ' 才红着脸道别。',
        ]);
        await printAndWait([
          '在 ',
          riko.get_colored_name(),
          ' 离开训练室时，从外面传来的说话声让 ',
          me.get_colored_name(),
          ' 联想到了之前意外看到的两只熟悉的',
          glasse.get_uma_sex_title(),
          '向',
          riko.sex,
          '加油打气的场景。',
        ]);
      }
    }
    set('callname:306:-2', '㭴本理子');
    set('cflag:306:招募状态', recruit_flags.yes);
    new GlasseEduMarks().debuff = 0;
    new CoconEduMarks().debuff = 0;
    await this.recruit_end();
  }
};
