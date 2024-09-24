const { add_event, cb_enum } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const FukuEventMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');

module.exports = async () => {
  const kitaru = get_chara_talk(56),
    message = [],
    edu_marks = new FukuEventMarks();
  message.push(
    () => kitaru.say_and_wait('通过写作来心想事成吗？真是有意思的设定！'),
    () => kitaru.say_and_wait('亮银色的大气……我的梦里好像也会有类似的情景呢！'),
    () => kitaru.say_and_wait('要是我的灵力也能做到念动移物就好了！'),
    () => kitaru.say_and_wait('……意志正在受到考验……唔，正是靠运气的时刻呢！'),
    () =>
      kitaru.say_and_wait(
        '白蛇神社啊……位置比我们家的神社还偏僻呢，怎么会有参拜客呢！',
      ),
    () => kitaru.say_and_wait('命运COOP，看来是同行呢！'),
  );

  if (edu_marks.game_times >= 5) {
    message.push(() =>
      kitaru.say_and_wait('呼呼……用占卜来读指令什么的，果然特别好用呢！'),
    );
  }
  edu_marks.game_times < 3 && edu_marks.game_times++;
  if (edu_marks.game_times === 3) {
    edu_marks.game_times = 4;
    add_event(
      event_hooks.office_game,
      new EventObject(56, cb_enum.edu).set_arg('fortune_game_duel_1'),
    );
  }
  await get_random_entry(message)();
};
