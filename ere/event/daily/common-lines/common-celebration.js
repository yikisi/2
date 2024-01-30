const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_celebration } = require('#/data/info-generator');

/** @param {number} chara_id */
module.exports = async (chara_id) => {
  const chara = get_chara_talk(chara_id),
    me = get_chara_talk(0),
    weeks = (era.get('flag:当前回合数') - 1) % 48;
  await print_event_name(get_celebration(), chara);
  switch (weeks) {
    case 0:
      await era.printAndWait([
        '迎接新的一年，',
        me.get_colored_name(),
        ' 与 ',
        chara.get_colored_name(),
        ' 在训练员室里一起好好庆祝了一番。',
      ]);
      break;
    case 5:
      await era.printAndWait([
        '今天是情人节，',
        me.get_colored_name(),
        ' 与 ',
        chara.get_colored_name(),
        ' 在训练员室里互相赠送了礼物。看到对方高兴的模样，',
        me.get_colored_name(),
        ' 也觉得很开心。',
      ]);
      break;
    case 13:
      await era.printAndWait([
        '四月的粉丝感谢祭上，',
        me.get_colored_name(),
        ' 与 ',
        chara.get_colored_name(),
        ' 一起给粉丝表演了才艺。',
      ]);
      break;
    case 47:
      await era.printAndWait([
        '圣诞节到了，',
        me.get_colored_name(),
        ' 与 ',
        chara.get_colored_name(),
        ' 一起装扮成圣诞老人庆祝，',
        me.get_colored_name(),
        '们 嬉闹到了晚上才消耗完过剩的精力。',
      ]);
  }
};
