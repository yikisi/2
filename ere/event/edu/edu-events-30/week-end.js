const era = require('#/era-electron');

const CharaTalk = require('#/utils/chara-talk');

const chara_talk = new CharaTalk(30);

const print_event_name = require('#/event/snippets/print-event-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { location_enum } = require('#/data/locations');
const { gacha } = require('#/utils/list-utils');
const { attr_enum } = require('#/data/train-const');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const RiceEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-30');
const your_name = era.get('callname:0:-2');

module.exports = async function () {
  const chara52_talk = get_chara_talk(52),
    me = get_chara_talk(0),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:30:育成回合计时'),
    event_marks = new RiceEduMarks();
  if (event_marks.beginning === 1) {
    event_marks.beginning++;
    await print_event_name(`育成开始`, chara_talk);
    era.drawLine({ content: '训练场' });
    await chara_talk.say_and_wait(`离训练的时间还有一点点…`);
    await chara_talk.say_and_wait(`…稍微跑一下吧。`);
    await chara_talk.say_and_wait(
      `哎嘿嘿…… ${chara_talk.name}选手，在欢呼声中，走进了赛场——`,
    );
    await era.printAndWait(
      `赛${chara_talk.get_uma_sex_title()}A：「哇！！！」`,
    );
    await chara_talk.say_and_wait(`哎！？`);
    await era.printAndWait(
      `实力强劲的${chara_talk.get_uma_sex_title()}A：「哈啊……哈啊……！」`,
    );
    await era.printAndWait(
      `赛${chara_talk.get_uma_sex_title()}A：「又刷新了记录！」`,
    );
    await era.printAndWait(`这下已经能确定是来年的经典赛主役了呢！`);
    await era.printAndWait(
      `赛${chara_talk.get_uma_sex_title()}B：「是啊…跑得真是太棒了。呐，那个，请一定……」`,
    );
    await era.printAndWait(
      `实力强劲的${chara_talk.get_uma_sex_title()}A：「……还有预定的安排等待执行。失礼了。」`,
    );
    await era.printAndWait(
      `实力强劲的${chara_talk.get_uma_sex_title()}A跑开了。`,
    );
    await era.printAndWait(
      `赛${chara_talk.get_uma_sex_title()}们：「啊~~~~等等~~~！」`,
    );
    await chara_talk.say_and_wait(`……好厉害。赛场边上也挤满了来旁观的人……`);
    await chara_talk.say_and_wait(
      `…………现在， ${chara_talk.name}去那里跑的话也只会碍事……的吧。`,
    );
    await era.printAndWait(
      `${your_name}和 ${chara_talk.name}一起向闪耀系列发起的挑战开始了！`,
    );
  } else if (edu_weeks === 47 + 32) {
    if (era.get('flag:当前位置') !== location_enum.beach) {
      await print_event_name('夏季合宿结束', chara_talk);
      await era.printAndWait(
        `合宿的最后一天，在 ${chara_talk.name}的希望下，直到最后为止都在进行着训练。`,
      );
      await chara_talk.say_and_wait(`哈啊…哈啊…抱歉，我来晚了。`);
      await chara52_talk.say_and_wait(
        `快点快点， ${chara_talk.name}酱！巴士和大家都在等着哦！`,
      );
      await chara_talk.say_and_wait(`呜…呜！马上就来！`);
      await chara_talk.say_and_wait(`太好了，赶上了。`);
      await me.say_and_wait(`多亏了大家的等待呢。`);
      await chara_talk.say_and_wait(`嗯！不和大家说声谢谢的话——`);
      const changed_attrs = {};
      gacha(Object.values(attr_enum), 3).forEach(
        (e) => (changed_attrs[e] = true),
      );
      const change_list = new Array(5).fill(0);
      gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 5));
      get_attr_and_print_in_event(30, change_list, 0) &&
        (await era.waitAnyKey());
    }
  } else if (edu_weeks === 95 + 32) {
    if (era.get('flag:当前位置') !== location_enum.beach) {
      await print_event_name('夏季合宿结束', chara_talk);
      await era.printAndWait(
        `夏合宿的最后一天，${your_name}坐在长椅上等待着准备回家的 ${chara_talk.name}的时候……`,
      );
      await chara_talk.say_and_wait(
        `啊啊啊啊啊~${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！`,
      );
      await chara_talk.say_and_wait(`让${your_name}久等了，真是不好意思……！`);
      await chara_talk.say_and_wait(`呼……去帮了很多忙，结果这么晚才回来。`);
      await me.say_and_wait(`去帮忙？`);
      await chara_talk.say_and_wait(`嗯，也受到了这里合宿所的很多照顾吧？`);
      await chara_talk.say_and_wait(
        ` ${chara_talk.name}就去给花浇水啦…重新粉刷长椅的油漆啦——`,
      );
      await me.say_and_wait(`长椅的油漆？`);
      await chara_talk.say_and_wait(
        `嗯！就是，${
          me.sex_code - 1 ? '姐姐' : '哥哥'
        }大人现在正在休息的长椅——`,
      );
      await me.say_and_wait(`……`);
      await chara_talk.say_and_wait(
        `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人？`,
      );
      await era.printAndWait(`啪啦啪啦！！`);
      await era.printAndWait(
        `虽然${your_name}慌慌张张地站了起来，但已经沾满了黏糊糊的油漆。`,
      );
      await chara_talk.say_and_wait(
        `对、对不起！都是因为 ${chara_talk.name}没写上提醒`,
      );
      await chara_talk.say_and_wait(
        `哇啊啊啊……怎么办、${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。呜啊~~~~`,
      );
      await me.say_and_wait(`重新刷一遍油漆吧。`);
      await chara_talk.say_and_wait(`呜……真的对不起。`);
      await chara_talk.say_and_wait(`还要去和管理人道歉才行啊。`);
      await chara_talk.say_and_wait(`还有，也要去借油漆。`);
      await era.printAndWait(`和 ${chara_talk.name}一起给管理人员帮了忙。`);
      const changed_attrs = {};
      gacha(Object.values(attr_enum), 3).forEach(
        (e) => (changed_attrs[e] = true),
      );
      const change_list = new Array(5).fill(0);
      gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 5));
      get_attr_and_print_in_event(30, change_list, 0) &&
        (await era.waitAnyKey());
    }
  } else {
    throw new Error('unsupported');
  }
};
