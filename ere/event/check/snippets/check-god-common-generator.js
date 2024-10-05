const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const CustomizedCheck = require('#/event/check/check-common');
const { add_event, cb_enum } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');
const { attr_names } = require('#/data/train-const');

/**
 * @param {number} god_id
 * @returns {CustomizedCheck}
 */
module.exports = (god_id) => {
  class A extends CustomizedCheck {
    check_and_get_titles(aim_check) {
      const ret = super.check_and_get_titles(aim_check);
      if (aim_check && ret.length > 0) {
        new LifeEventMarks(god_id).set('buff', 1);
      }
      return ret;
    }

    check_love_events() {
      const love = era.get(`love:${god_id}`);
      if (
        love === 49 ||
        era.get(`cflag:${god_id}:招募状态`) === recruit_flags.yes
      ) {
        add_event(
          event_hooks.week_end,
          new EventObject(god_id, cb_enum.love).set_arg(love),
        );
      } else {
        era.set(`cflag:${god_id}:爱慕暂拒`, love);
      }
    }

    check_next_week() {
      const life_marks = new LifeEventMarks(god_id);
      if (era.get(`love:${god_id}`) >= 50 && !life_marks.get('love')) {
        add_event(
          event_hooks.week_end,
          new EventObject(god_id, cb_enum.love).set_arg(49),
        );
      }
      if (era.get(`cflag:${god_id}:招募状态`) < 0) {
        if (!era.add(`cflag:${god_id}:招募状态`, 1)) {
          era.set(`cflag:${god_id}:育成回合计时`, 'x');
          add_event(
            event_hooks.week_start,
            new EventObject(god_id, cb_enum.recruit),
          );
        }
      }
      super.check_next_week();
    }

    get_personal_action() {
      const god = get_chara_talk(this.id),
        me = get_chara_talk(0);
      return {
        name: '向女神祈祷',
        async handle() {
          const fame = era.get('flag:当前声望');
          era.printMultiColumns([
            { content: '要祈祷什么？', type: 'text' },
            ...[
              { c: 1000, n: '变得有名（1000 声望）' },
              { c: 500, n: '变得有钱（500 声望）' },
              {
                c: 200,
                d:
                  attr_names.findIndex(
                    (e) => era.get(`base:0:${e}`) < era.get(`maxbase:0:${e}`),
                  ) === -1,
                n: '变得更强（200 声望）',
              },
              { c: 50, n: '突破极限（50-500 声望）' },
              { c: 800, n: '恢复健康（800 声望）' },
            ].map((e, i) => ({
              accelerator: i + 1,
              config: { disabled: e.d || fame < e.c, width: 6 },
              content: e.n,
              type: 'button',
            })),
            { accelerator: 99, content: '还是算了', type: 'button' },
          ]);
          let ret = await era.input(),
            relation,
            temp_list;
          switch (ret) {
            case 1:
              if (
                await select_yes_or_no(
                  '确定吗？',
                  `确定（声望获取+${era.get('global:声望加成')}%->${era.get('global:声望加成') + 1}%）`,
                )
              ) {
                era.add('global:声望加成', 1);
                era.add('flag:当前声望', -1000);
                relation = 500;
              }
              break;
            case 2:
              if (
                await select_yes_or_no(
                  '确定吗？',
                  `确定（马币获取+${era.get('global:金钱加成')}%->${era.get('global:金钱加成') + 1}%）`,
                )
              ) {
                era.add('global:金钱加成', 1);
                era.add('flag:当前声望', -500);
                relation = 250;
              }
              break;
            case 3:
              era.print('想获得什么属性呢？');
              era.printMultiColumns([
                ...attr_names.map((e, i) => ({
                  accelerator: i,
                  content: `${e}（+80）`,
                  config: {
                    disabled:
                      era.get(`base:0:${e}`) === era.get(`maxbase:0:${e}`),
                    width: 6,
                  },
                  type: 'button',
                })),
                {
                  accelerator: 5,
                  content: '随便什么都可以！（随机属性+100）',
                  type: 'button',
                },
                { accelerator: 99, content: '还是算了', type: 'button' },
              ]);
              ret = await era.input();
              if (ret <= 5) {
                if (ret < 5) {
                  ret = sys_change_attr_and_print(0, ret, 80);
                } else {
                  ret = sys_change_attr_and_print(
                    0,
                    get_random_entry(
                      attr_names
                        .map((e, i) => [e, i])
                        .filter(
                          (e) =>
                            era.get(`base:0:${e[0]}`) <
                            era.get(`maxbase:0:${e[0]}`),
                        )
                        .map((e) => e[1]),
                    ),
                    100,
                  );
                }
                era.print([me.get_colored_name(), ' 的 ', ...ret, '！']);
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
                  ? attr_names.filter(
                      (e) =>
                        era.get(`maxbase:${cur_id}:${e}`) -
                          era.get(`base:${cur_id}:${e}`) <
                        50,
                    ).length >= 3 &&
                    attr_names.findIndex(
                      (e) => era.get(`maxbase:${cur_id}:${e}`) < 2000,
                    ) !== -1
                  : era.get(`status:${cur_id}:熬夜`) ||
                    era.get(`status:${cur_id}:发胖`) ||
                    era.get(`status:${cur_id}:偏头痛`) ||
                    era.get(`status:${cur_id}:伤病`) ||
                    era.get(`status:${cur_id}:疲惫`),
              );
              if (temp_list.length) {
                era.printMultiColumns([
                  { content: '请选择目标', type: 'text' },
                  ...temp_list.map((cur_id) => {
                    let cost;
                    if (ret === 4) {
                      cost = attr_names.filter(
                        (e) =>
                          era.get(`base:${cur_id}:${e}`) ===
                          era.get(`maxbase:${cur_id}:${e}`),
                      ).length;
                      cost =
                        cost >= 3 ? 50 : (3 - cost) * 100 + 200 * (cost === 0);
                    } else {
                      cost = 800;
                    }
                    return {
                      accelerator: cur_id,
                      config: { width: 12, disabled: fame < cost },
                      content:
                        era.get(`callname:${cur_id}:-2`) +
                        `（${cost} 声望${ret === 4 ? '，训练加成-10%' : ''}）`,
                      type: 'button',
                    };
                  }),
                  { accelerator: 9999, content: '取消', type: 'button' },
                ]);
                ret = [ret, 0];
                ret[1] = await era.input();
                if (ret[1] !== 9999) {
                  if (ret[0] === 4) {
                    let limited_count = 0;
                    attr_names.forEach((e) => {
                      limited_count +=
                        era.get(`base:${ret[1]}:${e}`) ===
                        era.get(`maxbase:${ret[1]}:${e}`);
                      era.set(
                        `maxbase:${ret[1]}:${e}`,
                        Math.min(2000, era.get(`maxbase:${ret[1]}:${e}`) + 100),
                      );
                      era.add(`cflag:${ret[1]}:${e}加成`, -10);
                    });
                    era.print([
                      get_chara_talk(ret[1]).get_colored_name(),
                      ' 似乎突破了极限……',
                    ]);
                    relation =
                      limited_count >= 3
                        ? 50
                        : (3 - limited_count) * 100 +
                          200 * (limited_count === 0);
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
                    sys_change_motivation(ret[1], 4);
                    era.set(`status:${ret[1]}:练习X手`, 1);
                    era.add('flag:当前声望', -800);
                    relation = 400;
                  }
                }
              } else {
                era.print('没有满足条件的目标……');
              }
          }
          if (relation) {
            era.print([
              god.get_colored_name(),
              ' 满足了 ',
              me.get_colored_name(),
              ' 的愿望',
            ]);
            era.println();
            CustomizedCheck.like_chara(god.id, 0, relation);
          } else {
            era.print([
              me.get_colored_name(),
              ' 放弃了向 ',
              god.get_colored_name(),
              ' 祈祷……',
            ]);
          }
        },
      };
    }

    is_prison() {
      if (era.get(`cflag:${god_id}:招募状态`) !== recruit_flags.yes) {
        return false;
      }
      return super.is_prison();
    }

    is_rape_in_sleeping() {
      if (era.get(`cflag:${god_id}:招募状态`) !== recruit_flags.yes) {
        return false;
      }
      return super.is_rape_in_sleeping();
    }
  }

  return A;
};
