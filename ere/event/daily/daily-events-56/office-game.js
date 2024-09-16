const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const FukuEventMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');

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

  if (edu_marks.fortune_game_duel >= 1) {
    message.push(() =>
      kitaru.say_and_wait('呼呼……用占卜来读指令什么的，果然特别好用呢！'),
    );
  }
  edu_marks.GAME_TIMES++;
  await get_random_entry(message)();
};
