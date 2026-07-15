const era = require('#/era-electron');

const { sys_get_chara } = require('#/system/chara/sys-calc-characteristic');
const sys_get_random_uma_god = require('#/system/chara/sys-get-random-uma-god');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { switch_image } = require('#/system/sys-calc-image');
const sys_get_random_event = require('#/system/sys-get-random-event');

const print_curr_chara = require('#/page/components/cur-chara-info');
const get_back_button_tip = require('#/page/components/get-back-button-tip');
const print_page_header = require('#/page/components/page-header');

const { get_custom_check } = require('#/event/check/check-factory');
const { add_event, cb_enum } = require('#/event/queue');
const {
  generate_common_dict,
} = require('#/event/snippets/generate-dictionary');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');

const { i18n, lan } = require('#/i18n/selector');

module.exports = async () => {
  era.set('flag:当前位置', location_enum.god);
  let flag_god = 1;
  let relation = 0;
  let god_id = sys_get_random_uma_god();
  let god = god_id ? get_chara_talk(god_id) : undefined;
  const cur_id = era.get('flag:当前互动角色');
  const aim = get_chara_talk(cur_id);
  const me = cur_id ? get_chara_talk(0) : aim;
  const life_marks = god_id ? LifeEventMarks.get_marks(god_id) : undefined;
  const common_uma_sex_title = era.get('flag:角色性别') === 1 ? '马郎' : '马娘';
  const aim_chara = cur_id > 0 ? sys_get_chara(cur_id) : 0;
  while (flag_god > 0) {
    await era.clear();
    print_page_header();
    if (cur_id) {
      print_curr_chara(cur_id);
    }
    era.drawLine();
    if (god_id > 0) {
      i18n().timon.god_shop.start(
        aim,
        god,
        me,
        flag_god !== 1,
        i18n().timon.god_shop.get_chara_react(aim, me, aim_chara),
      );
      era.drawLine();
      era.printMultiColumns([
        ...[
          {
            content: i18n().timon.god_shop.bt_pray_honour_buff,
            cost: 1000,
            type: 'button',
          },
          {
            content: i18n().timon.god_shop.bt_pray_money_buff,
            cost: 500,
            type: 'button',
          },
          {
            content: i18n().timon.god_shop.bt_pray_money,
            cost: 50,
            type: 'button',
          },
          {
            config: {
              disabled:
                cur_id ||
                new Array(5).fill(0).every(
                  (_, i) =>
                    // BASENAME:5 - 9 = 速度 - 智力
                    era.get(`base:0:${5 + i}`) >= era.get(`maxbase:0:${5 + i}`),
                ),
            },
            content: i18n().timon.god_shop.bt_pray_your_power,
            cost: 200,
            type: 'button',
          },
          {
            config: {
              disabled:
                new Array(5).fill(0).filter(
                  (_, i) =>
                    // BASENAME:5 - 9 = 速度 - 智力
                    era.get(`maxbase:${cur_id}:${5 + i}`) -
                      era.get(`base:${cur_id}:${5 + i}`) <=
                    50,
                ).length < 3 ||
                new Array(5).fill(0).every(
                  // BASENAME:5 - 9 = 速度 - 智力
                  (_, i) => era.get(`maxbase:${cur_id}:${5 + i}`) >= 2000,
                ),
            },
            content:
              aim.id > 0
                ? i18n().timon.god_shop.get_bt_pray_over_limit(aim.name)
                : i18n().timon.god_shop.bt_pray_self_over_limit,
            cost: 0,
            type: 'button',
          },
          {
            content:
              aim.id > 0
                ? i18n().timon.god_shop.get_bt_pray_heal(aim.name)
                : i18n().timon.god_shop.bt_pray_self_heal,
            cost: 800,
            type: 'button',
          },
          ...(life_marks.get('love') === 1
            ? [
                {
                  content: i18n().kojo[god_id].bt_pray,
                  config: {
                    buttonType: 'danger',
                  },
                  type: 'button',
                },
              ]
            : []),
        ].map((b, i) => {
          b.accelerator = i + 1;
          b.config ||= {};
          b.config.width = 12;
          b.config.disabled ||= era.get('flag:当前声望') <= b.cost;
          delete b.cost;
          return b;
        }),
        {
          accelerator: 99,
          config: get_back_button_tip(),
          content: i18n().ui_back,
          type: 'button',
        },
      ]);
      let temp = await era.input();
      if (temp === 99) {
        era.drawLine();
        await i18n().timon.god_shop.leave(aim, me, flag_god !== 1);
        flag_god = 0;
      } else if (temp === 990) {
        switch_image();
      } else {
        flag_god = 2;
        i18n().timon.god_shop.common_start_pray(aim, me);
        switch (temp) {
          case 1:
            if (
              (await i18n().timon.god_shop.pray_honour_buff(
                me,
                common_uma_sex_title,
                () => i18n().timon.god_shop.common_finish_pray(aim, me),
              )) === 1
            ) {
              era.add('global:声望加成', 1);
              era.add('flag:当前声望', -1000);
              relation += 500;
            } else {
              await i18n().timon.god_shop.common_pray_peace();
              await i18n().timon.god_shop.common_finish_pray(aim, me);
            }
            break;
          case 2:
            if (
              (await i18n().timon.god_shop.pray_money_buff(me, () =>
                i18n().timon.god_shop.common_finish_pray(aim, me),
              )) === 1
            ) {
              era.add('global:金钱加成', 1);
              era.add('flag:当前声望', -500);
              relation += 250;
            } else {
              await i18n().timon.god_shop.common_pray_peace();
              await i18n().timon.god_shop.common_finish_pray(aim, me);
            }
            break;
          case 3:
            temp = await i18n().timon.god_shop.pray_money(
              me,
              common_uma_sex_title,
              () => i18n().timon.god_shop.common_finish_pray(aim, me),
            );
            if (temp === 99) {
              await i18n().timon.god_shop.common_pray_peace();
              await i18n().timon.god_shop.common_finish_pray(aim, me);
            } else {
              era.add('flag:当前声望', -50 * temp);
              era.add('flag:当前马币', 250 * temp);
              relation += 25 * temp;
            }
            break;
          case 4:
            temp = new Array(5)
              .fill(0)
              .map(
                (_, i) =>
                  era.get(`base:0:${5 + i}`) >= era.get(`maxbase:0:${5 + i}`),
              );
            temp = await i18n().timon.god_shop.pray_your_power(
              me,
              god,
              common_uma_sex_title,
              temp,
              get_random_entry(
                temp
                  .map((b, i) => [b, i])
                  .filter(([b]) => !b)
                  .map((e) => e[1]),
              ),
              () => i18n().timon.god_shop.common_pray_your_power(me),
              () => i18n().timon.god_shop.common_finish_pray(aim, me),
            );
            if (temp[0] <= 5) {
              const attr = new Array(5).fill(0);
              attr[temp[1]] = 80;
              if (temp[0] === 5) {
                attr[temp[1]] += 20;
              }
              if (get_attr_and_print_in_event(0, attr)) {
                await era.waitAnyKey();
              }
              era.add('flag:当前声望', -200);
              relation += 100;
            }
            break;
          case 5:
            temp = [
              new Array(5).fill(0).filter(
                (_, i) =>
                  // BASENAME:5 - 9 = 速度 - 智力
                  era.get(`base:${cur_id}:${5 + i}`) ===
                  era.get(`maxbase:${cur_id}:${5 + i}`),
              ).length,
            ];
            temp.push(
              temp[0] >= 3 ? 50 : (3 - temp[0]) * 100 + 200 * (temp[0] === 0),
            );
            if (
              (await i18n().timon.god_shop.pray_over_limit(
                aim,
                me,
                common_uma_sex_title,
                temp[0].toString(),
                temp[1].toLocaleString(lan()),
              )) === 1
            ) {
              new Array(5).fill(0).forEach((_, i) => {
                // BASENAME:5 - 9 = 速度 - 智力
                era.set(
                  `maxbase:${cur_id}:${5 + i}`,
                  Math.min(2000, era.get(`maxbase:${cur_id}:${5 + i}`) + 100),
                );
                // CFLAGNAME:25 - 29 = 速度加成 - 智力加成
                era.add(`cflag:${cur_id}:${25 + i}`, -10);
              });
              era.add('flag:当前声望', -temp[1]);
              relation += temp[1] / 2;
            }
            break;
          case 6:
            if (
              era.get(`status:${cur_id}:熬夜`) ||
              era.get(`status:${cur_id}:发胖`) ||
              era.get(`status:${cur_id}:偏头痛`) ||
              era.get(`status:${cur_id}:伤病`) ||
              era.get(`status:${cur_id}:疲惫`)
            ) {
              if (
                (await i18n().timon.god_shop.pray_heal(
                  aim,
                  god,
                  me,
                  common_uma_sex_title,
                  i18n().timon.god_shop.get_chara_react(aim, me, aim_chara),
                  () => i18n().timon.god_shop.common_finish_pray(aim, me),
                )) === 1
              ) {
                era.set(`base:${cur_id}:体重偏差`, 0);
                era.set(`base:${cur_id}:药物残留`, 0);
                era.set(`base:${cur_id}:压力`, 0);
                era.set(`status:${cur_id}:熬夜`, 0);
                era.set(`status:${cur_id}:发胖`, 0);
                era.set(`status:${cur_id}:偏头痛`, 0);
                era.set(`status:${cur_id}:伤病`, 0);
                era.set(`status:${cur_id}:疲惫`, 0);
                era.set(`status:${cur_id}:练习X手`, 2);
                get_custom_check(cur_id).check_lay_on_hands();
                sys_change_motivation(cur_id, 4);
                await era.waitAnyKey();
                era.add('flag:当前声望', -800);
                relation += 400;
              }
            } else {
              await i18n().timon.god_shop.pray_heal_no_need(aim, me, () =>
                i18n().timon.god_shop.common_finish_pray(aim, me),
              );
            }
            break;
          case 7:
            await i18n().kojo[god_id].love['pray'](generate_common_dict());
            life_marks.add('love');
            add_event(
              event_hooks.week_end,
              new EventObject(god_id, cb_enum.love).set_arg(50),
            );
        }
      }
    } else {
      flag_god = -1;
      god_id = get_random_entry(
        new Array(3)
          .fill(0)
          .map((_, i) => 340 + i)
          .filter(
            (e) =>
              era.get(`cflag:${e}:招募状态`) === recruit_flags.yes &&
              sys_check_awake(e) &&
              era.get(`cflag:${e}:位置`) === era.get('cflag:0:位置'),
          ),
      );
      await i18n().timon.god_shop.start_with_no_god(
        me,
        god_id > 0 && get_chara_talk(god_id),
      );
      if (god_id > 0) {
        era.set('flag:当前互动角色', god_id);
      }
    }
  }
  if (relation && sys_like_chara(god_id, 0, relation)) {
    await era.waitAnyKey();
  }
  era.set('flag:当前位置', location_enum.office);
  era.println();
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.god,
  });
};
