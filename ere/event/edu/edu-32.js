/**
 * @file 爱丽速子 - 育成
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 */
const era = require('#/era-electron');

const { get_custom_check } = require('#/event/check/check-factory');
const CustomizedEdu = require('#/event/edu/edu-common');
const tachyon_crazy_fan_end = require('#/event/edu/edu-events-32/crazy-fan-end');
const tachyon_out_shopping = require('#/event/edu/edu-events-32/out-shopping');
const tachyon_out_start = require('#/event/edu/edu-events-32/out-start');
const tachyon_train = require('#/event/edu/edu-events-32/train');
const tachyon_train_fail = require('#/event/edu/edu-events-32/train-fail');
const tachyon_train_success = require('#/event/edu/edu-events-32/train-success');
const print_event_name = require('#/event/snippets/print-event-name');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const { attr_enum } = require('#/data/train-const');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} */
const week_start_handlers = {};

[
  require('#/event/edu/edu-events-32/week-start-01'),
  require('#/event/edu/edu-events-32/week-start-02'),
  require('#/event/edu/edu-events-32/week-start-03'),
  require('#/event/edu/edu-events-32/week-start-04'),
  require('#/event/edu/edu-events-32/week-start-05'),
  require('#/event/edu/edu-events-32/week-start-06'),
  require('#/event/edu/edu-events-32/week-start-07'),
  require('#/event/edu/edu-events-32/week-start-08'),
  require('#/event/edu/edu-events-32/week-start-09'),
  require('#/event/edu/edu-events-32/week-start-10'),
  require('#/event/edu/edu-events-32/week-start-11'),
  require('#/event/edu/edu-events-32/week-start-12'),
].forEach((f) => f(week_start_handlers));

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},TachyonEduMarks,number,number,EventObject):Promise>} */
const week_end_handlers = {};

[
  require('#/event/edu/edu-events-32/week-end-1'),
  require('#/event/edu/edu-events-32/week-end-2'),
  require('#/event/edu/edu-events-32/week-end-3'),
  require('#/event/edu/edu-events-32/week-end-4'),
].forEach((f) => f(week_end_handlers));

/** @type {Record<string,function(CharaTalk,CharaTalk,string,TachyonEduMarks,number,number):Promise<boolean|void>>} */
const race_start_handlers = {};

[
  require('#/event/edu/edu-events-32/race-start-1'),
  require('#/event/edu/edu-events-32/race-start-2'),
].forEach((f) => f(race_start_handlers));

/** @type {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams,TachyonEduMarks,number,number):Promise<boolean|void>>} */
const race_end_handlers = {};

[
  require('#/event/edu/edu-events-32/race-end-1'),
  require('#/event/edu/edu-events-32/race-end-2'),
  require('#/event/edu/edu-events-32/race-end-3'),
].forEach((f) => f(race_end_handlers));

