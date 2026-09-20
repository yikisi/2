const era = require('#/era-electron');

const { check_chara_ero_image } = require('#/system/ero/sys-calc-ero-image');
const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const {
  bhc_names,
  buff_colors,
  get_hair_color,
  hc_names,
} = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { mark_colors, slavery_enum } = require('#/data/ero/mark-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const {
  pregnant_stage_enum,
  unexpected_pregnant_enum,
  vp_status_enum,
} = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const extra_base = require('#/data/extra-base');
const {
  get_breast_cup,
  get_filtered_talents,
} = require('#/data/info-generator');

const di18n = require('#/i18n/extended-def');
const { __, i18n, lan } = require('#/i18n/selector');

/**
 * @this {CallOfMejiro}
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 */
async function cum_shop(chara, me) {
  const mayor = get_chara_talk(13);
  const waiters = [
    get_chara_talk(27),
    get_chara_talk(59),
    get_chara_talk(64),
    get_chara_talk(71),
    get_chara_talk(74),
    get_chara_talk(86),
  ];
  const easter_egg = era.get('flag:彩蛋机制');
  const say_by_waiter = (v) => get_random_entry(waiters).say_as_unknown(v);
  const say_by_waiter_and_wait = (v) =>
    get_random_entry(waiters).say_as_unknown_and_wait(v);
  let flag = true;
  let money = era.get('item:「恩宠」');
  const print_money_divider = () =>
    era.drawLine({
      content: i18n().timon.cum.money_header_template.replace(
        '%MONEY%',
        Object(money).toLocaleString(lan()),
      ),
    });
  while (flag) {
    await era.clear();
    this.page_header(chara);
    era.drawLine();
    i18n().timon.cum.print_city_info(chara, me);
    era.drawLine();
    const buttons = [
      {
        c: i18n().timon.cum.city_bt_beauty_salon,
        async h() {
          // 染发染毛
          // 人类改造成马娘
          await say_by_waiter_and_wait(i18n().timon.cum.city_bs_welcome);
          const lines = era.getLineCount();
          let _flag = true;
          let target = chara;
          while (_flag) {
            await era.clear(era.getLineCount() - lines);
            print_money_divider();
            const buttons = [];
            const height = era.get(`cflag:${target.id}:身高`);
            const change_height = (new_height) => {
              era.set(`cflag:${target.id}:身高`, new_height);
              era.set(
                `cflag:${target.id}:腰围`,
                (new_height * era.get(`cflag:${target.id}:腰围`)) / height,
              );
              era.set(
                `cflag:${target.id}:臀围`,
                (new_height * era.get(`cflag:${target.id}:臀围`)) / height,
              );
              if (target.sex_code === 1) {
                era.set(
                  `cflag:${target.id}:胸围`,
                  (new_height * era.get(`cflag:${target.id}:胸围`)) / height,
                );
              } else {
                era.set(
                  `cflag:${target.id}:胸围`,
                  era.get(`cflag:${target.id}:胸围`) -
                    era.get(`cflag:${target.id}:下胸围`) +
                    era.set(
                      `cflag:${target.id}:下胸围`,
                      (new_height * era.get(`cflag:${target.id}:下胸围`)) /
                        height,
                    ),
                );
              }
            };
            buttons.push(
              {
                c: i18n().timon.cum.city_bs_height_up_template.replace(
                  '%HEIGHT%',
                  (height + 1).toString(),
                ),
                t:
                  height >= 229 && i18n().timon.cum.city_bs_height_up_limit_tip,
                h() {
                  money = era.add('item:「恩宠」', -10);
                  change_height(height + 1);
                },
              },
              {
                c: i18n().timon.cum.city_bs_height_up_template.replace(
                  '%HEIGHT%',
                  (height - 1).toString(),
                ),
                t:
                  height <= 135 &&
                  i18n().timon.cum.city_bs_height_down_limit_tip,
                h() {
                  money = era.add('item:「恩宠」', -10);
                  change_height(height - 1);
                },
              },
              void 0,
            );
            if (target.sex_code !== 1) {
              const delta =
                  era.get(`cflag:${target.id}:胸围`) -
                  era.get(`cflag:${target.id}:下胸围`),
                cup = get_breast_cup(target.id);
              buttons.push({
                c: i18n().timon.cum.city_bs_boob_up_template.replace(
                  '%CUP%',
                  cup,
                ),
                t: delta >= 22.5 && i18n().timon.cum.city_bs_boob_up_limit_tip,
                h() {
                  money = era.add('item:「恩宠」', -5);
                  era.add(`cflag:${target.id}:胸围`, 1);
                },
              });
              buttons.push({
                c: i18n().timon.cum.city_bs_boob_down_template.replace(
                  '%CUP%',
                  cup,
                ),
                t: delta <= 5 && i18n().timon.cum.city_bs_boob_down_limit_tip,
                h() {
                  money = era.add('item:「恩宠」', -5);
                  era.add(`cflag:${target.id}:胸围`, -1);
                },
              });
              const breast_size = era.get(`talent:${target.id}:乳头类型`);
              if (breast_size === 0) {
                buttons.push({
                  c: i18n().timon.cum.city_bs_nipple_deeper,
                  h() {
                    money = era.add('item:「恩宠」', -5);
                    era.add(`talent:${target.id}:乳头类型`, 1);
                  },
                });
              } else {
                buttons.push({
                  c: i18n().timon.cum.city_bs_nipple_shallower,
                  h() {
                    money = era.add('item:「恩宠」', -5);
                    era.add(`talent:${target.id}:乳头类型`, -1);
                  },
                });
              }
              const milk_status = era.get(`talent:${target.id}:泌乳`);
              if (milk_status === 3) {
                buttons.push({
                  c: i18n().timon.cum.city_bs_clean_milk,
                  async h() {
                    const inmon = CharaInmon.get(target.id);
                    if (inmon.slave === slavery_enum.milk) {
                      say_by_waiter(
                        i18n().timon.cum.city_bs_clean_milk_confirm,
                      );
                      if (await select_yes_or_no([])) {
                        inmon.slave = 0;
                      } else {
                        return;
                      }
                    }
                    money = era.add('item:「恩宠」', -30);
                    era.set(`talent:${target.id}:泌乳`, 0);
                  },
                });
              } else if (milk_status === 0) {
                buttons.push({
                  c: i18n().timon.cum.city_bs_get_milk,
                  h() {
                    money = era.add('item:「恩宠」', -30);
                    era.set(`talent:${target.id}:泌乳`, 3);
                  },
                });
              }
              if (
                era.get(`talent:${target.id}:处女`) === vp_status_enum.no &&
                era.get(`talent:${target.id}:妊娠阶段`) ===
                  1 << pregnant_stage_enum.no
              ) {
                buttons.push({
                  c: i18n().timon.cum.city_bs_re_virgin,
                  h() {
                    money = era.add('item:「恩宠」', -20);
                    era.set(`talent:${target.id}:处女`, vp_status_enum.reborn);
                  },
                });
              }
            }
            buttons.push(void 0);
            if (
              !era.get(`status:${target.id}:弗隆K`) &&
              !era.get(`status:${target.id}:弗隆P`)
            ) {
              // CFLAGNAME:4 = 阴茎尺寸
              const penis_size = era.get(`cflag:${target.id}:4`);
              const cur_desc =
                di18n.feature.n_penis[get_penis_size(target.id)] ||
                i18n().name.female;
              buttons.push(
                {
                  c: (target.sex_code === 0
                    ? i18n().timon.cum.city_bs_penis_bigger_woman_template
                    : i18n().timon.cum.city_bs_penis_bigger_man_template
                  ).replace('%SIZE%', cur_desc),
                  t:
                    penis_size >= 5 &&
                    i18n().timon.cum.city_bs_penis_bigger_limit_tip,
                  h() {
                    money = era.add('item:「恩宠」', -10);
                    era.add(`cflag:${target.id}:阴茎尺寸`, 1);
                    if (target.sex_code === 0) {
                      money = era.add('item:「恩宠」', -5);
                      era.set(
                        `talent:${target.id}:早泄`,
                        Math.max(
                          era.get(`talent:${target.id}:早泄`),
                          era.get(`talent:${target.id}:淫核`),
                        ),
                      );
                      era.set(`talent:${target.id}:淫核`, 0);
                      era.set(`cflag:${target.id}:性别`, 10);
                      const inmon = CharaInmon.get(target.id);
                      for (let i = 1; i <= 3; ++i) {
                        if (inmon.on(plugin_enum[`cl_u${i}`])) {
                          inmon.set(plugin_enum[`cl_u${i}`], 0);
                          inmon.set(plugin_enum[`pe_u${i}`], 1);
                        }
                        if (inmon.on(plugin_enum[`cl_d${i}`])) {
                          inmon.set(plugin_enum[`cl_d${i}`], 0);
                          inmon.set(plugin_enum[`pe_d${i}`], 1);
                        }
                      }
                    }
                  },
                },
                {
                  c: (target.sex_code === 10 && penis_size === 1
                    ? i18n().timon.cum.city_bs_penis_smaller_futa_template
                    : i18n().timon.cum.city_bs_penis_smaller_man_template
                  ).replace('%SIZE%', cur_desc),
                  t:
                    penis_size === +(target.sex_code === 1) &&
                    (penis_size === 0
                      ? i18n().timon.cum.city_bs_penis_smaller_female_limit_tip
                      : i18n().timon.cum.city_bs_penis_smaller_male_limit_tip),
                  h() {
                    money = era.add('item:「恩宠」', -10);
                    era.add(`cflag:${target.id}:阴茎尺寸`, -1);
                    if (target.sex_code === 10 && penis_size === 1) {
                      money = era.add('item:「恩宠」', -5);
                      era.set(
                        `talent:${target.id}:淫核`,
                        Math.max(
                          era.get(`talent:${target.id}:早泄`),
                          era.get(`talent:${target.id}:淫核`),
                        ),
                      );
                      era.set(`talent:${target.id}:早泄`, 0);
                      era.set(`cflag:${target.id}:性别`, 0);
                      era.set(`talent:${target.id}:凶器`, 0);
                      const inmon = CharaInmon.get(target.id);
                      for (let i = 1; i <= 3; ++i) {
                        if (inmon.on(plugin_enum[`pe_u${i}`])) {
                          inmon.set(plugin_enum[`pe_u${i}`], 0);
                          inmon.set(plugin_enum[`cl_u${i}`], 1);
                        }
                        if (inmon.on(plugin_enum[`pe_d${i}`])) {
                          inmon.set(plugin_enum[`pe_d${i}`], 0);
                          inmon.set(plugin_enum[`cl_d${i}`], 1);
                        }
                      }
                      if (inmon.on(plugin_enum.pe_up_0)) {
                        inmon.set(plugin_enum.pe_up_0, 0);
                      }
                      if (inmon.on(plugin_enum.pe_up_1)) {
                        inmon.set(plugin_enum.pe_up_1, 0);
                      }
                    }
                  },
                },
              );
            }
            const clitoris_size = era.get(`talent:${target.id}:茎核类型`);
            buttons.push(
              {
                c: i18n().timon.cum.city_bs_ero_shallower,
                t:
                  clitoris_size === 0 &&
                  i18n().timon.cum.city_bs_ero_shallower_limit_tip,
                h() {
                  money = era.add('item:「恩宠」', -5);
                  era.add(`talent:${target.id}:茎核类型`, -1);
                },
              },
              {
                c: i18n().timon.cum.city_bs_ero_deeper,
                t:
                  clitoris_size === 2 &&
                  i18n().timon.cum.city_bs_ero_deeper_limit_tip,
                h() {
                  money = era.add('item:「恩宠」', -5);
                  era.add(`talent:${target.id}:茎核类型`, 1);
                },
              },
            );
            buttons.push(void 0);
            const custom_enabled = !check_chara_ero_image(target.id);
            if (custom_enabled) {
              // CFLAGNAME:10 = 肤色深度
              const skin_status = era.get(`cflag:${target.id}:10`);
              buttons.push(
                {
                  c: i18n().timon.cum.city_bs_skin_shallower_template.replace(
                    '%SKIN%',
                    di18n.feature.n_skin[skin_status + 1],
                  ),
                  t:
                    skin_status === -1 &&
                    i18n().timon.cum.city_bs_skin_shallower_limit_tip,
                  h() {
                    money = era.add('item:「恩宠」', -5);
                    era.add(`cflag:${target.id}:肤色深度`, -1);
                  },
                },
                {
                  c: i18n().timon.cum.city_bs_skin_deeper_template.replace(
                    '%SKIN%',
                    di18n.feature.n_skin[skin_status + 1],
                  ),
                  t:
                    skin_status === 2 &&
                    i18n().timon.cum.city_bs_skin_deeper_limit_tip,
                  h() {
                    money = era.add('item:「恩宠」', -5);
                    era.add(`cflag:${target.id}:肤色深度`, 1);
                  },
                },
                {
                  c: i18n().timon.cum.city_bs_hair_color,
                  async h() {
                    const curr_color = era.get(`cstr:${target.id}:发色`);
                    say_by_waiter(i18n().timon.cum.city_bs_hair_color_confirm);
                    era.printMultiColumns(
                      hc_names.map((hc, i) => ({
                        accelerator: i + 1,
                        config: { color: get_hair_color(hc), width: 6 },
                        content:
                          __(`feature.hc_${hc}`) +
                          (curr_color === hc
                            ? i18n().timon.cum.city_bs_hair_color_current_suffix
                            : ''),
                        type: 'button',
                      })),
                    );
                    const ret = await era.input();
                    era.set(`cstr:${target.id}:发色`, hc_names[ret - 1]);
                  },
                },
              );
            }
            buttons.push(void 0);
            if (era.get(`cflag:${target.id}:种族`) === 0) {
              buttons.push({
                c: i18n().timon.cum.city_bs_uma_template.replace(
                  '%UMA%',
                  target.uma_sex_title,
                ),
                h() {
                  money = era.add('item:「恩宠」', -100);
                  era.set(`cflag:${target.id}:种族`, 1);
                  era.set(
                    `cstr:${target.id}:毛色`,
                    era.get(`cstr:${target.id}:毛色`) ||
                      get_random_entry(bhc_names),
                  );
                  era.set(`cflag:${target.id}:可再次育成`, 1);
                  if (easter_egg === 179 || easter_egg === 621) {
                    era.set(`talent:${target.id}:病娇`, 1);
                  }
                },
              });
            } else if (custom_enabled) {
              buttons.push({
                c: i18n().timon.cum.city_bs_body_hair_color,
                async h() {
                  const curr_color = era.get(`cstr:${target.id}:毛色`);
                  say_by_waiter(i18n().timon.cum.city_bs_hair_color_confirm);
                  era.printMultiColumns(
                    bhc_names.map((bhc, i) => ({
                      accelerator: i + 1,
                      config: { color: get_hair_color(bhc), width: 6 },
                      content:
                        __(`feature.hc_${bhc}`) +
                        (curr_color === bhc
                          ? i18n().timon.cum
                              .city_bs_body_hair_color_current_suffix
                          : ''),
                      type: 'button',
                    })),
                  );
                  const ret = await era.input();
                  if (
                    curr_color !==
                    era.set(`cstr:${target.id}:毛色`, bhc_names[ret - 1])
                  ) {
                    money = era.add('item:「恩宠」', -1);
                  }
                },
              });
            }

            const filtered_buttons = buttons.filter((e) => e !== void 0);
            filtered_buttons.forEach((e, i) => (e.a = i + 2));

            era.printButton(
              i18n().timon.cum.city_change_target_template.replace(
                '%NAME%',
                target.name,
              ),
              1,
            );
            era.printMultiColumns(
              buttons.map((e) =>
                e !== void 0
                  ? {
                      accelerator: e.a,
                      config: {
                        disabled: !!e.t,
                        title: e.t || void 0,
                        width: 12,
                      },
                      content: e.c,
                      type: 'button',
                    }
                  : { content: [], type: 'text' },
              ),
            );
            era.printButton(i18n().timon.cum.city_leave, 99);
            const ret = await era.input();
            switch (ret) {
              case 1:
                target = target === chara ? me : chara;
                break;
              case 99:
                _flag = false;
                break;
              default:
                await filtered_buttons[ret - 2].h();
                await say_by_waiter_and_wait(
                  i18n().timon.cum.city_bs_change_done,
                );
            }
            _flag &&= money > 0;
          }
          await say_by_waiter_and_wait(i18n().timon.cum.city_bs_bye);
        },
      },
      {
        c: i18n().timon.cum.city_bt_hospital,
        async h() {
          await i18n().timon.cum.city_hospital_start(say_by_waiter_and_wait);
          const lines = era.getLineCount();
          const life_marks = LifeEventMarks.get_marks(0);
          let _flag = true;
          while (_flag) {
            await era.clear(era.getLineCount() - lines);
            print_money_divider();
            era.printButton(
              i18n().timon.cum.city_hp_hp_medicine_template.replace(
                '%PRICE%',
                extra_base.stamina >= 1000
                  ? i18n().timon.cum.city_upgrade_max
                  : i18n()
                      .timon.cum.city_hp_hp_medicine_price_template.replace(
                        '%PRICE%',
                        (extra_base.stamina / 10 + 10).toString(),
                      )
                      .replace(
                        '%NOW%',
                        extra_base.stamina.toLocaleString(lan()),
                      )
                      .replace(
                        '%NEXT%',
                        (extra_base.stamina + 50).toLocaleString(lan()),
                      ),
              ),
              1,
              { disabled: extra_base.stamina === 1000 },
            );
            era.printButton(
              i18n().timon.cum.city_hp_tp_medicine_template.replace(
                '%PRICE%',
                extra_base.time >= 1000
                  ? i18n().timon.cum.city_upgrade_max
                  : i18n()
                      .timon.cum.city_hp_tp_medicine_price_template.replace(
                        '%PRICE%',
                        (extra_base.time / 10 + 10).toString(),
                      )
                      .replace('%NOW%', extra_base.time.toLocaleString(lan()))
                      .replace(
                        '%NEXT%',
                        (extra_base.time + 50).toLocaleString(lan()),
                      ),
              ),
              2,
              { disabled: extra_base.time === 1000 },
            );
            if (
              life_marks.unexpected_pregnant ===
                unexpected_pregnant_enum.mother_sleep &&
              !life_marks.report
            ) {
              era.printButton(i18n().timon.cum.city_hp_b_scan, 3);
            }
            era.printButton(i18n().timon.cum.city_leave, 99);
            switch (await era.input()) {
              case 1:
                await i18n().timon.cum.city_hospital_medicine(
                  say_by_waiter_and_wait,
                  i18n().timon.cum.city_hp_hp_medicine_template.replace(
                    '%PRICE%',
                    '',
                  ),
                );
                money = era.add(
                  'item:「恩宠」',
                  -(extra_base.stamina / 10 + 10),
                );
                extra_base.stamina += 50;
                break;
              case 2:
                await i18n().timon.cum.city_hospital_medicine(
                  say_by_waiter_and_wait,
                  i18n().timon.cum.city_hp_tp_medicine_template.replace(
                    '%PRICE%',
                    '',
                  ),
                );
                money = era.add('item:「恩宠」', -(extra_base.time / 10 + 10));
                extra_base.time += 50;
                break;
              case 3:
                await i18n().timon.cum.city_hospital_b_scan(
                  say_by_waiter_and_wait,
                  get_chara_talk(life_marks.sperm),
                  me,
                );
                life_marks.report = -1;
                money = era.add('item:「恩宠」', 10);
                break;
              default:
                _flag = false;
            }
            _flag &&= money > 0;
          }
        },
      },
      {
        c: i18n().timon.cum.city_bt_massage,
        async h() {
          const max_limit = 5 + (chara.sex_code !== 1);
          let _flag = true;
          await say_by_waiter_and_wait(i18n().timon.cum.city_massage_welcome);
          const lines = era.getLineCount();
          let target = chara;
          while (_flag) {
            await era.clear(era.getLineCount() - lines);
            const part_limit = era.get(`talent:${chara.id}:调教度`);
            print_money_divider();
            let talent_list = get_filtered_talents(target.sex_code, 50);
            talent_list = talent_list.filter(
              (e) => era.get(`talent:${target.id}:${e}`) === 0,
            );
            era.printButton(
              i18n().timon.cum.city_change_target_template.replace(
                '%NAME%',
                target.name,
              ),
              1,
            );
            era.printButton(
              i18n().timon.cum.city_mg_get_talent,
              2,
              talent_list.length === 0
                ? {
                    disabled: true,
                    title: i18n().timon.cum.city_mg_get_talent_limit_tip,
                  }
                : {},
            );
            if (target.id > 0) {
              era.printButton(
                i18n().timon.cum.city_mg_trained_talent_template.replace(
                  '%PRICE%',
                  part_limit >= max_limit
                    ? i18n().timon.cum.city_upgrade_max
                    : i18n()
                        .timon.cum.city_mg_trained_talent_price_template.replace(
                          '%NOW%',
                          part_limit.toString(),
                        )
                        .replace('%NEXT%', (part_limit + 1).toString()),
                ),
                3,
                { disabled: part_limit >= max_limit },
              );
            }
            era.printButton(i18n().timon.cum.city_leave, 99);
            const p = get_random_entry(talent_list);
            switch (await era.input()) {
              case 1:
                target = target === chara ? me : chara;
                break;
              case 2:
                money = era.add('item:「恩宠」', -60);
                await era.printAndWait(
                  i18n().timon.cum.get_city_massage_get_talent(target, {
                    color: buff_colors[2],
                    content: i18n().tb_talent.template.replace(
                      '%NAME%',
                      i18n().tb_talent[p],
                    ),
                  }),
                );
                era.set(`talent:${target.id}:${p}`, 1);
                break;
              case 3:
                money = era.add('item:「恩宠」', -25);
                await era.printAndWait(
                  i18n().timon.cum.get_city_massage_upgrade_trained_talent(
                    target,
                  ),
                );
                era.add(`talent:${chara.id}:调教度`, 1);
                break;
              default:
                _flag = false;
            }
            _flag &&= money > 0;
          }
          await say_by_waiter_and_wait(i18n().timon.cum.city_mg_bye);
        },
      },
      {
        c: i18n().timon.cum.city_bt_library,
        async h() {
          let _flag = true;
          await say_by_waiter_and_wait(i18n().timon.cum.city_library_welcome);
          const lines = era.getLineCount();
          while (_flag) {
            await era.clear(era.getLineCount() - lines);
            print_money_divider();
            // TALENTNAME:57 = 钢之意志
            const iron_mind = era.get('talent:0:57') > 0;
            const chara_im = era.get(`talent:${chara.id}:57`);
            era.printButton(
              i18n().timon.cum.city_lb_self_get_im_template.replace(
                '%NAME%',
                me.name,
              ),
              1,
              { disabled: iron_mind },
            );
            era.printButton(
              i18n().timon.cum.city_lb_self_rm_im_template.replace(
                '%NAME%',
                me.name,
              ),
              2,
              { disabled: !iron_mind },
            );
            era.printButton(
              i18n().timon.cum.city_lb_chara_get_im_template.replace(
                '%NAME%',
                chara.name,
              ),
              3,
              { disabled: chara_im },
            );
            era.printButton(
              i18n().timon.cum.city_lb_chara_rm_im_template.replace(
                '%NAME%',
                chara.name,
              ),
              4,
              { disabled: !chara_im },
            );
            if (!extra_base.skill && money >= 36) {
              era.printButton(i18n().timon.cum.city_lb_update_abl_limit, 5);
            }
            era.printButton(i18n().timon.cum.city_leave, 99);
            const ret = await era.input();
            if (ret === 99) {
              _flag = false;
            } else {
              await i18n().timon.cum.handle_city_library(
                ret <= 2 ? me : chara,
                ret % 2 === 1,
                {
                  content: i18n().tb_talent.template.replace(
                    '%NAME%',
                    i18n().tb_talent[57],
                  ),
                  color: mark_colors.iron,
                },
                ret === 5,
              );
              if (ret === 5) {
                // ITEMNAME:110 = 「恩宠」
                money = era.add('item:110', -66);
                extra_base.skill = 1;
              } else {
                // ITEMNAME:110 = 「恩宠」
                money = era.add('item:110', -5 - (ret === 1 || ret === 4) * 5);
                const tid = ret <= 2 ? me.id : chara.id;
                if (ret % 2 === 1) {
                  era.set(`talent:${tid}:57`, 1);
                } else {
                  era.set(`talent:${tid}:57`, 0);
                }
              }
            }
            _flag &&= money > 0;
          }
          await say_by_waiter_and_wait(i18n().timon.cum.city_lb_bye);
        },
      },
      {
        c: i18n().timon.cum.city_bt_arcade,
        async h() {
          say_by_waiter(i18n().timon.cum.city_ac_welcome);
          print_money_divider();
          if (await select_yes_or_no(i18n().timon.cum.city_ac_confirm)) {
            const dice = Math.random();
            if (dice < 0.01) {
              await i18n().timon.cum.handle_ac_grand_prize(
                say_by_waiter_and_wait,
              );
              money = era.add('item:「恩宠」', 20);
            } else {
              money = era.add('item:「恩宠」', -2);
              const items = [];
              if (dice < 2 / (money + 10)) {
                [
                  26,
                  ...new Array(7).fill(0).map((_, i) => 60 + i),
                  ...new Array(4).fill(0).map((_, i) => 70 + i),
                  ...new Array(7).fill(0).map((_, i) => 76 + i),
                  85,
                ].forEach((e) => {
                  if (era.get(`item:${e}`) < 1) {
                    items.push(e);
                  }
                });
                [74, 75].forEach((e) => {
                  if (era.get(`item:${e}`) < 2) {
                    items.push(e);
                  }
                });
              }
              if (items.length === 0) {
                new Array(8).fill(0).forEach((_, i) => items.push(i));
                new Array(11).fill(0).map((_, i) => items.push(i + 10));
                new Array(3).fill(0).map((_, i) => items.push(i + 27));
                new Array(11).fill(0).map((_, i) => items.push(i + 31));
                items.push(25, 43, 84, 101);
              }
              const item = get_random_entry(items);
              era.add(`item:${item}`, 1);
              await era.printAndWait(di18n.tb_item.notify(item));
            }
          }
        },
      },
      {
        c: i18n().timon.cum.city_bt_newspaper,
        async h() {
          const menu = [1, 5, 10, 50];
          let _flag = true;
          await i18n().timon.cum.city_newspaper_start(say_by_waiter_and_wait);
          const lines = era.getLineCount();
          while (_flag) {
            await era.clear(era.getLineCount() - lines);
            say_by_waiter(i18n().timon.cum.city_ns_welcome);
            print_money_divider();
            era.printMultiColumns(
              menu.map((e, i) => ({
                accelerator: i + 1,
                content: i18n()
                  .timon.cum.city_ns_button_template.replace(
                    '%PRICE%',
                    e.toString(),
                  )
                  .replace('%HONOUR1%', e.toString())
                  .replace('%HONOUR2%', (e * 4).toString()),
                type: 'button',
                config: { width: 12 },
              })),
            );
            era.printButton(i18n().timon.cum.city_leave, 99);
            const ret = await era.input();
            if (ret === 99) {
              _flag = false;
            } else {
              const delta = get_random_value(menu[ret - 1], menu[ret - 1] * 4);
              await say_by_waiter_and_wait(
                i18n().timon.cum.city_ns_result_template.replace(
                  '%HONOUR%',
                  delta.toString(),
                ),
              );
              era.add('flag:当前声望', delta);
              money = era.add('item:「恩宠」', -menu[ret - 1]);
            }
            _flag &&= money > 0;
          }
          await say_by_waiter_and_wait(i18n().timon.cum.city_ns_bye);
        },
      },
      {
        c: i18n().timon.cum.city_bt_bank,
        async h() {
          const menu = [1, 5, 10, 50];
          let _flag = true;
          await say_by_waiter_and_wait(i18n().timon.cum.city_bn_start);
          const lines = era.getLineCount();
          while (_flag) {
            await era.clear(era.getLineCount() - lines);
            say_by_waiter(i18n().timon.cum.city_bn_welcome);
            print_money_divider();
            era.printMultiColumns(
              menu.map((e, i) => ({
                accelerator: i + 1,
                content: i18n()
                  .timon.cum.city_bn_button_template.replace(
                    '%PRICE%',
                    e.toString(),
                  )
                  .replace('%MONEY1%', e.toString())
                  .replace('%MONEY2%', (e * 10).toString()),
                type: 'button',
                config: { width: 12 },
              })),
            );
            era.printButton(i18n().timon.cum.city_leave, 99);
            const ret = await era.input();
            if (ret === 99) {
              _flag = false;
            } else {
              const got = menu[ret - 1] * get_random_value(1, 10);
              await say_by_waiter_and_wait(
                i18n().timon.cum.city_bn_result_template.replace(
                  '%MONEY%',
                  got.toLocaleString(lan()),
                ),
              );
              era.add('flag:当前马币', got);
              money = era.add('item:「恩宠」', -menu[ret - 1]);
            }
            _flag &&= money > 0;
          }
          await say_by_waiter_and_wait(i18n().timon.cum.city_bn_bye);
        },
      },
      {
        c: i18n().timon.cum.city_bt_gov,
        d: true,
        async h() {
          if (await i18n().timon.cum.handle_gov(mayor)) {
            era.set('flag:目白城变量', {});
            era.set('flag:目白城风格', 0);
            era.set('item:「恩宠」', 0);
          }
        },
        // DO NOT TRANSLATE
        t: '可切换目白城风格，暂未开放',
      },
      {
        a: 999,
        c: i18n().timon.cum.city_leave,
        h: () => (flag = false),
      },
    ];
    era.printMultiColumns(
      buttons.map((e, i) => ({
        accelerator: e.a || 100 + i,
        config: { disabled: e.d, title: e.t, width: e.a === 999 ? 24 : 6 },
        content: e.c,
        type: 'button',
      })),
    );
    const ret = await era.input();
    era.drawLine();
    await (buttons.find((e) => e.a === ret) || buttons[ret - 100]).h();
    if (money <= 0) {
      era.set('item:「恩宠」', 0);
      era.set('item:「亏欠」', -money);
      era.drawLine();
      await i18n().timon.cum.city_notify_misty();
      flag = false;
    }
  }
}

module.exports = cum_shop;
