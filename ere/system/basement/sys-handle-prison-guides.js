const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { i18n } = require('#/i18n/selector');

async function sys_handle_prison_guides() {
  const you = get_chara_talk(0);
  let flag = true;
  const action_list = [
    {
      h: () => i18n().timon.base_guides.unlock(you),
      n: i18n().ui_bs_unlock,
    },
    {
      h: () => i18n().timon.base_guides.relax(you),
      n: i18n().ui_bs_relax,
    },
    {
      h: () => i18n().timon.base_guides.sleep(you),
      n: i18n().ui_bs_sleep,
    },
    {
      h: () => i18n().timon.base_guides.eat(you),
      n: i18n().ui_bs_eat,
    },
    {
      h: () => i18n().timon.base_guides.flatter(you),
      n: i18n().ui_bs_flatter,
    },
    {
      h: () => i18n().timon.base_guides.sex(you),
      n: i18n().ui_bs_sex,
    },
    {
      h: () => i18n().timon.base_guides.strike(you),
      n: i18n().ui_bs_strike,
    },
    {
      h: () => i18n().timon.base_guides.battle(you),
      n: i18n().ui_bs_battle,
    },
    {
      h: () => i18n().timon.base_guides.release(you),
      n: i18n().ui_bs_release,
    },
  ];
  const lines = era.getLineCount();
  while (flag) {
    era.printMultiColumns([
      { type: 'divider' },
      {
        content: i18n().timon.base_guides.get_intro(you),
        type: 'text',
      },
      ...action_list.map((e, i) => ({
        accelerator: i + 1,
        config: { width: 6 },
        content: e.n,
        type: 'button',
      })),
      { content: [], type: 'text' },
      {
        accelerator: 99,
        config: { width: 6 },
        content: i18n().ui_back,
        type: 'button',
      },
    ]);
    const ret = await era.input({ hideInput: true });
    if (ret === 99) {
      flag = false;
    } else {
      era.drawLine({ content: action_list[ret - 1].n });
      await action_list[ret - 1].h();
    }
    if (flag) {
      await era.clear(era.getLineCount() - lines);
    }
  }
}

module.exports = sys_handle_prison_guides;
