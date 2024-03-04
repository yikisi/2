const era = require('#/era-electron');

const { sys_fix_chara_base } = require('#/system/sys-calc-base-cflag');
const { init_chara } = require('#/system/sys-init-chara');
const sys_next_week = require('#/system/sys-next-week');

const page_custom = require('#/page/new-game/page-custom');
const print_set_page = require('#/page/new-game/page-setting');

const { get_random_value } = require('#/utils/value-utils');

const { player_sex_title } = require('#/data/ero/status-const');
const { location_enum } = require('#/data/locations');
const { first_child_id } = require('#/data/other-const');
const { attr_names } = require('#/data/train-const');

/**
 * start a new game, set data
 * @return {Promise<boolean|undefined>} if true, call main.js to call homepage
 */
module.exports = async () => {
  let flag_new_game = true;
  let player_name = '';
  let flag_select_gender = false;

  era.resetData();

  let player_gender = era.get('flag:角色性别') || 3;

  while (flag_new_game) {
    await era.clear();
    era.setAlign('center');
    era.print(
      '十年寒窗终于金榜题名，\n邮箱里的那封信烫着金漆，\n闪着与你刚刚拿到的那块训练员徽章同样颜色的光芒。\n\n你用还在颤抖的手取下了上面的火漆————',
    );
    era.drawLine();
    era.print(
      '聘书\n…………\n…………\n…………\n…………\n…………\n…………\n…………兹聘请贵方担任我校训练员一职。',
    );
    era.println();
    era.print('日本中央特雷森学园理事长\n秋川弥生', {
      align: 'right',
    });
    era.print(
      `(署名处)：  ${player_name}  ${player_sex_title[player_gender] || ''}`,
      {
        align: 'left',
      },
    );
    era.drawLine();
    era.setAlign('left');

    if (player_name === '') {
      // 未输入姓名
      era.print(
        '——然后在左下角签上了自己的名字（输入名字后回车，限定10个字符以内）',
      );
      player_name = (await era.input()).toString();
      if (player_name.length > 10) {
        await era.printAndWait('太长了，请重新签名！');
        player_name = '';
      }
    } else if (!flag_select_gender) {
      // 不在输入性别子循环
      if (player_gender === 3) {
        // 未输入性别
        era.printMultiColumns([
          {
            content: '选择性别',
            type: 'button',
            accelerator: 0,
            config: { width: 6 },
          },
          {
            content: '重新签名',
            type: 'button',
            accelerator: 10,
            config: { width: 6 },
          },
          {
            content: '返回上一级',
            type: 'button',
            accelerator: 99,
            config: { width: 12, align: 'right' },
          },
        ]);
      } else {
        //均已输入
        era.printMultiColumns([
          {
            content: '提交聘书',
            type: 'button',
            accelerator: 1,
            config: { width: 6 },
          },
          {
            content: '重新签名',
            type: 'button',
            accelerator: 10,
            config: { width: 6 },
          },
          {
            content: '返回上一级',
            type: 'button',
            accelerator: 99,
            config: { width: 12, align: 'right' },
          },
        ]);
      }

      let ret = await era.input();

      switch (ret) {
        case 0:
          flag_select_gender = true; //进入输入性别子循环
          break;
        case 1:
          era.set('callname:0:-1', player_name);
          era.set('cflag:0:性别', player_gender);

          if (await print_set_page()) {
            return false;
          }

          if (await page_custom()) {
            return false;
          }

          // 0号角色初始化
          Object.values(attr_names).forEach((v) =>
            era.add(`base:0:${v}`, get_random_value(0, 50)),
          );
          sys_fix_chara_base(0);

          era.set('flag:当前回合数', 0);
          era.set('flag:当前年', 2000);
          era.set('flag:当前月', 1);
          era.set('flag:当前周', 0);
          era.set('flag:当前位置', location_enum.office);
          era.set('flag:极端粉丝', []);

          // 游戏设置

          era.set('flag:新生儿ID', first_child_id);

          require('#/event/queue').init();

          [
            201, 202, 203, 204, 205, 206, 301, 302, 303, 304, 305, 306, 308,
            340, 341, 342, 343,
          ].forEach((e) => init_chara(e));
          switch (era.get('flag:彩蛋机制')) {
            case 179:
              // 初始卡池：速茶穴
              [9, 25, 32, 36, 94].forEach((e) => init_chara(e));
              era.set('flag:当前声望', 5000);
              era.set('flag:当前马币', 0);
              break;
            default:
              // 初始卡池：内恰帝王北黑（萌战四强 - 光钻） + 露娜 + 阿船
              [60, 3, 68, 17, 7].forEach((e) => init_chara(e));
              era.set('flag:当前声望', era.get('global:初始声望增加量') + 100);
              era.set('flag:当前马币', era.get('global:初始金钱增加量') + 300);
          }
          era.add('flag:当前声望', -era.get('flag:回合声望惩罚'));

          await sys_next_week();
          return true;
        case 10:
          player_name = '';
          player_gender = era.get('flag:角色性别') || 3;
          break;
        case 99:
          flag_new_game = false;
      }
    } else {
      // 再输入性别子循环
      era.printMultiColumns([
        {
          content: '女性',
          type: 'button',
          accelerator: 0,
          config: { width: 6 },
        },
        {
          content: '男性',
          type: 'button',
          accelerator: 1,
          config: { width: 6 },
        },
        {
          content: '扶她',
          type: 'button',
          accelerator: 10,
          config: { width: 6 },
        },
      ]);

      let ret = await era.input();
      player_gender = Number(ret);
      flag_select_gender = false;
    }
  }
  return false;
};
