const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const new_game = require('#/page/new-game/page-new-game');
const homepage = require('#/page/page-homepage');
const load_game = require('#/page/page-load-game');

module.exports = async () => {
  let flagTitle = true;
  const { title, gameCode } = era.get('gamebase');
  era.setTitle(`${title} @ ${gameCode}`);
  sys_personal_achievement.init();

  while (flagTitle) {
    era.clear();

    era.printMultiColumns([
      { type: 'divider' },
      { config: { align: 'center' }, content: 'ERAUMA 测试', type: 'text' },
      { config: { align: 'center' }, content: '无名路人', type: 'text' },
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
            content: 'Discord erauma 频道',
            url: 'https://discord.gg/2Fx3ajDZpq',
          },
          { isBr: true },
          {
            content: 'Discord 中文era遊戲社群',
            url: 'https://discord.gg/xXXGfwddrw',
          },
          { isBr: true },
          {
            content: 'EraUma开源仓库地址（内源）',
            url: 'https://gitgud.io/era-games-zh/doujin/erauma',
          },
          { isBr: true },
          {
            content: 'EraUma游戏发布页',
            url: 'https://gitgud.io/era-games-zh/doujin/erauma/-/releases',
          },
          { isBr: true },
          {
            content: 'EraElectron引擎开源仓库地址（内源）',
            url: 'https://gitgud.io/era-games-zh/meta/era-electron',
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
          isParagraph: true,
        },
        content:
          '本游戏仅供个人下载学习使用，请在下载后24小时内删除！\n禁止包括但不限于贩卖/附送/直播等在内的任何商业行为！',
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
