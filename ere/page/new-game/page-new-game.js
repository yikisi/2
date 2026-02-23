const era = require('#/era-electron');

const { sys_fix_chara_base } = require('#/system/sys-calc-base-cflag');
const { init_chara } = require('#/system/sys-init-chara');
const sys_next_week = require('#/system/sys-next-week');

const page_custom = require('#/page/new-game/page-custom');
const print_set_page = require('#/page/new-game/page-setting');

const basement_queue = require('#/event/basement-queue');
const { get_custom_check } = require('#/event/check/check-factory');
const game_guides = require('#/event/others/game-guides');
const event_queue = require('#/event/queue');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');

const get_display_name = require('#/utils/calc-display-name');
const { get_display_width, get_random_value } = require('#/utils/value-utils');

const CharaAvailableSkills = require('#/data/chara-available-skills');
const { chara_colors, get_chara_color } = require('#/data/chara-colors');
const CharaSkills = require('#/data/chara-skills');
const CharaTitles = require('#/data/chara-titles');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const MeekEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-201');
const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');
const TasteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-302');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { first_child_id } = require('#/data/other-const');
const { chara_skill_dict } = require('#/data/race/skill/skill-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

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
    init_chara(src_chara);
    // CFLAGNAME:67 = 随机招募
    era.set(`cflag:${src_chara}:67`, 0);
    init_chara(0, src_chara);
    player_name = era.get('callname:0:-1');
    // TALENTNAME:67 = 调教度
    era.set('talent:0:67', 1);
    CharaTitles.get(0).push(
      ...get_custom_check(src_chara)
        .get_personal_titles()
        .map((e) => ({ c: chara_colors[0], n: e })),
    );
    get_skills_and_print_in_event(
      0,
      chara_skill_dict[src_chara] || [],
      CharaSkills.get(0),
      false,
    );
    CharaAvailableSkills.get(0).clear();
    era.set('callname:0:-2', 'you');
    // CFLAGNAME:65 = 成长阶段
    era.set('cflag:0:65', 5);
    // CSTRNAME:12 = 决胜服
    era.set('cstr:0:12', 0);
  } else {
    chara_colors[0] = '#ffffff';
  }
  const my_marks = new MyEduMarks();

  let player_gender = 3;

  while (flag_new_game) {
    await era.clear();
    era.setAlign('center');
    era.print(i18n().new_game.intro_info1);
    era.drawLine();
    era.print(i18n().new_game.intro_info2);
    era.setAlign('left');
    era.println();
    era.print(i18n().new_game.intro_info3, { align: 'right' });
    era.print(get_display_name(era.get('static:302:name')), { align: 'right' });
    era.print(
      i18n().new_game.intro_sign(
        di18n.name.get_name_with_adult_title(
          get_display_name(player_name),
          player_gender,
        ),
      ),
    );
    era.print(i18n().new_game.intro_time);
    era.drawLine();

    if (player_name === '') {
      // 未输入姓名
      era.print(i18n().new_game.intro_input_name);
      player_name = (await era.input()).toString();
      if (get_display_width(player_name) > 10) {
        await era.printAndWait(di18n.get_too_long(10));
        player_name = '';
      }
    } else if (player_gender === 3) {
      // 再输入性别子循环
      era.printMultiColumns([
        { type: 'text', content: i18n().new_game.intro_select_sex },
        {
          accelerator: 0,
          config: { width: 4 },
          content: i18n().name.female,
          type: 'button',
        },
        {
          accelerator: 1,
          config: { width: 4 },
          content: i18n().name.male,
          type: 'button',
        },
        {
          accelerator: 10,
          config: { width: 4 },
          content: i18n().name.futa,
          type: 'button',
        },
        {
          accelerator: 98,
          config: { disabled: src_chara > 0, width: 4 },
          content: i18n().new_game.intro_resign,
          type: 'button',
        },
        {
          accelerator: 99,
          config: { align: 'right', width: 8 },
          content: i18n().ui_back,
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
          content: i18n().new_game.intro_submit,
          type: 'button',
        },
        {
          accelerator: 97,
          config: { disabled: src_chara > 0, width: 6 },
          content: i18n().new_game.intro_resign,
          type: 'button',
        },
        {
          accelerator: 98,
          config: { width: 6 },
          content: i18n().new_game.intro_re_select_sex,
          type: 'button',
        },
        {
          accelerator: 99,
          config: { align: 'right', width: 6 },
          content: i18n().ui_back,
          type: 'button',
        },
      ]);

      switch (await era.input()) {
        case 1:
          era.set('callname:0:-1', player_name);
          // CFLAGNAME:0 = 性别
          era.set('cflag:0:0', player_gender);

          if (await print_set_page()) {
            return false;
          }

          // FLAGNAME:128 = 新手教学
          if (era.get('flag:128')) {
            era.set('flag:128', {});
            game_guides.init();
          }

          // ABLNAME:0 - 4 = 速度训练等级 - 智力训练等级
          for (let aid = 0; aid <= 4; ++aid) {
            era.set(`abl:0:${aid}`, 1);
          }

          // BASENAME:10 - 13 = 性欲 - 药物残留
          for (let bid = 10; bid <= 13; ++bid) {
            era.set(`base:0:${bid}`, 0);
          }

          // CFLAGNAME:4 - 5 = 阴茎尺寸 - 阴道尺寸
          if (player_gender > 0) {
            era.set('cflag:0:4', get_random_value(1, 5));
          }
          era.set('cflag:0:5', player_gender !== 1 ? 1 : 0);

          // CFLAGNAME:66 = 招募状态
          era.set('cflag:0:66', recruit_flags.yes);
          // CFLAGNAME:15 - 16 = 父方角色 - 母方角色
          era.set('cflag:0:15', -1);
          era.set('cflag:0:16', -1);
          era.set('cflag:0:妊娠阶段', 1 << pregnant_stage_enum.no);

          era.set('talent:0:童贞', 1);
          era.set('talent:0:处女', 1);
          if (src_chara <= 0) {
            if (await page_custom()) {
              return false;
            }
          }

          // 0号角色初始化
          for (let i = 0; i < 5; ++i) {
            // BASENAME:5 - 9 = 速度 - 智力
            era.add(`base:0:${5 + i}`, get_random_value(0, 50));
          }
          sys_fix_chara_base(0);

          era.set('flag:当前回合数', 0);
          era.set('flag:当前年', 2000);
          era.set('flag:当前月', 1);
          era.set('flag:当前周', 0);
          era.set('flag:当前位置', location_enum.office);
          era.set('cflag:0:育成回合计时', 4800);

          // 游戏设置
          // FLAGNAME:50 = 新生儿ID
          era.set('flag:50', first_child_id);

          event_queue.init();
          basement_queue.init();

          era
            .getAllCharacters()
            .forEach((cid) => cid > 200 && cid < 400 && init_chara(cid));
          // FLAGNAME:179 = 彩蛋机制
          switch (era.get('flag:179')) {
            case 179:
              // 初始卡池：富赤速茶宫穴
              [5, 9, 25, 32, 36, 94].forEach(
                (cid) => src_chara !== cid && init_chara(cid),
              );
              // FLAGNAME:15 - 16 = 当前声望 - 当前马币
              era.set('flag:15', 5000);
              era.set('flag:16', 0);
              break;
            default:
              // 初始卡池：内恰帝王北黑（萌战四强 - 光钻） + 露娜 + 阿船
              [60, 3, 68, 17, 7].forEach(
                (e) => src_chara !== e && init_chara(e),
              );
              era.set('flag:15', era.get('global:初始声望增加量') + 100);
              era.set('flag:16', era.get('global:初始金钱增加量') + 300);
          }
          era.add('flag:15', -era.get('flag:回合声望惩罚'));

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
          my_marks.big_sale = get_random_value(5, 10);
          new MeekEduMarks().all_round = get_random_value(5, 12);
          if (src_chara !== 10) {
            new TokinoLifeMarks().shadow = get_random_value(5, 12);
          }
          new TasteLifeMarks().annoyance = get_random_value(13, 20);

          era.set('flag:随机种子', get_random_value(0, 233280 - 1));
          era.set('flag:存档名', 0);
          era.set('item:现实透孔仪', 1);
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
