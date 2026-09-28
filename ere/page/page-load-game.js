const era = require('#/era-electron');

const sys_add_titles = require('#/system/chara/sys-add-titles');
const { check_chara_ero_image } = require('#/system/ero/sys-calc-ero-image');
const {
  sys_get_billings,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const filter_chara = require('#/system/sys-filter-chara');
const { init_chara } = require('#/system/sys-init-chara');
const sys_load_game = require('#/system/sys-load-game');

const print_page_header = require('#/page/components/page-header');
const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { clean_actions } = require('#/event/basement-queue');
const { get_custom_check } = require('#/event/check/check-factory');
const { get_custom_daily } = require('#/event/daily/daily-factory');
const { add_event, cb_enum, get: get_queue } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { action_type_enum } = require('#/data/basement-const');
const { get_chara_color } = require('#/data/chara-colors');
const CharaTitles = require('#/data/chara-titles');
const { adaptability_colors } = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const basement_owners = require('#/data/event/basement-owners');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const LoveEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-132');
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const BryneLifeMarks = require('#/data/event/life-event-marks/life-event-marks-349');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');
const {
  get_filtered_talents,
  get_trainer_level,
} = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const {
  creditors,
  first_child_id,
  get_trainer_salary,
  max_chara_id,
} = require('#/data/other-const');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

function check_titles(...ids) {
  ids
    .filter(
      (id) =>
        era.get(`cflag:${id}:招募状态`) === recruit_flags.yes &&
        era.get(`cflag:${id}:育成回合计时`) >= 3 * 48,
    )
    .forEach((cid) => {
      const check = get_custom_check(cid);
      sys_add_titles(
        cid,
        ...check.check_and_get_titles(
          check.get_edu_aims().reduce((p, c) => p && c.check === 1, true),
        ),
      );
    });
}

function find_key_by_value(dict, val) {
  const pair = Object.entries(dict).find((e) => e[1] === val);
  if (pair) {
    return pair[0];
  }
  return val;
}

/**
 * load game
 * @return {Promise<boolean>} if true, tell main.js to call homepage
 */
module.exports = async () => {
  const save_count = Math.min(
    era.get('gameconfig')?.system.saveFiles ?? 10,
    50,
  );

  let flag_load_game = true;
  let msg_notification = '';

  while (flag_load_game) {
    await era.clear();
    print_page_header();

    const buffer = [];
    if (msg_notification) {
      buffer.push(
        { type: 'divider' },
        {
          config: { align: 'center' },
          content: msg_notification,
          type: 'text',
        },
      );
    }
    buffer.push({
      config: { content: i18n().ui_load_game_header },
      type: 'divider',
    });
    new Array(save_count + 1).fill(0).forEach((_, e) => {
      let comm_desc = era.get(`global:saves:${e}`);
      const enabled = comm_desc && !comm_desc.startsWith('(FILE LOST)');
      buffer.push({
        accelerator: e,
        config: { disabled: !enabled, width: 20 },
        content: comm_desc || i18n().ui_empty_save,
        type: 'button',
      });
      if (comm_desc) {
        buffer.push({
          accelerator: e + 100,
          config: { align: 'right', width: 4 },
          content: i18n().ui_load_remove,
          type: 'button',
        });
      }
    });
    era.printMultiColumns(buffer);

    era.drawLine();
    era.printButton(i18n().ui_back, 99, { align: 'right' });

    let ret = await era.input();

    switch (ret) {
      case 99:
        flag_load_game = false;
        break;
      default:
        if (ret < 100) {
          if (era.get('flag:读档对话')) {
            const cid = get_random_entry(
              filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
                (e) => e,
              ),
            );
            if (cid > 0) {
              await get_custom_daily(cid).load_talk();
            }
          }
          CharaInmon.clean();
          if (await era.loadData(ret)) {
            flag_load_game = false;
            sys_load_game();
            // 向前兼容
            const added = era.getAddedCharacters();
            const version = era.get('version');
            if (version < 1011) {
              // 大拓太阳神育成目标错误、贵妇人称号错误
              check_titles(65, 116);
            }
            if (version < 1100) {
              const e_queue = get_queue();
              Object.values(e_queue).forEach((l) =>
                l.forEach((e) => {
                  if (e.type === cb_enum.love) {
                    if (e.arg === undefined) {
                      era.arg = [era.get(`love:${e.chara_id}`)];
                    } else if (
                      e.arg === 49 ||
                      e.arg === 74 ||
                      e.arg === 89 ||
                      e.arg === 99
                    ) {
                      e.arg = [e.arg];
                    } else if (e.chara_id === 205 && e.arg === 'lust') {
                      e.arg = [49, 'lust'];
                    }
                  }
                }),
              );
              added.forEach((e) => {
                if (
                  era.get(`cflag:${e}:种族`) &&
                  era.get(`cflag:${e}:成长阶段`) === 5 &&
                  !(era.get(`cflag:${e}:育成回合计时`) < 3 * 48) &&
                  !era.get(`cflag:${e}:可再次育成`)
                ) {
                  era.set(`cflag:${e}:可再次育成`, 1);
                }
                if (era.get(`cflag:${e}:育成回合计时`) < 3 * 48) {
                  era.set(`cflag:${e}:可再次育成`, 0);
                }
              });
              new MyEduMarks().strange_day = get_random_value(4, 8);
            }
            if (version < 1101) {
              added.forEach((e) => {
                if (era.get(`cflag:${e}:育成回合计时`) < 143 + 9) {
                  era.set(`cflag:${e}:可再次育成`, 0);
                }
              });
            }
            if (version < 1111) {
              if (era.get('cflag:0:模版角色') !== 32) {
                new TachyonLifeMarks().drug_notice =
                  Math.max(48 - era.get('flag:当前回合数'), 0) +
                  get_random_value(1, 25);
              }
              era
                .getAddedCharacters()
                .filter((e) => e >= first_child_id && e < max_chara_id)
                .forEach((e) => {
                  let father_id = era.get(`cflag:${e}:父方角色`),
                    mother_id = era.get(`cflag:${e}:母方角色`);
                  const clean_errors = () => {
                    const relation_obj = era.get(`relation:${e}`);
                    relation_obj[0] = Math.max(relation_obj[0] || 0, 400);
                    delete relation_obj[undefined];
                    delete relation_obj[null];
                    const callname_obj = era.get(`callname:${e}`);
                    delete callname_obj[undefined];
                    delete callname_obj[null];
                  };
                  if (!(father_id > 0)) {
                    father_id = era.set(`cflag:${e}:父方角色`, 0);
                    era.set(`callname:${e}:0`, 'dad');
                    clean_errors();
                  }
                  if (!(mother_id > 0)) {
                    mother_id = era.set(`cflag:${e}:母方角色`, 0);
                    era.set(`callname:${e}:0`, 'mom');
                    clean_errors();
                  }
                  if (era.get(`cflag:${e}:招募状态`) !== recruit_flags.yes) {
                    if (father_id === 0 || mother_id === 0) {
                      era.set(`cflag:${e}:招募状态`, recruit_flags.yes);
                    } else {
                      era.set(`cflag:${e}:随机招募`, 1);
                    }
                  }
                });
            }
            if (version < 1200) {
              era.set('callname:304:305', '900513');
              era.set('callname:304:306', '900611');
              const my_reg = sys_reg_race(0);
              my_reg.last.race = my_reg.curr.race;
              my_reg.last.week = my_reg.curr.week;
              if (era.get('cflag:0:模版角色') === 32) {
                new MyEduMarks().strange_day = 0;
              } else if (
                new MyEduMarks().strange_day === 0 &&
                (get_queue()[event_hooks.week_start] || []).every(
                  (e) => e.arg !== 'strange_day',
                )
              ) {
                add_event(
                  event_hooks.week_start,
                  new EventObject(0, cb_enum.edu).set_arg('strange_day2'),
                );
              }
              if (era.get('cflag:56:66') === recruit_flags.yes) {
                const personal_title = CharaTitles.get(56)
                  .get()
                  .find((e) => e.n === i18n('zh-CN').title[105601]);
                if (personal_title !== void 0) {
                  personal_title.c = get_chara_color(56);
                }
              }
              if (era.get('cflag:88:66') === recruit_flags.yes) {
                const personal_title = CharaTitles.get(88)
                  .get()
                  .find((e) => e.n === '黑翠千里行');
                if (personal_title !== undefined) {
                  personal_title.n =
                    get_custom_check(88).get_personal_titles()[0];
                }
              }
            }
            if (version <= 1201) {
              if (
                era.get('cflag:0:种族') === 0 &&
                era.get('flag:当前周') === 4
              ) {
                const billings = sys_get_billings(),
                  cur_month = era.get('flag:当前月'),
                  salary =
                    get_trainer_salary(get_trainer_level()) *
                    (1 + (cur_month === 12));
                era.set('flag:18', 0);
                billings.push({
                  creditor:
                    cur_month === 12 ? creditors.annul_bonus : creditors.salary,
                  repay: salary,
                  timer: 1,
                });
              }
              check_titles(66);
              if (
                era.get('cflag:67:招募状态') === recruit_flags.yes &&
                era.get('cflag:67:育成回合计时') > 143 + 9 &&
                era.get('cflag:67:可再次育成') === 0
              ) {
                era.set('cflag:67:可再次育成', 1);
              }
            }
            if (version <= 1210) {
              const keys = era.get('cstrkeys').filter((k) => k !== 12);
              era
                .getAddedCharacters()
                .forEach((id) =>
                  keys.forEach((k) =>
                    era.set(
                      `cstr:${id}:${k}`,
                      era.get(`cstr:${id}:${k}`) || '',
                    ),
                  ),
                );
            }
            if (version <= 1211) {
              added.forEach((cid) => {
                if (cid > 0 && era.get(`cflag:${cid}:种族`) === 0) {
                  era.set(`cflag:${cid}:可再次育成`, 1);
                }
              });
              if (
                era.get('cflag:204:随机招募') === 1 &&
                era.get('cflag:204:招募状态') !== recruit_flags.yes
              ) {
                era.set('cflag:204:招募状态', -1);
                era.set('cflag:204:随机招募', 0);
              }
              if (
                era.get('cflag:204:可再次育成') > 0 &&
                era.get('jewel:204:白') === 0
              ) {
                era.set('jewel:204:粉', 100);
                era.set('jewel:204:白', 100);
                era.set('jewel:204:蓝', 100);
              }
            }
            if (version <= 1300) {
              let basement_cd = era.get('flag:地下室冷却') || 0;
              added.forEach((cid) => {
                const life_marks = LifeEventMarks.get_marks(cid);
                const b_cd = life_marks.get('b_cd');
                if (b_cd > 0) {
                  era.set('flag:地下室冷却', Math.max(b_cd, basement_cd));
                  life_marks.set('b_cd', 0);
                }
              });
            }
            if (version <= 1310) {
              new MyEduMarks().kamen_rider = 1;
            }
            if (version <= 1311) {
              added.forEach((cid) => {
                const titles = era.get(`cstr:${cid}:称号`);
                if (Array.isArray(titles)) {
                  titles.forEach((t) => t.s === false && delete t.s);
                }
                if (
                  cid > 0 &&
                  cid < 1000 &&
                  era.get(`cflag:${cid}:种族`) > 0 &&
                  era.get(`cflag:${cid}:招募状态`) === recruit_flags.yes &&
                  era.get(`cflag:${cid}:育成回合计时`) > 143 + 9 &&
                  era.get(`cflag:${cid}:可再次育成`) === 0
                ) {
                  era.set(`cflag:${cid}:育成回合计时`, 'x');
                }
              });
            }
            if (version <= 1320) {
              era.set('cflag:0:成长阶段', 5);
              era.set(
                'cflag:0:育成回合计时',
                4800 + era.get('flag:当前回合数'),
              );
            }
            if (version <= 1321) {
              if (era.get('flag:当前位置') === location_enum.basement) {
                const owners = basement_owners.get();
                clean_actions(
                  (a, i, l) =>
                    (a.chara_id !== 0 &&
                      owners.every((e) => e !== a.chara_id) &&
                      a.type !== action_type_enum.rescue) ||
                    l.findIndex(
                      (e) => e.chara_id === a.chara_id && e.type === a.type,
                    ) < i,
                );
              } else {
                clean_actions(() => true);
              }
              added.forEach((cid) =>
                new Array(5).fill(0).forEach((_, i) => {
                  if (era.get(`abl:${cid}:${i}`) > 5) {
                    era.set(`abl:${cid}:${i}`, 5);
                  }
                }),
              );
            }
            if (version <= 1330) {
              if (
                era.get('cflag:0:模版角色') > 0 &&
                era.get('flag:惩戒力度') === 0
              ) {
                era.set('flag:声望不足替换', 0);
              }
            }
            if (version <= 1340) {
              added.forEach((cid) => {
                // EQUIPNAME:1 = 淫纹奴役
                era.set(`equip:${cid}:1`, era.get(`equip:${cid}:10`));
                if (era.get(`exp:${cid}:性爱次数`) > 0) {
                  era.set(`cstr:${cid}:初次潮吹经历`, []);
                  era.set(`cstr:${cid}:无自觉初次潮吹经历`, []);
                  era.set(`cstr:${cid}:初次饮爱液经历`, []);
                  era.set(`cstr:${cid}:无自觉初次饮爱液经历`, []);
                }
                const t_above_all = CharaTitles.get(cid)
                  .get()
                  .find((t) => t.n === i18n('zh-CN').title.e_above_all);
                if (t_above_all !== void 0) {
                  t_above_all.c = adaptability_colors.at(-2);
                }
              });
              if (era.get('flag:惩戒力度') >= 2) {
                era.set('talent:0:调教度', 5);
              }
              //              if (
              //                !(await select_yes_or_no(
              //                  i18n().timon.fc_mejiro_confirm,
              //                  i18n().timon.fc_mejiro_free,
              //                  i18n().timon.fc_mejiro_cum,
              //                ))
              //              ) {
              era.set('flag:目白城风格', 1);
              era.set('flag:目白城变量', { limit: 1 });
              //              }
              if (
                await select_yes_or_no(
                  i18n().timon.fc_race_item_confirm,
                  i18n().timon.fc_race_item_no,
                  i18n().timon.fc_race_item_yes,
                )
              ) {
                era.set('flag:道具影响', 0);
              } else {
                era.set('flag:道具影响', -25);
              }
              if (era.get('flag:比赛难度') < 0) {
                era.set('flag:比赛难度', -40);
              }
            }
            if (version <= 2004) {
              if (
                !era.get('cflag:349:可再次育成') &&
                !era.get('cflag:349:殿堂') &&
                !(era.get('cflag:349:育成回合计时') < 3 * 48)
              ) {
                era.set('cflag:349:可再次育成', 1);
              }
            }
            if (version <= 2005) {
              const marks = new BryneLifeMarks();
              if (marks.funds < 0) {
                era.add('flag:当前马币', marks.funds);
                const invest = sys_get_billings().find(
                  (e) => e.creditor === creditors.invest,
                );
                invest.repay = 0;
              }
            }
            if (version <= 2011) {
              // 唯独爱你称号bug
              if (
                era.get('cflag:132:招募状态') === recruit_flags.yes &&
                era.get('love:132') >= 50 &&
                check_aim_race(
                  RaceHistory.get(132).get(),
                  race_enum.yush_him,
                  1,
                  1,
                ) &&
                (check_aim_race(
                  RaceHistory.get(132).get(),
                  race_enum.eliz_cup,
                  1,
                  1,
                ) ||
                  check_aim_race(
                    RaceHistory.get(132).get(),
                    race_enum.eliz_cup,
                    2,
                    1,
                  ))
              ) {
                new LoveEduMarks().title_check = 0b11;
                const check = get_custom_check(132);
                sys_add_titles(
                  132,
                  ...check.check_and_get_titles(
                    check
                      .get_edu_aims()
                      .reduce((p, c) => p && c.check === 1, true),
                  ),
                );
              }
            }
            if (version <= 2100) {
              era
                .getAddedCharacters()
                .forEach((cid) => era.add(`talent:${cid}:调教度`, 1));
            }
            if (version <= 2120) {
              if (new LunaEduMarks().good_end === 2) {
                new Array(7)
                  .fill(0)
                  .forEach((_, i) => era.set(`status:17:${110 + i}`, 0));
              }
            }
            if (version <= 2152) {
              era
                .getAddedCharacters()
                .forEach((cid) =>
                  new Array(5)
                    .fill(0)
                    .forEach((_, i) =>
                      era.set(
                        `exp:${cid}:${5 + i}`,
                        Math.max(era.get(`exp:${cid}:${5 + i}`), 0),
                      ),
                    ),
                );
              // ITEMNAME:114 = 现实透孔仪
              era.set('item:114', 1);
            }
            if (version <= 2160) {
              new MyEduMarks().big_sale = 1;
            }
            if (version <= 2171) {
              const eq = get_queue();
              if (eq[event_hooks.out_shopping]) {
                let count = 0;
                eq[event_hooks.out_shopping] = eq[
                  event_hooks.out_shopping
                ].filter((e) => {
                  if (
                    e.chara_id !== 0 ||
                    e.type !== cb_enum.edu ||
                    e.arg !== 'big_sale'
                  ) {
                    return true;
                  }
                  return count++ === 0;
                });
                for (let i = 0; i < count - 1; ++i) {
                  EventMarks.get(0).sub(event_hooks.out_shopping);
                }
              }
            }
            if (version <= 2172) {
              check_titles(33, 113);
            }
            if (version <= 2202) {
              check_titles(349);
              if (era.get('flag:当前回合数') % 48 || 48 >= 9) {
                const bug_list = [4, 46, 346, 347, 348];
                era
                  .getAddedCharacters()
                  .filter((cid) => bug_list.includes(cid))
                  .forEach((cid) => {
                    if (
                      era.get(`cflag:${cid}:招募状态`) === recruit_flags.yes &&
                      era.get(`cflag:${cid}:育成回合计时`) > 3 * 48
                    ) {
                      era.set(`cflag:${cid}:可再次育成`, 1);
                    }
                  });
              }
            }
            if (version <= 2203) {
              check_titles(63);
            }
            // i18n - 将游戏存档内所有字符串改成 i18n 框架内的内容
            if (version <= 2210) {
              added.forEach((cid) => {
                if (check_chara_ero_image(cid)) {
                  era.set(
                    `cstr:${cid}:头像T`,
                    era.get(`cstr:${cid}:头像T`) || era.get(`cstr:${cid}:头像`),
                  );
                }
                const callname = era.get(`callname:${cid}`);
                for (const _to in callname) {
                  era.set(
                    `callname:${cid}:${_to}`,
                    find_key_by_value(
                      i18n('zh-CN').name,
                      era.get(`callname:${cid}:${_to}`),
                    ),
                  );
                }
                for (const t of CharaTitles.get(cid).get()) {
                  t.n = find_key_by_value(i18n('zh-CN').title, t.n);
                }
                let tmp;
                if (
                  cid === 46 &&
                  (tmp = CharaTitles.get(cid)
                    .get()
                    .find((t) => t.n === '沙地之隼'))
                ) {
                  tmp.n = '104601';
                }
                // CSTRNAME:0 - 1 = 发色 - 毛色
                for (let stid = 0; stid <= 1; ++stid) {
                  const found = find_key_by_value(
                    i18n('zh-CN').feature,
                    era.get(`cstr:${cid}:${stid}`),
                  );
                  if (found.charAt(2) === '_') {
                    era.set(`cstr:${cid}:${stid}`, found.substring(3));
                  }
                }
                // CSTRNAME:2 - 4 = 前发 - 呆毛
                for (let stid = 2; stid <= 5; ++stid) {
                  era.set(
                    `cstr:${cid}:${stid}`,
                    era
                      .get(`cstr:${cid}:${stid}`)
                      .split('+')
                      .map((e) => {
                        const found = find_key_by_value(
                          i18n('zh-CN').feature,
                          e,
                        );
                        if (found.charAt(2) === '_') {
                          return found.substring(3);
                        }
                        return found;
                      })
                      .join('+'),
                  );
                }

                // 尝试修复三女神的出生时间
                if (cid >= 340 && cid <= 342) {
                  const fc_exp = era.get(`cstr:${cid}:长子女经历`);
                  if (Array.isArray(fc_exp)) {
                    const y = era.set(
                      `cstr:${cid}:出生经历`,
                      fc_exp
                        .find((x) => typeof x === 'string' && /^\d+ 年/.test(x))
                        .substring(0, 4),
                    );
                    era.set(`cstr:${cid}:长子女经历`, {
                      y,
                      m: era.get(`cflag:${cid}:出生月份`).toString(),
                      w: Math.floor(
                        (era.get(`cflag:${cid}:出生日期`) + 6) / 7,
                      ).toString(),
                      c: cid,
                    });
                    if (era.get(`cflag:${cid}:母方角色`) === cid) {
                      era.get(`cstr:${cid}:长子女经历`).im = true;
                    }
                  }
                }
                if (cid >= 500 && cid < max_chara_id) {
                  era.add('flag:怀孕计数', 1);
                }
                if (era.get(`cflag:${cid}:妊娠阶段`) >> 2 > 0) {
                  era.add('flag:怀孕计数', 1);
                }
              });
              if (added.includes(67)) {
                era.set('cflag:67:多口上', 99);
              }
              if (added.includes(30)) {
                era.set('callname:30:30', '103002');
              }
              if (added.includes(44)) {
                era.set('abl:44:英语', Math.max(era.get('abl:44:英语'), 1));
              }
            }
            if (version <= 3001) {
              added.forEach((cid) => {
                const birth = era.get(`cstr:${cid}:出生经历`);
                if (birth && birth.startsWith('出生于')) {
                  era.set(
                    `cstr:${cid}:出生经历`,
                    birth.match(/出生于 (\d+) 年/)[1],
                  );
                }
              });
            }
            if (version <= 3111) {
              if (era.get('callname:0:52') === '105202') {
                era.set('callname:0:52', '105211');
              }
              if (era.get('callname:24:52') === '105202') {
                era.set('callname:24:52', '105211');
              }
              const ws_queue = get_queue()[event_hooks.week_start] ?? [];
              for (const cid of [7, 24, 52]) {
                if (
                  era.get(`cflag:${cid}:招募状态`) === recruit_flags.yes &&
                  era.get(`cflag:${cid}:育成回合计时`) >= 143 + 9 &&
                  era.get(`cflag:${cid}:殿堂`) > 0 &&
                  era.get(`cflag:${cid}:可再次育成`) === 0 &&
                  ws_queue.every(
                    (e) =>
                      e.chara_id !== cid ||
                      e.type !== cb_enum.edu ||
                      e.arg !== 'palace',
                  )
                ) {
                  add_event(
                    event_hooks.week_start,
                    new EventObject(cid, cb_enum.edu).set_arg('palace'),
                  );
                }
              }
            }
            if (version <= 3112) {
              // CFLAGNAME:66 = 招募状态
              // 新增 temporary_leave(2) 表示入队后临时离队，迁移旧存档里的旧值
              // 未入队角色的育成回合计时为 4800，故用 < 3 * 48 区分；0 只有在育成中才表示临时离队
              const old_temp_leave_flags = {
                2: [-1],
                20: [-1, 0],
                50: [0],
                61: [-1],
                205: [-2],
              };
              Object.entries(old_temp_leave_flags).forEach(([cid, values]) => {
                if (
                  Number(cid) !== era.get('flag:强制BE') &&
                  era.get(`cflag:${cid}:育成回合计时`) < 3 * 48 &&
                  values.includes(era.get(`cflag:${cid}:招募状态`))
                ) {
                  era.set(
                    `cflag:${cid}:招募状态`,
                    recruit_flags.temporary_leave,
                  );
                }
              });
            }
            if (version < era.get('gamebase').version) {
              for (const cid of [7, 21, 25, 302]) {
                // CSTRNAME:13 = 头像T
                if (added.includes(cid) && !era.get(`cstr:${cid}:13`)) {
                  // CSTRNAME:10 = 头像
                  era.set(`cstr:${cid}:13`, era.get(`staticcstr:${cid}:10`));
                }
              }
              added.forEach((cid) => {
                if (cid > 0) {
                  const t_table = era.get(`chara:${cid}`)?.talent;
                  if (
                    typeof t_table === 'object' &&
                    Object.entries(t_table)
                      .filter(([t]) => Number(t) <= 20)
                      .reduce(
                        (p, [t, v]) => p && era.get(`talent:${cid}:${t}`) !== v,
                        true,
                      )
                  ) {
                    const aims = [cid];
                    if (era.get('cflag:0:模版角色') === cid) {
                      aims.push(0);
                    }
                    Object.entries(t_table)
                      .filter(([t]) => {
                        const tid = Number(t);
                        return tid <= 20 || (tid >= 40 && tid <= 47);
                      })
                      .forEach(([t, v]) =>
                        aims.forEach((a) => era.set(`talent:${a}:${t}`, v)),
                      );
                    aims.forEach((a) => {
                      const sex_code = era.get(`cflag:${a}:性别`);
                      [
                        ...get_filtered_talents(sex_code, 50),
                        ...get_filtered_talents(sex_code, 60),
                      ].forEach((tid) => {
                        if (t_table[tid] !== void 0) {
                          era.set(`talent:${a}:${tid}`, t_table[tid]);
                        }
                      });
                    });
                  }
                }
              });
              era
                .getAllCharacters()
                .forEach(
                  (cid) =>
                    cid > 200 &&
                    cid < 400 &&
                    !added.includes(cid) &&
                    init_chara(cid),
                );
            }
            return true;
          } else {
            msg_notification = i18n().ui_load_fail_template.replace(
              '%NO%',
              ret.toString(),
            );
          }
        } else if (
          (era.get(`global:saves:${ret - 100}`) &&
            era.get(`global:saves:${ret - 100}`).startsWith('(FILE LOST)') &&
            !era.set(`global:saves:${ret - 100}`, '')) ||
          (await era.rmData(ret - 100))
        ) {
          await era.saveGlobal();
          msg_notification = i18n().ui_load_remove_success_template.replace(
            '%NO%',
            ret.toString(),
          );
        }
    }
  }
};