module.exports = class extends CustomizedEdu {
  async crazy_fan_end() {
    await tachyon_crazy_fan_end();
  }

  async out_shopping(tachyon, me, callname, hook, extra_flag, event_object) {
    return await tachyon_out_shopping(
      tachyon,
      me,
      callname,
      hook,
      event_object,
    );
  }

  async out_start(tachyon, me, callname, hook, extra_flag, event_object) {
    return await tachyon_out_start(tachyon, me, callname, hook, event_object);
  }

  async race_end(tachyon, me, callname, hook, extra_flag) {
    const edu_marks = new TachyonEduMarks();
    if (
      !race_end_handlers[extra_flag.race] ||
      (await race_end_handlers[extra_flag.race](
        tachyon,
        me,
        callname,
        extra_flag,
        edu_marks,
      ))
    ) {
      if (extra_flag.rank !== 1) {
        return await super.race_end(tachyon, me, callname, hook, extra_flag);
      }
      await print_event_name('竞赛胜利', tachyon);
      era.printButton('「跑的太棒了！」', 1);
      era.printButton('「还有改良的空间」', 2);
      const ret = await era.input();
      if (
        era.get('love:32') >= 75 &&
        tachyon.sex_code - 1 &&
        me.sex_code > 0 &&
        get_custom_check(32).is_want_make_love() &&
        !edu_marks.race_sex
      ) {
        edu_marks.race_sex++;
        await era.printAndWait('砰');
        era.println();
        await era.printAndWait([
          '没等 ',
          me.get_colored_name(),
          ' 把称赞或勉励的话说出，',
          tachyon.get_colored_name(),
          ' 便直接逼了上来，将 ',
          me.get_colored_name(),
          ' 壁咚在墙上',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '哈啊……哈啊……抱歉啊，',
          callname,
          '……一不小心跑的有点过度兴奋了……身体稍微借我用一下',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '右手抵住墙壁，不让 ',
          me.get_colored_name(),
          ' 有逃走的机会，同时左膝抬起，顶在 ',
          me.get_colored_name(),
          ' 的胯下',
        ]);
        era.println();
        await tachyon.say_and_wait('没事的……没事……就一下……一下下就好……');
        era.println();
        await era.printAndWait([
          '不知究竟能够说服谁的话语不断流出，确认 ',
          me.get_colored_name(),
          ' 没有逃跑的想法后，',
          tachyon.sex,
          '缓缓蹲下身子，同时用颤抖的双手将 ',
          me.get_colored_name(),
          ' 的裤子脱下',
        ]);
        era.println();
        await era.printAndWait('噗咚');
        await era.printAndWait([
          '闷了一天的蒸气，与肉棒一同弹向了 ',
          tachyon.get_colored_name(),
          ' 的脸庞',
        ]);
        await era.printAndWait(
          '原来狂乱的双眼，顿时发直，只见得到眼前微微颤抖著的生殖器',
        );
        await era.printAndWait(
          '像见到狗尾巴草的小猫一般，不由得追逐起摇晃的肉棒',
        );
        await era.printAndWait(
          '但因比赛的刺激导致发情的身体在闻到那酝酿气味的瞬间便已经瘫软，导致能够跟著摇晃的也就只有那不停嗅著肉棒腥臭的鼻子了',
        );
        era.println();
        if (era.get('relation:32:0') <= 0) {
          await era.printAndWait([
            '身体提不起劲的 ',
            tachyon.get_colored_name(),
            '，只能勉强发出恳求的声音',
          ]);
          await era.printAndWait('对情感上而言无感，甚至厌恶的这个人');
          await era.printAndWait('对身体上渴求，希望被其填满的这个人');
          await era.printAndWait('最终，身体的渴求超越了情感的淡漠');
          era.println();
          await era.printAndWait('幸好，对方在坏的意义上并没有辜负自己');
          await era.printAndWait([
            '果然，是个会肆无忌惮对负责',
            tachyon.uma_sex_title,
            '出手的人渣',
          ]);
          era.println();
          await era.printAndWait([
            '被向前一步的训练员用肉棒填满饥渴到流出口水的小嘴的 ',
            tachyon.get_colored_name(),
            ' 幸福的这么想著',
          ]);
        }
        era.println();
        await era.printAndWait([
          '看见',
          tachyon.sex,
          '幸福表情的 ',
          me.get_colored_name(),
          ' 倒也想继续下去……',
        ]);
        era.println();
        era.printButton('「……晚点要Winning Live了」', 1);
        await era.input();
        await era.printAndWait([
          tachyon.sex,
          '怒目看著 ',
          me.get_colored_name(),
          '，但 ',
          me.get_colored_name(),
          ' 依然无情的将肉棒从',
          tachyon.sex,
          '的口中抽出',
        ]);
        await era.printAndWait([
          '为了先前',
          tachyon.sex,
          '的计划，最起码在赛场的这段期间，是不能发生任何有损于 ',
          tachyon.get_colored_name(),
          ' 名声的事情的',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '在理性与感性的挣扎下，终于还是控制住了自己的情慾，头也不回的朝著休息室走去',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 这才松了口气，没想到比赛带来的刺激竟然不只是精神上的健全刺激，就连那方面的刺激也……',
        ]);
        await era.printAndWait([
          '难道说，今后的比赛都得发生如今天一般的事情吗？',
          me.get_colored_name(),
          ' 不由得打了个冷颤',
        ]);
      } else if (era.get('relation:32:0') > 225) {
        if (ret === 1) {
          await tachyon.say_and_wait('是吧是吧？呵呵，这就是超越光速的跑法啊');
        } else {
          await tachyon.say_and_wait(
            Math.random() < 0.5
              ? '啧……无法反驳，但可以再多称赞一点的吧？都这么努力赢下比赛了'
              : [
                  '好过分啊，',
                  callname,
                  '。爱马赢了比赛还装成那副模样给谁看，快点快点，多夸夸我啊，快～～一～～点！',
                ],
          );
        }
      } else if (ret === 1) {
        await tachyon.say_and_wait([
          '不过是实验的验算而已就高兴成这副模样，',
          callname,
          ' 你可真是天真啊',
        ]);
      } else {
        await tachyon.say_and_wait(
          Math.random() < 0.5
            ? '哼……我知道，不用你多嘴'
            : '很好，有新的发现那么这次的实验就不至于白费了',
        );
      }
    }
  }

  async race_start(tachyon, me, callname, hook, extra_flag) {
    if (
      !race_start_handlers[extra_flag.race] ||
      (await race_start_handlers[extra_flag.race](
        tachyon,
        me,
        callname,
        new TachyonEduMarks(),
        era.get('relation:32:0'),
        era.get('love:32'),
      ))
    ) {
      return await super.race_start(tachyon, me, callname, hook, extra_flag);
    }
  }

  async train(attr) {
    if (attr === attr_enum.intelligence) {
      return await super.train(attr);
    }
    return await tachyon_train();
  }

  async train_fail(tachyon, me, callname, hook, extra_flag) {
    await tachyon_train_fail.call(
      this,
      tachyon,
      me,
      callname,
      hook,
      extra_flag.fumble,
      extra_flag.train,
    );
  }

  async train_success(tachyon, me, callname, hook, extra_flag) {
    await tachyon_train_success(
      tachyon,
      me,
      callname,
      hook,
      extra_flag.stamina_ratio,
    );
  }

  async week_end(tachyon, me, callname, hook, extra_flag, event_object) {
    if (week_end_handlers[event_object.arg]) {
      const flags = { wait_flag: false };
      const ret = await week_end_handlers[event_object.arg](
        tachyon,
        me,
        callname,
        flags,
        new TachyonEduMarks(),
        era.get('relation:32:0'),
        era.get('love:32'),
        event_object,
      );
      flags.wait_flag && (await era.waitAnyKey());
      return ret;
    }
  }

  async week_start(tachyon, me, callname, hook, extra_flag, event_object) {
    if (!week_start_handlers[event_object.arg]) {
      return super.week_start(
        tachyon,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    const flags = { wait_flag: false };
    const ret = await week_start_handlers[event_object.arg].call(
      this,
      tachyon,
      me,
      callname,
      flags,
      era.get('relation:32:0'),
      era.get('love:32'),
      new TachyonEduMarks(),
      event_object,
    );
    flags.wait_flag && (await era.waitAnyKey());
    return ret;
  }
};
