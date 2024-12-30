const era = require('#/era-electron');

const sys_add_titles = require('#/system/chara/sys-add-titles');
const filter_chara = require('#/system/sys-filter-chara');

const print_page_header = require('#/page/components/page-header');

const basement_queue = require('#/event/basement-queue');
const { get_custom_check } = require('#/event/check/check-factory');
const { get_custom_daily } = require('#/event/daily/daily-factory');
const event_queue = require('#/event/queue');
const { cb_enum } = require('#/event/queue');

const CharaTalk = require('#/utils/chara-talk');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { chara_colors, get_chara_color } = require('#/data/chara-colors');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');
const { first_child_id } = require('#/data/other-const');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');

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
            event_queue.init();
            basement_queue.init();
            const src_chara = era.get('cflag:0:模版角色');
            chara_colors[0] =
              src_chara > 0 ? get_chara_color(src_chara) : '#ffffff';
            CharaTalk.me = new CharaTalk(0);
            // 向前兼容
            // 大拓太阳神育成目标错误、贵妇人称号bug
            const version = era.get('version');
            if (version < 1011) {
              [65, 116]
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
                      check
                        .get_edu_aims()
                        .reduce((p, c) => p && c.check === 1, true),
                    ),
                  );
                });
            }
            if (version < 1100) {
              const e_queue = event_queue.get();
              Object.values(e_queue).forEach((l) =>
                l.forEach((e) => {
                  if (e.type === event_queue.cb_enum.love) {
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
                const events = event_queue.get(),
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
                .filter((e) => e >= first_child_id && e < 1000)
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
            if (version < 1120) {
              era.set('callname:304:306', '㭴本代理');
              era.set('callname:304:305', '安心泽老师');
              const my_reg = sys_reg_race(0);
              my_reg.last.race = my_reg.curr.race;
              my_reg.last.week = my_reg.curr.week;
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
