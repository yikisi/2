const { get, printAndWait, set } = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * 乙名史悦子 - 招募
 *
 * @author 无名黑奴（临时）
 */
module.exports = {
  override: true,
  /** @param {number} stage */
  async run(stage) {
    const etsuko = get_chara_talk(303),
      me = get_chara_talk(0);
    if (stage === event_hooks.week_start) {
      await print_event_name('专访记者', etsuko);
      await printAndWait([
        me.get_colored_name(),
        ' 意外地在学园门口遇到了 ',
        etsuko.get_colored_name(),
        '。',
      ]);
      await printAndWait([
        etsuko.get_colored_name(),
        ' 打了个招呼，于是 ',
        me.get_colored_name(),
        ' 向',
        etsuko.sex,
        '走去。',
      ]);
      await printAndWait([
        etsuko.get_colored_name(),
        ' 表示，因为 ',
        me.get_colored_name(),
        ' 的活跃，现在 ',
        etsuko.get_colored_name(),
        ' 已经成为 ',
        me.get_colored_name(),
        ' 的队伍的专访记者了。',
      ]);
      await printAndWait([
        '当然，',
        etsuko.sex,
        '也可以帮 ',
        me.get_colored_name(),
        ' 多宣扬荣耀，尽量消除负面影响，只要 ',
        me.get_colored_name(),
        ' 给更多许可。',
      ]);
      await printAndWait([
        '这么说的时候，',
        etsuko.get_colored_name(),
        ' 露出了大大的笑容。',
      ]);
      await me.say_and_wait(
        ['应该可以在访客接待室找到', etsuko.sex, '吧……'],
        true,
      );
    } else {
      await printAndWait([
        etsuko.get_colored_name(),
        ' 露出笑容，承诺从今以后会帮 ',
        me.get_colored_name(),
        ' 宣扬好事，降低恶名影响。',
      ]);
      if (get('love:303') >= 75) {
        await printAndWait([
          '作为交换……',
          etsuko.sex,
          '轻轻地抚摸了一下 ',
          me.get_colored_name(),
          ' 的手，眨了眨眼睛。',
        ]);
      } else {
        await printAndWait([
          '作为交换……',
          etsuko.sex,
          '要求能够在保证不打扰训练活动的情况下近距离接触 ',
          me.get_colored_name(),
          ' 的队伍。',
        ]);
        if (get('love:303') >= 50) {
          await printAndWait([
            '在握手成交之后，',
            etsuko.get_colored_name(),
            ' 慢慢摩挲着自己的手掌，若有所思。',
          ]);
        } else {
          await printAndWait([
            '在握手成交之后，',
            etsuko.get_colored_name(),
            ' 露出了计划通的狡黠笑容。',
          ]);
        }
      }
      set('cflag:303:招募状态', recruit_flags.yes);
      etsuko.name = set('callname:303:-2', '乙名史悦子');
      await printAndWait([
        { isBr: true },
        etsuko.get_colored_name(),
        ' 加入了队伍！',
      ]);
    }
  },
};
