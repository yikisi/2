const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

module.exports = () => {
  const callname = sys_get_callname(56, 0),
    kitaru = get_chara_talk(56);
  const message = [
    async () => {
      await kitaru.say_and_wait('喔————！');
      await kitaru.say_and_wait('我会把它摆在床头的！');
    },
    async () => {
      await kitaru.say_and_wait('非常感谢！');
      await kitaru.say_and_wait(['回礼的话，', callname, ' 有什么想要的吗？']);
    },
    async () => {
      await kitaru.say_and_wait(['占卜不出来 ', callname, ' 送了什么呢！']);
      await kitaru.say_and_wait('得等到回去才能打开呀……');
    },
  ];
  if (era.get('love:56') >= 75) {
    message.push(async () => {
      await kitaru.say_and_wait(['如果 ', callname, ' 想的话！']);
      await kitaru.say_and_wait('回礼是小福本人也可以喔！');
    });
  }
  return get_random_entry(message)();
};
