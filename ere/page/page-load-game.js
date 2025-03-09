const era = require('#/era-electron');

const sys_add_titles = require('#/system/chara/sys-add-titles');
const {
  sys_get_billings,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const filter_chara = require('#/system/sys-filter-chara');
const sys_load_game = require('#/system/sys-load-game');

const print_page_header = require('#/page/components/page-header');

const { get_custom_check } = require('#/event/check/check-factory');
const { get_custom_daily } = require('#/event/daily/daily-factory');
const { add_event, cb_enum, get: get_queue } = require('#/event/queue');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { get_chara_color } = require('#/data/chara-colors');
const CharaTitles = require('#/data/chara-titles');
const { trainer_salary } = require('#/data/const.json');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_trainer_title } = require('#/data/info-generator');
const { first_child_id, max_chara_id } = require('#/data/other-const');
const { init_chara } = require('#/system/sys-init-chara');

function check_titles(...ids) {
  ids
    .filter(
      (id) =>
        era.get(`cflag:${id}:招募状态`) === recruit_flags.yes &&
        era.get(`cflag:${id}:育成回合计时`) >= 3 * 48,
    )
    .forEach((id) => {
      const check = get_custom_check(id);
      sys_add_titles(
        id,
        ...check.check_and_get_titles(
          check.get_edu_aims().reduce((p, c) => p && c.check === 1, true),
        ),
      );
    });
}

/**
 * load game
 * @return {Promise<boolean>} if true, tell main.js to call homepage
 */
module.exports = async () => {
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
    buffer.push({ config: { content: '要从哪个栏位读取？' }, type: 'divider' });
    new Array(11).fill(0).forEach((_, e) => {
      let comm_desc = era.get(`global:saves:${e}`);
      const enabled = comm_desc && !comm_desc.startsWith('(FILE LOST)');
      buffer.push({
        accelerator: e,
        config: { disabled: !enabled, width: 20 },
        content: comm_desc || '空存档栏位',
        type: 'button',
      });
      if (comm_desc) {
        buffer.push({
          accelerator: e + 100,
          config: { align: 'right', width: 4 },
          content: '删除',
          type: 'button',
        });
      }
    });
    era.printMultiColumns(buffer);

    era.drawLine();
    era.printButton('返回上一级', 99, { align: 'right' });

    let ret = await era.input();

    switch (ret) {
      case 99:
        flag_load_game = false;
        break;
      default:
        if (ret < 100) {
          if (era.get('flag:读档对话')) {
            await get_custom_daily(
              get_random_entry(
                filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
                  (e) => e,
                ),
              ),
            ).load_talk();
          }
          if (await era.loadData(ret)) {
            flag_load_game = false;
            sys_load_game();
            // 向前兼容
            // 大拓太阳神育成目标错误、贵妇人称号bug
            const version = era.get('version');
            if (version < 1011) {
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
              era.getAddedCharacters().forEach((e) => {
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
              era.getAddedCharacters().forEach((e) => {
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
              if (!era.get('flag:回合爱慕惩罚')) {
                // 爱慕事件修复
                const events = get_queue(),
                  dict = {};
                Object.values(events).forEach((l) =>
                  l.forEach((e) => {
                    if (
                      e.type === cb_enum.love &&
                      e.arg instanceof Array &&
                      (e[0] === 49 || e[0] === 74 || e[0] === 89 || e[0] === 99)
                    ) {
                      dict[e.chara_id] = 1;
                    }
                  }),
                );
                era.getAddedCharacters().forEach((chara_id) => {
                  const love = era.get(`love:${chara_id}`);
                  if (
                    !dict[chara_id] &&
                    (love === 49 ||
                      love === 74 ||
                      love === 89 ||
                      love === 99) &&
                    era.get(`cflag:${chara_id}:爱慕暂拒`) !== love
                  ) {
                    era.set(`cflag:${chara_id}:爱慕暂拒`, love);
                  }
                });
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
                    era.set(`callname:${e}:0`, '爸爸');
                    clean_errors();
                  }
                  if (!(mother_id > 0)) {
                    mother_id = era.set(`cflag:${e}:母方角色`, 0);
                    era.set(`callname:${e}:0`, '妈妈');
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
              era.set('callname:304:306', '㭴本代理');
              era.set('callname:304:305', '安心泽老师');
              const my_reg = sys_reg_race(0);
              my_reg.last.race = my_reg.curr.race;
              my_reg.last.week = my_reg.curr.week;
              if (era.get('cflag:0:模版角色') === 32) {
                new MyEduMarks().strange_day = 0;
              } else if (
                new MyEduMarks().strange_day === 0 &&
                (get_queue()[event_hooks.week_start] || []).findIndex(
                  (e) => e.arg === 'strange_day',
                ) === -1
              ) {
                add_event(
                  event_hooks.week_start,
                  new EventObject(0, cb_enum.edu).set_arg('strange_day2'),
                );
              }
              if (era.get('cflag:56:招募状态') === recruit_flags.yes) {
                const title_name =
                    get_custom_check(56).get_personal_titles()[0],
                  personal_title = new CharaTitles(56)
                    .get()
                    .find((e) => e.n === title_name);
                if (personal_title !== undefined) {
                  personal_title.c = get_chara_color(56);
                }
              }
              if (era.get('cflag:88:招募状态') === recruit_flags.yes) {
                const personal_title = new CharaTitles(56)
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
                    trainer_salary[get_trainer_title().substring(0, 2)] *
                    (1 + (cur_month === 12));
                era.set('flag:18', 0);
                billings.push({
                  creditor: cur_month === 12 ? -1 : 0,
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
              if (
                era.get('cflag:85:招募状态') === recruit_flags.yes &&
                era.get('cflag:85:育成回合计时') > 143 + 9 &&
                era.get('cflag:85:可再次育成') === 0
              ) {
                era.set('cflag:85:育成回合计时', 'x');
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
              era.getAddedCharacters().forEach((id) => {
                if (id > 0 && era.get(`cflag:${id}:种族`) === 0) {
                  era.set(`cflag:${id}:可再次育成`, 1);
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
              era.getAddedCharacters().forEach((id) => {
                const life_marks = LifeEventMarks.get_marks(id);
                const b_cd = life_marks.get('b_cd');
                if (b_cd > 0) {
                  era.set('flag:地下室冷却', Math.max(b_cd, basement_cd));
                  life_marks.set('b_cd', 0);
                }
              });
            }
            if (version <= 1310) {
              init_chara(345);
              init_chara(346);
              init_chara(347);
              init_chara(348);
              new MyEduMarks().kamen_rider = 1;
            }
            return true;
          } else {
            msg_notification = `未能成功读取 ${ret} 号栏位的存档`;
          }
        } else if (
          (era.get(`global:saves:${ret - 100}`) &&
            era.get(`global:saves:${ret - 100}`).startsWith('(FILE LOST)') &&
            !era.set(`global:saves:${ret - 100}`, '')) ||
          (await era.rmData(ret - 100))
        ) {
          await era.saveGlobal();
          msg_notification = `成功删除 ${ret - 100} 号栏位的存档`;
        }
        break;
    }
  }
};
