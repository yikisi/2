const era = require('#/era-electron');

const { sys_fix_chara_base } = require('#/system/sys-calc-base-cflag');
const { init_chara } = require('#/system/sys-init-chara');
const sys_next_week = require('#/system/sys-next-week');

const page_custom = require('#/page/new-game/page-custom');
const print_set_page = require('#/page/new-game/page-setting');

const basement_queue = require('#/event/basement-queue');
const { get_custom_check } = require('#/event/check/check-factory');
const GameGuides = require('#/event/game-guides');
const event_queue = require('#/event/queue');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');

const CharaTalk = require('#/utils/chara-talk');
const { get_random_value } = require('#/utils/value-utils');

const CharaAvailableSkills = require('#/data/chara-available-skills');
const { chara_colors, get_chara_color } = require('#/data/chara-colors');
const CharaTitles = require('#/data/chara-titles');
const {
  player_sex_title,
  pregnant_stage_enum,
} = require('#/data/ero/status-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const MeekEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-201');
const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');
const TasteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-302');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const { yes } = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { first_child_id } = require('#/data/other-const');
const { chara_skill_dict } = require('#/data/race/skill/skill-const');
const { attr_names } = require('#/data/train-const');

/**
 * start a new game, set data
 * @param {number} src_chara
 * @return {Promise<boolean|undefined>} if true, call main.js to call homepage
 */
