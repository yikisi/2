const {
  add,
  clear,
  drawLine,
  get,
  input,
  print,
  printAndWait,
  printInColRows,
  set,
  setHorizontalAlign,
  waitAnyKey,
} = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { sys_change_money } = require('#/system/sys-calc-flag');
const { get_image } = require('#/system/sys-calc-image');
const sys_get_random_event = require('#/system/sys-get-random-event');

const get_back_button_tip = require('#/page/components/get-back-button-tip');
const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_custom_check } = require('#/event/check/check-factory');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const get_display_name = require('#/utils/calc-display-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaTitles = require('#/data/chara-titles');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const loc_characters = require('#/data/event/loc-characters');
const moon_well = require('#/data/event/moon-well');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_celebration } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { vehicle_enum } = require('#/data/move-const');
const { base_attr_list } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

async function page_moon_well(cid, print_out_page) {
  let flag_page = true;
  let flag_npc = true;
  await clear();
  print_page_header();
  drawLine();
  const vehicle =
    cid > 0
      ? get('flag:多人载具')
      : get('flag:多人载具') || get('flag:单人载具');
  print(
    di18n.timon.get_it_goto_location(
      get_chara_talk(cid),
      vehicle_enum.keys[vehicle - 1],
      location_enum.keys[location_enum.moon_well],
    ),
  );
  let npc_list = loc_characters.get(location_enum.moon_well);
  if (npc_list.length > 0) {
    const celebration = get_celebration();
    while (flag_page) {
      setHorizontalAlign('space-around');
      printInColRows(
        [{ content: i18n().timon.npc_select, type: 'text' }],
        ...npc_list.map((cid) => ({
          columns: [
            {
              names: get_image(cid)
                .map((e) => `${e}_半身`)
                .join('\t'),
              type: 'image.whole',
            },
            {
              accelerator: cid,
              config: {
                align: 'center',
                buttonType:
                  EventMarks.get(cid).count() > 0 ? 'danger' : 'warning',
              },
              content: get_display_name(get(`callname:${cid}:-2`)),
              type: 'button',
            },
          ],
          config: { width: 4 },
        })),
        [
          {
            accelerator: 999,
            config: get_back_button_tip(),
            content: i18n().ui_back,
            type: 'button',
          },
        ],
      );
      setHorizontalAlign('start');
      const ret = await input();
      if (ret !== 999) {
        const chara = get_chara_talk(ret);
        const { other, rec_cond } =
          chara.id === 350
            ? { other: 351, rec_cond: 25 }
            : { other: 350, rec_cond: 40 };
        const title = CharaTitles.get(ret).get_colored_curr_title();
        flag_npc = true;
        while (flag_npc) {
          const temp_flag = await npc_common(
            chara,
            title,
            {
              async handle() {},
              name: di18n.kojo.get_npc_talk(chara.id),
            },
            {
              d: cid > 0,
              loc: location_enum.hot_spring,
              name: di18n.kojo.get_npc_sex(chara.id),
              fail_cb: () => (flag_npc = flag_page = false),
            },
            {
              d: cid > 0,
              loc: location_enum.moon_well,
              name: di18n.kojo.get_npc_out(chara.id),
              print_out_page,
            },
            {
              d: cid > 0,
              name: di18n.kojo.get_npc_celebration(chara.id, celebration),
            },
            get(`cflag:${chara.id}:招募状态`) !== recruit_flags.yes &&
              get(`love:${chara.id}`) >= rec_cond
              ? {
                  name: i18n().timon.npc_recruit_out_school,
                  handle() {
                    set(
                      `callname:${chara.id}:-2`,
                      get(`callname:${chara.id}:-1`),
                    );
                    set(`cflag:${chara.id}:招募状态`, recruit_flags.yes);
                    return i18n().timon.recruit.rec_end(chara);
                  },
                }
              : {
                  name: i18n().kojo[chara.id].npc_func,
                  disabled:
                    moon_well.times > 0 &&
                    get('flag:当前马币') < moon_well.cost,
                  title:
                    moon_well.times > 0 && get('flag:当前马币') < moon_well.cost
                      ? i18n().ui_cost_money_tip_template.replace(
                          '%MONEY%',
                          moon_well.cost.toString(),
                        )
                      : void 0,
                  async handle() {
                    if (!moon_well.times) {
                      await i18n().kojo[chara.id].daily['moon_well_disabled']({
                        CD_REST: Math.ceil(
                          moon_well.cooldown / moon_well.limit,
                        ).toString(),
                      });
                    } else {
                      const rec_me =
                        get(`cflag:${chara.id}:招募状态`) === recruit_flags.yes;
                      const rec_other =
                        get(`cflag:${other}:招募状态`) === recruit_flags.yes;
                      let key;
                      if (rec_me && rec_other) {
                        key = 'mw_welcome_rec_all';
                      } else if (rec_me) {
                        key = 'mw_welcome_rec_me';
                      } else if (rec_other) {
                        key = 'mw_welcome_rec_other';
                      } else {
                        key = 'mw_welcome';
                      }
                      i18n().kojo[chara.id].daily[key]({
                        ...generate_dictionary(chara.id),
                        COST: moon_well.cost.toString(),
                        OTHER: get_chara_talk(other).name,
                        TIMES: moon_well.times.toString(),
                      });
                      if (await select_yes_or_no('')) {
                        for (const c of [0, cid > 0 && cid]) {
                          if (c !== false) {
                            set(`base:${c}:药物残留`, 0);
                            set(
                              `base:${c}:压力`,
                              get(`base:${c}:压力`) / (1 + moon_well.limit),
                            );
                            set(`status:${c}:熬夜`, 0);
                            set(`status:${c}:偏头痛`, 0);
                            set(`status:${c}:伤病`, 0);
                            set(`status:${c}:疲惫`, 0);
                            if (get(`cflag:${c}:育成回合计时`) < 3 * 48) {
                              add(
                                `status:${c}:练习X手`,
                                Math.min(get(`status:${c}:练习X手`) + 1, 2),
                              );
                            }
                            if (c > 0) {
                              get_custom_check(c).check_lay_on_hands();
                            }
                            all_reward_in_event(c, {
                              motivation: 2,
                              relation: 20,
                              love: 1,
                              base: [
                                get(`maxbase:${c}:体力`),
                                Math.min(
                                  (get(`maxbase:${c}:精力`) -
                                    get(`base:${c}:精力`)) /
                                    2,
                                  200,
                                ),
                              ],
                            });
                            const train_buff =
                              (LifeEventMarks.get_marks(350).buff > 0) +
                              (LifeEventMarks.get_marks(351).buff > 0);
                            if (
                              train_buff > 0 &&
                              (!c || get(`cflag:${c}:育成回合计时`) < 3 * 48)
                            ) {
                              // CFLAGNAME:25 - 29 = 速度加成 - 智力加成
                              base_attr_list.forEach((a) =>
                                set(
                                  `cflag:${c}:${25 + a}`,
                                  Math.min(
                                    get(`cflag:${c}:${25 + a}`) + train_buff,
                                    100,
                                  ),
                                ),
                              );
                            }
                          }
                        }
                        sys_change_money(-moon_well.cost, cid);
                        moon_well.times--;
                        npc_list.forEach(
                          (c) =>
                            get(`cflag:${c}:招募状态`) === recruit_flags.no &&
                            sys_like_chara(c, 0, 60),
                        );
                        await waitAnyKey();
                      }
                    }
                  },
                },
            { name: di18n.kojo.get_npc_bye(chara.id) },
          );
          if ((flag_npc &&= temp_flag)) {
            await clear();
            print_page_header();
          }
        }
        npc_list = npc_list.filter(sys_check_awake);
        flag_page &= npc_list.length > 0;
      } else {
        flag_page = false;
      }
      if (flag_page) {
        await clear();
        print_page_header();
        drawLine();
        if (cid > 0) {
          print(i18n().timon.get_it_moon_well_together(get_chara_talk(cid)));
        }
      }
    }
  } else {
    drawLine();
    await printAndWait(i18n().timon.it_force_back_office);
  }
  loc_characters.set(location_enum.moon_well, npc_list);
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.moon_well,
  });
  set('flag:当前位置', location_enum.office);
}

module.exports = page_moon_well;
