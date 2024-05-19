const {
  add,
  get,
  input,
  printAndWait,
  printMultiColumns,
  waitAnyKey,
} = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { money_color } = require('#/data/color-const');
const event_hooks = require('#/data/event/event-hooks');

/**
 * @param {number} god_id
 */
module.exports = (god_id) => {
  const handlers = {};

  handlers[event_hooks.borrow_money] = async () => {
    const god = get_chara_talk(god_id),
      me = get_chara_talk(0),
      fame = get('flag:当前声望');
    if (get('flag:当前声望') < 50) {
      await printAndWait('声望不足');
      return;
    }
    printMultiColumns([
      { content: '想要多少马币？', type: 'text' },
      ...[
        { content: '400 马币（50 声望）', type: 'button' },
        { content: '800 马币（100 声望）', type: 'button' },
        { content: '1200 马币（150 声望）', type: 'button' },
        { content: '1600 马币（200 声望）', type: 'button' },
      ].map((e, i) => {
        e.accelerator = i + 1;
        e.config = { disabled: fame < 50 * (i + 1), width: 6 };
        return e;
      }),
      { accelerator: 99, content: '还是算了', type: 'button' },
    ]);
    const ret = await input();
    if (ret === 99) {
      await printAndWait([
        me.get_colored_name(),
        ' 放弃了向 ',
        god.get_colored_name(),
        ' 祈祷马币……',
      ]);
    } else {
      await printAndWait([
        me.get_colored_name(),
        ' 收到了特雷森补发 ',
        { color: money_color, content: (250 * ret).toLocaleString() },
        ' 马币额外补贴的通知……但是似乎被那条消息鄙视了……',
      ]);
      add('flag:当前声望', -50 * ret);
      add('flag:当前马币', 400 * ret);
      sys_like_chara(god_id, 0, 25 * ret) && (await waitAnyKey());
    }
  };

  return {
    async run(hook) {
      if (!handlers[hook.hook]) {
        throw new Error();
      }
      return await handlers[hook.hook]();
    },
  };
};
