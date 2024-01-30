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

    era.setAlign('center');
    era.drawLine();
    era.print('ERAUMA 测试');
    era.print('无名路人');
    era.drawLine();

    era.printButton('开始新游戏', 0);
    era.printButton('加载存档', 1);
    era.printButton('自建角色', 2, { disabled: true });
    era.printButton('帮助说明', 3, { disabled: true });
    era.drawLine();

    era.setAlign('left');

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
