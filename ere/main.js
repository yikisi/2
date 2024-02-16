const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const new_game = require('#/page/new-game/page-new-game');
const homepage = require('#/page/page-homepage');
const load_game = require('#/page/page-load-game');

module.exports = async () => {
  let flagTitle = true;
  const { title, gameCode } = era.get('gamebase');
  era.setTitle(`${title} v0.5 @ ${gameCode}`);
  sys_personal_achievement.init();

  while (flagTitle) {
    era.clear();

    era.printMultiColumns([
      { type: 'divider' },
      {
        config: { width: 6, offset: 9 },
        names: 'logo',
        type: 'image.whole',
      },
      {
        config: { align: 'center' },
        content: ['雞雞', { isDivider: true }, '无名路人'],
        type: 'text',
      },
      { type: 'divider' },
      {
        accelerator: 0,
        config: { align: 'center' },
        content: '开始新游戏',
        type: 'button',
      },
      {
        accelerator: 1,
        config: { align: 'center' },
        content: '加载存档',
        type: 'button',
      },
      {
        accelerator: 2,
        config: { align: 'center', disabled: true },
        content: '自建角色',
        type: 'button',
      },
      {
        accelerator: 3,
        config: { align: 'center', disabled: true },
        content: '帮助说明',
        type: 'button',
      },
      { type: 'divider' },
      { config: { offset: 6, width: 4 }, content: '相关链接：', type: 'text' },
      {
        config: { width: 8 },
        content: [
          {
            content: 'EraUma游戏发布页',
            url: 'https://gitgud.io/SLeader/erauma/-/releases/permalink/latest',
          },
          { isBr: true },
          {
            content: 'EraElectron引擎发布页',
            url: 'https://gitgud.io/SLeader/era-electron/-/releases/permalink/latest',
          },
        ],
        type: 'text',
      },
      {
        config: {
          align: 'center',
          color: 'red',
          fontSize: '24px',
          fontWeight: 'bold',
        },
        content:
          '\n本游戏仅供个人下载学习使用，请在下载后24小时内删除！\n禁止包括但不限于贩卖/附送/直播等在内的任何商业行为！',
        type: 'text',
      },
    ]);

    let ret = await era.input();
    switch (ret) {
      case 0:
        if (await new_game()) {
          await homepage();
        }
        break;
      case 1:
        if (await load_game()) {
          await homepage();
        }
        break;
      case 2:
        break;
      case 3:
      default:
        break;
    }
  }
};
