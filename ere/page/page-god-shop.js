const era = require('#/era-electron');

const sys_get_random_uma_god = require('#/system/chara/sys-get-random-uma-god');
const {
  sys_change_attr_and_print,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const sys_get_random_event = require('#/system/sys-get-random-event');

const print_curr_chara = require('#/page/components/cur-chara-info');
const print_page_header = require('#/page/components/page-header');
const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { add_event, cb_enum } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { money_color } = require('#/data/color-const');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { location_enum } = require('#/data/locations');
const { attr_names } = require('#/data/train-const');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const button_contents = ['请求帮助', '探寻微笑', '痴迷注视'];

module.exports = async () => {
  era.set('flag:当前位置', location_enum.god);
  let flag_god = true,
    relation = 0,
    god_id = sys_get_random_uma_god(),
    god = god_id ? get_chara_talk(god_id) : undefined;
  const cur_id = era.get('flag:当前互动角色'),
    aim = get_chara_talk(cur_id),
    me = cur_id ? get_chara_talk(0) : aim,
    life_marks = god_id ? new LifeEventMarks(god_id) : undefined;
  while (flag_god) {
    await era.clear();
    print_page_header();
    if (cur_id) {
      print_curr_chara(cur_id);
    }
    era.drawLine();
    if (god_id) {
      god.say_as_unknown('……');
      era.print('三女神像的上面传来了谜一样的气息……');
      era.print(['有谁在注视着 ', me.get_colored_name(), '……']);
      era.drawLine();
      era.printMultiColumns([
        ...[
          { content: '祈祷变得有名（1000 声望）', cost: 1000, type: 'button' },
          { content: '祈祷变得有钱（500 声望）', cost: 500, type: 'button' },
          { content: '祈祷马上有钱（50+ 声望）', cost: 50, type: 'button' },
          {
            config: {
              disabled:
                cur_id ||
                attr_names.findIndex(
                  (e) => era.get(`base:0:${e}`) < era.get(`maxbase:0:${e}`),
                ) === -1,
            },
            content: '祈祷变得更强（200 声望）',
            cost: 200,
            type: 'button',
          },
          {
            config: {
              disabled:
                attr_names.filter(
                  (e) =>
                    era.get(`maxbase:${cur_id}:${e}`) -
                      era.get(`base:${cur_id}:${e}`) <
                    50,
                ).length < 3 ||
                attr_names.findIndex(
                  (e) => era.get(`maxbase:${cur_id}:${e}`) < 2000,
                ) === -1,
            },
            content: `祈祷${cur_id ? ` ${aim.name} ` : ''}突破极限（50-500 声望）`,
            cost: 0,
            type: 'button',
          },
          {
            content: `祈祷${cur_id ? ` ${aim.name} ` : ''}恢复健康（800 声望）`,
            cost: 200,
            type: 'button',
          },
          life_marks.get('love') === 1
            ? {
                content: button_contents[god_id - 340],
                config: {
                  buttonType: 'danger',
                },
                type: 'button',
              }
            : {},
        ]
          .filter((e) => e)
          .map((e, i) => {
            e.accelerator = i + 1;
            e.config ||= {};
            e.config.width = 8;
            e.config.disabled ||= era.get('flag:当前声望') <= e.cost;
            delete e.cost;
            return e;
          }),
        { accelerator: 99, content: '离开', type: 'button' },
      ]);
      let temp;
      switch (await era.input()) {
        case 1:
          if (
            await select_yes_or_no(
              '确定吗？三女神像散发着这样的气息……',
              `确定（声望获取+${era.get('global:声望加成')}%->${era.get('global:声望加成') + 1}%）`,
            )
          ) {
            era.add('global:声望加成', 1);
            era.add('flag:当前声望', -1000);
            relation += 500;
          } else {
            await era.printAndWait('三女神像不动……');
          }
          break;
        case 2:
          if (
            await select_yes_or_no(
              '确定吗？三女神像散发着这样的气息……',
              `确定（马币获取+${era.get('global:金钱加成')}%->${era.get('global:金钱加成') + 1}%）`,
            )
          ) {
            era.add('global:金钱加成', 1);
            era.add('flag:当前声望', -500);
            relation += 250;
          } else {
            await era.printAndWait('三女神像不动……');
          }
          break;
        case 3:
          era.print('（继续祈祷……想要多少马币呢？）');
          era.printMultiColumns([
            ...[
              { content: '250马币', type: 'button' },
              { content: '500马币', type: 'button' },
              { content: '750马币', type: 'button' },
              { content: '1000马币', type: 'button' },
            ].map((e, i) => {
              e.accelerator = i + 1;
              e.config = {
                disabled: era.get('flag:当前声望') <= 50 * (i + 1),
                width: 6,
              };
              return e;
            }),
            { accelerator: 99, content: '还是算了', type: 'button' },
          ]);
          temp = await era.input();
          switch (temp) {
            case 1:
            case 2:
            case 3:
            case 4:
              await era.printAndWait([
                '三女神像好像突然变得刺眼了一下，',
                me.get_colored_name(),
                ' 随后收到了特雷森方面的通知，补发了 ',
                {
                  color: money_color,
                  content: (250 * temp).toLocaleString(),
                },
                ' 马币的额外补贴',
              ]);
              await era.printAndWait([
                '不知为什么，',
                me.get_colored_name(),
                ' 感觉那条消息隐隐带着鄙视的情绪……',
              ]);
              era.add('flag:当前声望', -50 * temp);
              era.add('flag:当前马币', 250 * temp);
              relation += 25 * temp;
              break;
            default:
              await era.printAndWait('三女神像不动……');
          }
          break;
        case 4:
          era.print('（继续祈祷……想获得什么属性呢？）');
          era.printMultiColumns([
            ...attr_names.map((e, i) => ({
              accelerator: i,
              content: `${e}（+80）`,
              config: {
                disabled: era.get(`base:0:${e}`) === era.get(`maxbase:0:${e}`),
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
          temp = await era.input();
          switch (temp) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
              temp = sys_change_attr_and_print(0, temp, 80);
              break;
            case 5:
              temp = sys_change_attr_and_print(
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
              break;
            default:
              await era.printAndWait('三女神像不动……');
          }
          if (temp instanceof Array) {
            await era.printAndWait([
              me.get_colored_name(),
              ' 的 ',
              ...temp,
              '……但代价呢？',
            ]);
            era.add('flag:当前声望', -200);
            relation += 100;
          }
          break;
        case 5:
          temp = [
            attr_names.filter(
              (e) =>
                era.get(`base:${cur_id}:${e}`) ===
                era.get(`maxbase:${cur_id}:${e}`),
            ).length,
          ];
          temp.push(temp >= 3 ? 50 : (3 - temp) * 100 + 200 * (temp[0] === 0));
          if (
            await select_yes_or_no(
              `${aim.name} 有 ${temp[0]} 项属性到达极限，突破界限吗？（${temp[1]} 声望，训练加成-10%）`,
            )
          ) {
            attr_names.forEach((e) => {
              era.set(
                `maxbase:${cur_id}:${e}`,
                Math.min(2000, era.get(`maxbase:${cur_id}:${e}`) + 100),
              );
              era.add(`cflag:${cur_id}:${e}加成`, -10);
            });
            await era.printAndWait([
              aim.get_colored_name(),
              ' 似乎突破了极限……',
            ]);
            era.add('flag:当前声望', -temp[1]);
            relation += temp[1] / 2;
          } else {
            await era.printAndWait('三女神像不动……');
          }
          break;
        case 6:
          if (
            (era.get(`status:${cur_id}:熬夜`) ||
              era.get(`status:${cur_id}:发胖`) ||
              era.get(`status:${cur_id}:头风`) ||
              era.get(`status:${cur_id}:伤病`) ||
              era.get(`status:${cur_id}:疲惫`)) &&
            (await select_yes_or_no(`确定要恢复 ${aim.name} 的健康吗？`))
          ) {
            era.set(`base:${cur_id}:体重偏差`, 0);
            era.set(`base:${cur_id}:药物残留`, 0);
            era.set(`base:${cur_id}:压力`, 0);
            era.set(`status:${cur_id}:熬夜`, 0);
            era.set(`status:${cur_id}:发胖`, 0);
            era.set(`status:${cur_id}:头风`, 0);
            era.set(`status:${cur_id}:伤病`, 0);
            era.set(`status:${cur_id}:疲惫`, 0);
            sys_change_motivation(cur_id, 4) && (await era.waitAnyKey());
            era.set(`status:${cur_id}:练习X手`, 1);
            era.add('flag:当前声望', -800);
            relation += 400;
          } else {
            await era.printAndWait('三女神像不动……');
          }
          break;
        case 7:
          switch (god_id) {
            case 340:
              await me.say_and_wait('啊，请帮帮我吧女神大人——');
              await era.printAndWait([
                '忍不住向',
                era.get('flag:角色性别') - 1 ? '马娘' : '马郎',
                '一样在三女神雕像下祈祷了——虽然只是就这么放着不管也没关系的撒娇似的许愿。',
              ]);
              await era.printAndWait([
                '……是错觉吗？那理应平直地向前看着，朝着远方的女神大人的目光，弯成了好看的弧度向 ',
                me.get_colored_name(),
                ' 降下了。',
              ]);
              await era.printAndWait('而且被笑了。');
              break;
            case 341:
            case 342:
              await era.printAndWait('痴迷注视着……');
              await era.printAndWait([
                { color: god.color, content: '女神像' },
                ' 不动……',
              ]);
          }
          life_marks.add('love');
          add_event(
            event_hooks.week_end,
            new EventObject(god_id, cb_enum.love).set_arg(50),
          );
          break;
        case 99:
          flag_god = false;
      }
    } else {
      flag_god = false;
      await era.printAndWait('三女神像静静矗立着……');
      god_id = get_random_entry(
        new Array(3)
          .fill(0)
          .map((_, i) => 340 + i)
          .filter(
            (e) =>
              sys_check_awake(e) &&
              era.get(`cflag:${e}:位置`) === era.get('cflag:0:位置'),
          ),
      );
      if (god_id) {
        god = get_chara_talk(god_id);
        await era.printAndWait([
          me.get_colored_name(),
          ' 突然听到背后有人打招呼……',
        ]);
        await era.printAndWait([
          '回过头才发现 ',
          god.get_colored_name(),
          ' 不知何时已站到了 ',
          me.get_colored_name(),
          ' 身后……',
        ]);
        era.set('flag:当前互动角色', god_id);
      }
    }
  }
  if (relation && sys_like_chara(god_id, 0, relation)) {
    await era.waitAnyKey();
  }
  era.set('flag:当前位置', location_enum.office);
  await era.printAndWait('回去了……');
  era.println();
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.god,
  });
};
