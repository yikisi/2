const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedCheck = require('#/event/check/check-common');
const { add_event, cb_enum } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');

const get_display_name = require('#/utils/calc-display-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const ret = super.check_and_get_titles(aim_check);
    if (aim_check && ret.length > 0) {
      LifeEventMarks.get_marks(this.id).buff = 1;
    }
    return ret;
  }

  check_love_events() {
    const love = era.get(`love:${this.id}`);
    if (
      love === 49 ||
      era.get(`cflag:${this.id}:招募状态`) === recruit_flags.yes
    ) {
      add_event(
        event_hooks.week_end,
        new EventObject(this.id, cb_enum.love).set_arg([love]),
      );
    }
  }

  check_next_week() {
    const life_marks = LifeEventMarks.get_marks(this.id);
    if (era.get(`love:${this.id}`) >= 50 && !life_marks.get('love')) {
      add_event(
        event_hooks.week_end,
        new EventObject(this.id, cb_enum.love).set_arg(49),
      );
    }
    if (era.get(`cflag:${this.id}:招募状态`) < 0) {
      if (!era.add(`cflag:${this.id}:招募状态`, 1)) {
        era.set(`cflag:${this.id}:育成回合计时`, 'x');
        add_event(
          event_hooks.week_start,
          new EventObject(this.id, cb_enum.recruit),
        );
      }
    }
    super.check_next_week();
  }

  get_personal_action() {
    const god = get_chara_talk(this.id),
      me = get_chara_talk(0);
    return {
      name: i18n().timon.god_shop.bt_pray,
      async handle() {
        const honour = era.get('flag:当前声望');
        era.printMultiColumns([
          { content: i18n().timon.god_shop.pray_select, type: 'text' },
          ...[
            { c: 1000, n: i18n().timon.god_shop.bt_pray_honour_buff },
            { c: 500, n: i18n().timon.god_shop.bt_pray_money_buff },
            {
              c: 200,
              d: new Array(5).fill(0).every(
                (_, i) =>
                  // BASENAME:5 - 9 = 速度 - 智力
                  era.get(`base:0:${5 + i}`) >= era.get(`maxbase:0:${5 + i}`),
              ),
              n: i18n().timon.god_shop.bt_pray_your_power,
            },
            { c: 50, n: i18n().timon.god_shop.bt_pray_self_over_limit },
            { c: 800, n: i18n().timon.god_shop.bt_pray_self_heal },
          ].map((e, i) => ({
            accelerator: i + 1,
            config: { disabled: e.d || honour < e.c, width: 6 },
            content: e.n,
            type: 'button',
          })),
          { accelerator: 99, content: i18n().ui_cancel, type: 'button' },
        ]);
        let ret = await era.input();
        let relation;
        let temp_list;
        switch (ret) {
          case 1:
            if ((await i18n().timon.god_shop.handle_pray_honour_buff()) === 1) {
              era.add('global:声望加成', 1);
              era.add('flag:当前声望', -1000);
              relation = 500;
            }
            break;
          case 2:
            if ((await i18n().timon.god_shop.handle_pray_money_buff()) === 1) {
              era.add('global:金钱加成', 1);
              era.add('flag:当前声望', -500);
              relation = 250;
            }
            break;
          case 3:
            ret = new Array(5)
              .fill(0)
              .map(
                (_, i) =>
                  era.get(`base:0:${5 + i}`) >= era.get(`maxbase:0:${5 + i}`),
              );
            ret = await i18n().timon.god_shop.handle_pray_your_power(
              ret,
              get_random_entry(
                ret
                  .map((b, i) => [b, i])
                  .filter(([b]) => !b)
                  .map((e) => e[1]),
              ),
            );
            if (ret[0] <= 5) {
              const attr = new Array(5).fill(0);
              attr[ret[1]] = 80;
              if (ret[0] === 5) {
                attr[ret[1]] += 20;
              }
              if (get_attr_and_print_in_event(0, attr)) {
                await era.waitAnyKey();
              }
              era.add('flag:当前声望', -200);
              relation = 100;
            }
            break;
          case 4:
          case 5:
            temp_list = sys_filter_chara(
              'cflag',
              '招募状态',
              recruit_flags.yes,
            ).filter((cur_id) =>
              ret === 4
                ? new Array(5)
                    .fill(0)
                    .filter(
                      (_, i) =>
                        era.get(`maxbase:${cur_id}:${5 + i}`) -
                          era.get(`base:${cur_id}:${5 + i}`) <
                        50,
                    ).length >= 3 &&
                  new Array(5)
                    .fill(0)
                    .some(
                      (_, i) => era.get(`maxbase:${cur_id}:${5 + i}`) < 2000,
                    )
                : era.get(`status:${cur_id}:熬夜`) ||
                  era.get(`status:${cur_id}:发胖`) ||
                  era.get(`status:${cur_id}:偏头痛`) ||
                  era.get(`status:${cur_id}:伤病`) ||
                  era.get(`status:${cur_id}:疲惫`),
            );
            if (temp_list.length) {
              era.printMultiColumns([
                { content: i18n().timon.god_shop.select_target, type: 'text' },
                ...temp_list.map((cur_id) => {
                  let cost;
                  if (ret === 4) {
                    cost = new Array(5)
                      .fill(0)
                      .filter(
                        (_, i) =>
                          era.get(`base:${cur_id}:${5 + i}`) ===
                          era.get(`maxbase:${cur_id}:${5 + i}`),
                      ).length;
                    cost =
                      cost >= 3 ? 50 : (3 - cost) * 100 + 200 * (cost === 0);
                  } else {
                    cost = 800;
                  }
                  const name = get_display_name(
                    era.get(`callname:${cur_id}:-2`),
                  );
                  return {
                    accelerator: cur_id,
                    config: { width: 12, disabled: honour < cost },
                    content:
                      ret === 4
                        ? i18n().timon.god_shop.get_target_entry_over_limit(
                            name,
                            cost,
                          )
                        : i18n().timon.god_shop.get_target_entry_heal(
                            name,
                            cost,
                          ),
                    type: 'button',
                  };
                }),
                {
                  accelerator: 9999,
                  content: i18n().ui_cancel,
                  type: 'button',
                },
              ]);
              ret = [ret, 0];
              ret[1] = await era.input();
              if (ret[1] !== 9999) {
                if (ret[0] === 4) {
                  let limited_count = 0;
                  new Array(5).fill(0).forEach((_, i) => {
                    limited_count +=
                      era.get(`base:${ret[1]}:${5 + i}`) ===
                      era.get(`maxbase:${ret[1]}:${5 + i}`);
                    era.set(
                      `maxbase:${ret[1]}:${5 + i}`,
                      Math.min(
                        2000,
                        era.get(`maxbase:${ret[1]}:${5 + i}`) + 100,
                      ),
                    );
                    // CFLAGNAME:25 - 29 = 速度加成 - 智力加成
                    era.add(`cflag:${ret[1]}:${i + 25}`, -10);
                  });
                  i18n().timon.god_shop.handle_pray_over_limit(
                    get_chara_talk(ret[1]),
                  );
                  relation =
                    limited_count >= 3
                      ? 50
                      : (3 - limited_count) * 100 + 200 * (limited_count === 0);
                  era.add('flag:当前声望', -relation);
                  relation /= 2;
                } else {
                  era.set(`base:${ret[1]}:体重偏差`, 0);
                  era.set(`base:${ret[1]}:药物残留`, 0);
                  era.set(`base:${ret[1]}:压力`, 0);
                  era.set(`status:${ret[1]}:熬夜`, 0);
                  era.set(`status:${ret[1]}:发胖`, 0);
                  era.set(`status:${ret[1]}:偏头痛`, 0);
                  era.set(`status:${ret[1]}:伤病`, 0);
                  era.set(`status:${ret[1]}:疲惫`, 0);
                  era.set(`status:${ret[1]}:练习X手`, 2);
                  CustomizedCheck.get_custom_check(ret[1]).check_lay_on_hands();
                  sys_change_motivation(ret[1], 4);
                  era.add('flag:当前声望', -800);
                  relation = 400;
                }
              }
            } else {
              era.print(i18n().timon.god_shop.no_targets);
            }
        }
        i18n().timon.god_shop.handle_pray_end(god, me, relation > 0);
        if (relation > 0) {
          era.println();
          CustomizedCheck.like_chara(god.id, 0, relation);
        }
      },
    };
  }

  is_prison() {
    return false;
  }

  is_rape_in_sleeping() {
    if (era.get(`cflag:${this.id}:招募状态`) !== recruit_flags.yes) {
      return false;
    }
    return super.is_rape_in_sleeping();
  }
};