module.exports = async (src_chara) => {
  let flag_new_game = true;
  let player_name = '';

  era.resetData();
  if (src_chara > 0) {
    chara_colors[0] = get_chara_color(src_chara);
    init_chara(0, src_chara);
    player_name = era.get('callname:0:-1');
    new CharaTitles(0).push(
      ...get_custom_check(src_chara)
        .get_personal_titles()
        .map((e) => ({ c: chara_colors[0], n: e })),
    );
    (chara_skill_dict[src_chara] || []).forEach((s) =>
      get_skills_and_print_in_event(0, [s], undefined, false),
    );
    new CharaAvailableSkills(0).clear();
    era.set('callname:0:-2', '你');
    era.set('cstr:0:决胜服', 0);
  }
  const my_marks = new MyEduMarks();

  let player_gender = 3;

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
    } else if (player_gender === 3) {
      // 再输入性别子循环
      era.printMultiColumns([
        { type: 'text', content: '（请输入性别）' },
        {
          accelerator: 0,
          config: { width: 4 },
          content: '女性',
          type: 'button',
        },
        {
          accelerator: 1,
          config: { width: 4 },
          content: '男性',
          type: 'button',
        },
        {
          accelerator: 10,
          config: { width: 4 },
          content: '扶她',
          type: 'button',
        },
        {
          accelerator: 98,
          config: { width: 4 },
          content: '重新签名',
          type: 'button',
        },
        {
          accelerator: 99,
          config: { align: 'right', width: 8 },
          content: '返回上一级',
          type: 'button',
        },
      ]);
      const ret = await era.input();
      switch (ret) {
        case 0:
        case 1:
        case 10:
          player_gender = ret;
          break;
        case 98:
          player_name = '';
          break;
        case 99:
          flag_new_game = false;
      }
    } else {
      //均已输入
      era.printMultiColumns([
        {
          accelerator: 1,
          config: { width: 6 },
          content: '提交聘书',
          type: 'button',
        },
        {
          accelerator: 97,
          config: { disabled: src_chara > 0, width: 6 },
          content: '重新签名',
          type: 'button',
        },
        {
          accelerator: 98,
          config: { width: 6 },
          content: '重新选择性别',
          type: 'button',
        },
        {
          accelerator: 99,
          config: { align: 'right', width: 6 },
          content: '返回上一级',
          type: 'button',
        },
      ]);

      switch (await era.input()) {
        case 1:
          era.set('callname:0:-1', player_name);
          era.set('cflag:0:性别', player_gender);

          if (await print_set_page()) {
            return false;
          }

          if (era.get('flag:新手教学')) {
            era.set('flag:新手教学', {});
            new GameGuides().init();
          }

          era.set('abl:0:速度训练等级', 1);
          era.set('abl:0:耐力训练等级', 1);
          era.set('abl:0:力量训练等级', 1);
          era.set('abl:0:根性训练等级', 1);
          era.set('abl:0:智力训练等级', 1);

          era.set('base:0:性欲', 0);
          era.set('base:0:压力', 0);
          era.set('base:0:体重偏差', 0);
          era.set('base:0:药物残留', 0);

          era.set('cflag:0:阴道尺寸', era.get('cflag:0:性别') - 1 ? 1 : 0);

          if (era.get('cflag:0:性别')) {
            era.set('cflag:0:阴茎尺寸', get_random_value(1, 5));
          }

          era.set('cflag:0:招募状态', yes);
          era.set('cflag:0:父方角色', -1);
          era.set('cflag:0:母方角色', -1);
          era.set('cflag:0:妊娠阶段', 1 << pregnant_stage_enum.no);

          era.set('talent:0:童贞', 1);
          era.set('talent:0:处女', 1);
          if (src_chara > 0) {
            CharaTalk.me = new CharaTalk(0);
            init_chara(src_chara);
            era.set(`cflag:${src_chara}:随机招募`, 0);
          } else {
            chara_colors[0] = '#ffffff';
            if (await page_custom()) {
              return false;
            }
          }

          // 0号角色初始化
          attr_names.forEach((v) =>
            era.add(`base:0:${v}`, get_random_value(0, 50)),
          );
          sys_fix_chara_base(0);

          era.set('flag:当前回合数', 0);
          era.set('flag:当前年', 2000);
          era.set('flag:当前月', 1);
          era.set('flag:当前周', 0);
          era.set('flag:当前位置', location_enum.office);
          era.set('cflag:0:育成回合计时', 4800);

          // 游戏设置
          era.set('flag:新生儿ID', first_child_id);

          event_queue.init();
          basement_queue.init();

          [
            201, 202, 203, 204, 205, 206, 207, 301, 302, 303, 304, 305, 306,
            308, 340, 341, 342, 343, 344, 345, 346, 347, 348,
          ].forEach((e) => init_chara(e));
          switch (era.get('flag:彩蛋机制')) {
            case 179:
              // 初始卡池：富赤速茶宫穴
              [5, 9, 25, 32, 36, 94].forEach(
                (e) => src_chara !== e && init_chara(e),
              );
              era.set('flag:当前声望', 5000);
              era.set('flag:当前马币', 0);
              break;
            default:
              // 初始卡池：内恰帝王北黑（萌战四强 - 光钻） + 露娜 + 阿船
              [60, 3, 68, 17, 7].forEach(
                (e) => src_chara !== e && init_chara(e),
              );
              era.set('flag:当前声望', era.get('global:初始声望增加量') + 100);
              era.set('flag:当前马币', era.get('global:初始金钱增加量') + 300);
          }
          era.add('flag:当前声望', -era.get('flag:回合声望惩罚'));

          await sys_next_week();
          my_marks.god = get_random_value(13, 40);
          if (src_chara !== 32) {
            new TachyonLifeMarks().drug_notice = get_random_value(24, 48);
            my_marks.strange_day = get_random_value(24, 48);
            if (src_chara !== 25) {
              my_marks.experiment = get_random_value(1, 24);
            }
          }
          if (src_chara !== 20) {
            my_marks.fishing = 1;
          }
          my_marks.custom = get_random_value(1, 12);
          my_marks.trainer_race = get_random_value(13, 36);
          my_marks.work_over = my_marks.sick = 24;
          my_marks.kamen_rider = 1;
          new MeekEduMarks().all_round = get_random_value(5, 12);
          if (src_chara !== 10) {
            new TokinoLifeMarks().shadow = get_random_value(5, 12);
          }
          new TasteLifeMarks().annoyance = get_random_value(13, 20);

          era.set('flag:随机种子', get_random_value(0, 233280 - 1));
          era.set('flag:存档名', 0);
          return true;
        case 97:
          player_name = '';
          break;
        case 98:
          player_gender = 3;
          break;
        case 99:
          flag_new_game = false;
      }
    }
  }
  return false;
};
